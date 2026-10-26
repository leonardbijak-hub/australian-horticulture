# Interview and code guide

Line references checked on 27 October 2026. They refer to the current readable source files and may shift after later edits.

## My central explanation

I investigate whether rising Australian horticultural production value corresponds to more physical output, and how outcomes differ across industries and regions. I keep tonnes, plant units and dollars separate. My four sections cover growth, geography, value versus output, and markets and growers.

## Where the charts are drawn

| Chart | Specification | Main mark starts | Control or signal |
|---|---|---|---|
| 1: Indexed sector trends | `01.vl.json` | Line 85 | Line 31 |
| 2: Industry treemap | `02.vg.json` | Line 108 | Hover tooltips |
| 3: Growth contributions | `03.vl.json` | Line 63 | Hover tooltips |
| 4: Industry rankings | `04.vl.json` | Line 39 | Line 265 |
| 5: State production values | `05.vl.json` | Line 107 | Line 46 |
| 6: Avocado output per bearing hectare | `06.vl.json` | Line 79 | Line 51 |
| 7: Nursery Dorling cartogram | `07.vg.json` | Line 193 | Line 27 |
| 8: Annual industry changes | `08.vl.json` | Line 76 | Hover tooltips |
| 9: Physical versus value growth | `09.vl.json` | Line 207 | Hover tooltips |
| 10: Nursery plant output | `10.vl.json` | Line 39 | Hover tooltips |
| 11: Potato supply chain | `11.vg.json` | Line 299 | Line 48 |
| 12: Export-value composition | `12.vl.json` | Line 1433 | Hover tooltips |
| 13: Avocado land and grower businesses | `13.vl.json` | Line 104 | Hover tooltips |

`app.js`, line 9, associates the 13 specification filenames with chart containers. Line 31 fetches each specification; line 39 passes it to Vega-Embed for rendering. The script waits for the local fonts before drawing, then updates chart dimensions when the window resizes.

## How I explain the important code

- **Vega-Lite:** `data` supplies records, `transform` filters or derives fields, `mark` chooses the graphical object, and `encoding` maps fields to position, colour, size or text.
- **Vega:** `marks` and their `encode` blocks describe graphical elements directly. Signals hold values that expressions can use, including selected years and responsive positions.
- **Separate lines:** Chart 4 uses `detail: commodity` to keep one ranking trajectory per industry. Chart 13 uses `color: measure` and `strokeDash: measure`, so bearing area and grower businesses form separate series. Points are connected in the ordered financial-year sequence.
- **Dropdown labels:** Chart 4's internal option `Leafy salad vegetables` matches the source data. The visible label is `Salad vegetables`. Changing the identifier without changing the data match could break highlighting.
- **Dorling layout:** `scripts/build_cartogram.py` starts from approximate geographic anchors. Pairwise repulsion separates circles, and their radii are proportional to the square root of value. Thus circle area is proportional to value. The regenerated coordinates change; the published values do not. Chart 7 draws those positions and retains a separate geographic-reference inset.
- **Sankey branches:** Chart 11's `flows` records define the source and destination links. A stack computes offsets within each source node. A path expression draws the upper and lower cubic curves for each ribbon. The destination rectangles mark endpoints; the flow records and path geometry create the branches. Both stages share one tonnes-to-thickness scale.
- **Labels:** Text marks are separate from points, rectangles and circles. Chart 9's lookup supplies label positions, rule marks draw leader lines, and text layers draw industry names.
- **Text lines:** `text-layout.js` limits each line to ten words or 60 characters. It preserves inline emphasis and links, measures available width, and recalculates breaks after font loading and resizing.

## Questions I should be ready to answer

1. **Does more production value mean more output?** No. Prices and product mix can affect nominal production value. I compare it with physical output rather than treating dollar growth as volume growth or profit.
2. **Why use an index?** Each series starts at 100 in its own baseline year, making relative change comparable without equating different original units.
3. **How do my three maps differ?** Chart 5 places proportional symbols at approximate state locations. Chart 6 colours state areas by a normalised ratio. Chart 7 replaces state areas with displaced proportional circles.
4. **Why keep the choropleth scale fixed at 3–15?** It covers all published regional values in my selected years and supports comparisons between years. Grey indicates no estimate, not zero. The axis does not need a zero baseline in the way a proportional-length bar chart does.
5. **Why do I use different heatmap colours?** Sector colours identify fruit, vegetables and nursery elsewhere. A separate purple/gold legend encodes the direction of annual change, with signed values providing a second cue.
6. **Are my sources independent?** Not entirely. The general ABS tables reproduce Hort Innovation data. I acknowledge that overlap; the experimental avocado estimates add bearing area and grower-business variables.
7. **How do the potato flows balance?** Processing, fresh exports and domestic fresh supply sum to 1,493,725 tonnes. Retail and food service sum to the domestic fresh supply of 453,867 tonnes.
8. **How do I count the idioms?** I do not count repeated indexed line charts as separate idioms. The rubric treats all map idioms as advanced. My methods document lists advanced candidates and explains the conservative count if the bump chart is treated as basic.

## Submission checks that need my own confirmation

- My A4 sketch must be drawn by hand, then scanned or photographed into a publicly accessible PDF in this repository. The digital sketch guide is reference material.
- The final page should follow that sketch and retain four clear narrative sections.
- I need to put the required URLs and the Domain/Who/What/Why/How description into the supplied Moodle template.
- I need to prepare for questions about both my code/design and the unit material from Weeks 1–11. This guide is a starting point, not a complete course revision pack.
- My existing AI acknowledgement must remain in the submission.
