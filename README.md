# Australia’s Changing Harvest

My FIT3179 Data Visualisation 2 project explores Australia's fruit, vegetable and nursery industries. I use production value, physical output and regional data to investigate how the industry changed between 2020/21 and 2024/25.

[View my visualisation](https://leonardbijak-hub.github.io/australian-horticulture/)

## Research question

How did these industries change between 2020/21 and 2024/25, and which industries and regions account for differences between growth in dollar value and physical output?

I organised the story into four sections: growth, geography, output, and markets and industry. The main distinction is between growth in dollar value and growth in physical production. I compare these measures separately because a higher production value does not necessarily mean more produce or plants were grown.

## Files

- `index.html`, `style.css`, `app.js`: the scrolling webpage.
- `fonts/`: self-hosted Fraunces and Source Sans 3, with their licences.
- `scripts/build_cartogram.py`: reproducible Dorling circle displacement without changing published values.
- `text-layout.js`: wraps webpage text at ten words or 60 characters, whichever limit is reached first, while preserving inline formatting and links. Narrow screens can wrap those lines further. Sources & definitions is exempt and wraps naturally.
- `01.vl.json` to `13.vl.json` / `*.vg.json`: individual, human-readable Vega or Vega-Lite specifications.
- CSV and JSON files: prepared chart data, with original units and sources.
- `australia.topojson`: simplified ABS ASGS Edition 3 state boundaries.
- `METHODS.md`: source coverage, preparation, formulas, limitations and What/Why/How design rationale.
- `HAND_DRAWN_SKETCH_GUIDE.md`: my layout plan for the required hand-drawn A4 sketch. The actual sketch still needs to be added.
- Vendor scripts and `THIRD_PARTY_LICENSES.txt`: pinned, locally hosted Vega 5.30.0, Vega-Lite 5.20.1 and Vega-Embed 6.26.0.

## Running

Serve this directory over HTTP, or enable GitHub Pages using the `main` branch and root folder. Opening `index.html` as a local file can block data requests. No build or account is required for readers.

## Validation

I checked all 13 specifications by compiling and rendering them to SVG with the prepared data at desktop, tablet and two mobile widths (52 renders). I also checked every value/output, industry, state/year, yield/year and cartogram/year option (116 control states), plus application loading, shared data caching and four resize transitions. Resizing retains the selected industry. The three-sector treemap totals $16,125.2m, and both stages of the potato production flows balance exactly on one tonnes-to-thickness scale. The map geometry was checked after simplification, including degenerate rings and spherical winding. I also checked the full page at 320, 375, 768, 1024, 1280 and 1366 pixel widths: both fonts loaded, all charts loaded, text stayed within the word/character limits, and neither the page nor its charts overflowed horizontally. I exercised the industry selector and every map year in the browser.

I have linked the original PDFs and spreadsheets in METHODS.md. The source datasets retain their publishers' conditions, and the repository includes the third-party software licences.

## Remaining submission tasks

I still need to draw the A4 sketch by hand, scan or photograph it, and add the sketch PDF. It should follow the same four-section structure as the page. I also need to review the final narrative and data, prepare to explain my design choices in the studio interview, and submit through Moodle.

## Acknowledgements

I used ChatGPT/Codex to assist with source research, data preparation, narrative text, code and verification.

Leo · October 2026
