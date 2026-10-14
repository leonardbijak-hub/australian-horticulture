# Grown Unevenly

A single-page Vega/Vega-Lite visualisation of Australia's fruit, vegetable and nursery industries. Created for FIT3179 Data Visualisation 2 by Leo, October 2026.

Research question: How did these industries change between 2020/21 and 2024/25, and which industries and regions account for differences between growth in dollar value and physical output?

## Files

- `index.html`, `style.css`, `app.js`: the scrolling webpage.
- `01.vl.json` to `13.vl.json` / `*.vg.json`: individual, human-readable Vega or Vega-Lite specifications.
- CSV and JSON files: prepared chart data, with original units and sources.
- `australia.topojson`: simplified ABS ASGS Edition 3 state boundaries.
- `METHODS.md`: source coverage, preparation, formulas, limitations and What/Why/How design rationale.
- `HAND_DRAWN_SKETCH_GUIDE.md`: instructions for the student's required hand-drawn A4 sketch. This guide is not the submitted sketch.
- Vendor scripts and `THIRD_PARTY_LICENSES.txt`: pinned, locally hosted Vega 5.30.0, Vega-Lite 5.20.1 and Vega-Embed 6.26.0.

## Running

Serve this directory over HTTP, or enable GitHub Pages using the `main` branch and root folder. Opening `index.html` as a local file can block data requests. No build or account is required for readers.

## Validation

All 13 specifications were compiled and rendered to SVG with their real data. The value/output, state/year, yield/year and cartogram/year controls were exercised. The three-sector treemap reconciles to $16,125.2m. The potato production flows reconcile exactly. Source geometry was simplified, degenerate rings removed and spherical winding checked.

The original source PDFs and spreadsheets are linked in METHODS.md, rather than republished here. The source datasets retain their publishers' conditions. Third-party software licences are included.

## Submission work still required

The student must draw the A4 sketch by hand, scan or photograph it and upload an actual sketch PDF. A computer-generated layout does not fulfil this requirement. Use the current four-section page when preparing or checking the sketch. Moodle submission and the studio interview are completed by the student.

AI acknowledgement: ChatGPT/Codex assisted with source research, data preparation, narrative text, code and verification. The student should review the work and explain the design choices at the interview.
