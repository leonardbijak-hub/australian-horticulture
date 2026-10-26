"""Rebuild collision-free Dorling positions; keep published values unchanged."""
import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ANCHORS = {
    'WA': (120, 205), 'NT': (225, 95), 'SA': (240, 230),
    'QLD': (340, 105), 'NSW': (360, 235),
    'VIC': (290, 330), 'TAS': (390, 370),
}

def layout(rows):
    nodes = [dict(row, px=ANCHORS[row['abbr']][0],
                  py=ANCHORS[row['abbr']][1],
                  radius=85 * math.sqrt(row['value_m'] / 850)) for row in rows]
    for iteration in range(2400):
        # Geographic anchors keep the approximate state ordering recognisable.
        spring = 0.012 if iteration < 1800 else 0
        for node in nodes:
            ax, ay = ANCHORS[node['abbr']]
            node['px'] += (ax - node['px']) * spring
            node['py'] += (ay - node['py']) * spring
        for _ in range(3):
            for i, left in enumerate(nodes):
                for right in nodes[i + 1:]:
                    dx, dy = right['px'] - left['px'], right['py'] - left['py']
                    distance = math.hypot(dx, dy)
                    overlap = left['radius'] + right['radius'] + 4 - distance
                    if overlap > 0:
                        push = overlap / 2 + 0.0001
                        ux, uy = (dx / distance, dy / distance) if distance else (1, 0)
                        left['px'] -= ux * push
                        left['py'] -= uy * push
                        right['px'] += ux * push
                        right['py'] += uy * push
            for node in nodes:
                r = node['radius']
                node['px'] = min(490 - r, max(10 + r, node['px']))
                node['py'] = min(410 - r, max(24 + r, node['py']))
    for i, left in enumerate(nodes):
        for right in nodes[i + 1:]:
            assert math.hypot(left['px'] - right['px'], left['py'] - right['py']) >= left['radius'] + right['radius'] + 3.99
    return {node['abbr']: (round(node['px'] / 500, 8), round(node['py'] / 500, 8)) for node in nodes}

def main():
    path = ROOT / 'cartogram_data.json'
    rows = json.loads(path.read_text())
    for year in sorted({row['year'] for row in rows}):
        positions = layout([row for row in rows if row['year'] == year])
        for row in rows:
            if row['year'] == year:
                row['x'], row['y'] = positions[row['abbr']]
    path.write_text(json.dumps(rows, indent=2) + '\n')

if __name__ == '__main__':
    main()
