# Data and design methods

## Domain, why and who

I focus on Australian horticulture, specifically fruit, vegetables and nursery production.

My aim is to show how production changed over time, identify major industries, compare geographic concentration, and distinguish economic value from physical output. I use a guided story with controls for exploring relevant comparisons.

I designed the page for a general reader in Australia or Malaysia. I explain financial years, farm-gate value, bearing area, indices and cartograms in ordinary language, without assuming specialist statistical knowledge.

## What: sources and creation

### Hort Innovation

Australian Horticulture Statistics Handbook 2024/25, prepared by Kynetec; reference year ends 30 June 2025. It draws on industry sources, trade data and supply-chain modelling. Nursery figures use the separately collected NY21000 nursery industry statistics project.

[Handbook landing page](https://www.horticulture.com.au/about-hort-innovation/what-we-do/data-and-insights/australian-horticulture-statistics-handbook)

[Introduction PDF](https://edge.sitecorecloud.io/hortinnovat2fab-hortinnovat9661-production6d5f-0e78/media/Sub-pages/Information-hub/Project-reports/H/australian-horticulture-statistics-handbook-2024-25-intro.pdf)

[Fruit PDF](https://edge.sitecorecloud.io/hortinnovat2fab-hortinnovat9661-production6d5f-0e78/media/Sub-pages/About-us/What-we-do/PDFs-and-other-media/australian-horticulture-statistics-handbook-2024-25--fruit.pdf)

[Vegetable PDF](https://edge.sitecorecloud.io/hortinnovat2fab-hortinnovat9661-production6d5f-0e78/media/Sub-pages/About-us/What-we-do/PDFs-and-other-media/australian-horticulture-statistics-handbook-2024-25-vegetables.pdf)

[Other horticulture PDF](https://edge.sitecorecloud.io/hortinnovat2fab-hortinnovat9661-production6d5f-0e78/media/Sub-pages/About-us/What-we-do/PDFs-and-other-media/australian-horticulture-statistics-handbook-2024-25-other.pdf)

I used the national five-year sector tables on printed pages 33 (fruit), 203 (vegetables) and 414 (nursery), and the potato flows and history on pages 339–340. I extracted figures from the original PDF tables at their published precision and left missing years unfilled.

### Australian Bureau of Statistics

[Australian Agriculture: Horticulture, 2024/25](https://www.abs.gov.au/statistics/industry/agriculture/australian-agriculture-horticulture/latest-release), released 30 June 2026.

[General horticulture workbook](https://www.abs.gov.au/statistics/industry/agriculture/australian-agriculture-horticulture/2024-25/AAHDC_Aust_Horticulture_202425.xlsx): I used Table 1 for state sector values, Tables 2 and 3 for fruit/vegetable commodity histories, and Table 5 for nursery values. These tables reproduce Hort Innovation data, so I treat them as the same underlying source rather than independent confirmation of the handbook.

[Selected-crop workbook](https://www.abs.gov.au/statistics/industry/agriculture/australian-agriculture-horticulture/2024-25/AAHDC_Hort_Selected_Commodities_202425.xlsx): Table 1 supplies avocado production, bearing area, total crop area and business counts for 2022/23–2024/25. These experimental estimates integrate additional crop mapping and industry inputs. The additional area and grower variables provide substantive information beyond the handbook's production tables.

[Methodology](https://www.abs.gov.au/methodologies/australian-agriculture-horticulture-methodology/2024-25): experimental regional estimates, revisions, units and confidentiality. Some general avocado state data describe packing locations; selected estimates describe growing locations. I keep those populations distinct in the page.

I read the workbooks without editing the originals, reshaped year columns into tidy records, and converted the results to typed chart data. Unavailable, suppressed or non-numeric values remain missing. Published numeric zeroes remain zeroes.

### Geography

[ABS ASGS Edition 3 state boundaries](https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs/edition-3-july-2021-june-2026/access-and-downloads/digital-boundary-files). GDA2020 state shapefile converted to TopoJSON, simplified and quantised. Degenerate polygons and very small islands that collapse during simplification are removed. State identity and the major boundaries remain intact. Other territories are outside the sector map data.

The two conventional maps use `conicEqualArea`, rotation -134 degrees, parallels -18 and -36 degrees and a southern centre. The cartogram uses geographic anchors, deterministic circle collision spacing and proportional circle areas. Its positions are explicitly approximate, not farm coordinates.

## Prepared tables

| File | Grain and measures |
|---|---|
| `sector_year.csv` | National sector and year; production AUD million, output and output unit, indices, annual changes, export AUD million |
| `commodity_year.csv` | Named commodity and year; value, output, indices and changes; selected-industry flag and rank |
| `state_sector_year.csv` | State, sector and year; production value and approximate label/circle coordinates |
| `state_commodity_year.csv` | Published commodity-state-year detail for auditing |
| `avocado_year.csv` | National/state and year; tonnes, total/bearing hectares, value, business counts and derived output per bearing hectare |
| `treemap_data.json` | Three-sector hierarchy; leading categories and remaining sector value |
| `cartogram_data.json` | Nursery state-year values and non-overlapping relative positions |
| `potato_supply.csv` | Published 2024/25 processing, fresh-export, domestic-fresh, retail and food-service volumes |

I used each sector's five-year aggregate table for the export composition chart. I excluded a separate trade snapshot because its figures did not reconcile with the commodity tables. I also left out workforce comparisons because I could not verify the ABARES downloads.

## Calculations and checks

- Annual percentage change = `(current / previous - 1) × 100`.
- Index = `current / baseline × 100`; each sector uses its own output unit and baseline.
- Contribution = current sector production value minus previous sector value.
- Output per bearing hectare = avocado tonnes / bearing hectares. Non-bearing area is excluded from the denominator. This derived ratio is not an independently measured farm-efficiency score.
- Export share = sector export AUD million / the sum for fruit, vegetables and nursery × 100. Nuts, cut flowers, turf and processed produce exports are excluded from this comparison.
- Rankings are among the ten named industries selected by 2024/25 production value; they are not ranks among every horticultural category.
- Treemap: selected five leading fruit and vegetable categories plus the difference from each published sector total. Combined categories and their component categories are never simultaneously added.
- Potato balance: `990,000 + 49,858 + 453,867 = 1,493,725 tonnes`; domestic fresh partition: `390,423 + 63,444 = 453,867 tonnes`.
- Three-sector 2024/25 value: `7,336.4 + 6,031.8 + 2,757.0 = 16,125.2 AUD million`.
- Nursery physical output is in million plant units and is never summed with tonnes.
- Source dates, values and units were checked; the national avocado workbook figure is 131,385 tonnes, while the article rounds it to 131,000.

## Limits

Values are nominal, not adjusted for inflation, and are not profits. Production value per tonne can reflect multiple price and product-mix effects; the project does not attribute changes to prices alone. Short annual histories do not establish seasonal cycles. General and selected ABS data have different geographic allocation methods. Regional quantities are experimental and modelled, so the page identifies that limitation. Published aggregates may differ slightly across source editions or because of rounding; national sector totals and commodity histories each retain their documented source basis.

## How: chart rationale

1. **Indexed multi-line chart (basic).** Compare sector trajectories after removing differences in starting scale. The value/output selector answers the central question with consistent units within each series and explains the index baseline.
2. **Hierarchical treemap (advanced).** Show the composition of production value while distinguishing sector and industry. Rectangle area encodes value; colour encodes sector. Industry names are labelled directly inside the rectangles, with wrapping and rotation where needed. A colour-coded list below gives complete names and values without hover. Grouped remaining values preserve the full three-sector denominator.
3. **Waterfall (advanced).** Attribute the latest combined change to each sector. Floating bar positions show accumulation; bar heights show contribution. Direct labels retain exact AUD million amounts.
4. **Bump chart (advanced).** Trace ranking changes among a declared, fixed set. Direct labels identify the final industry positions. An industry selector emphasises one trajectory and its endpoint label while dimming the others; All industries restores the overview. Sector colours and industry grouping remain consistent. The text explains that rank differences do not measure value differences.
5. **Proportional-symbol map (advanced map).** Compare absolute state production values without equating land area and output. Circle area, not radius, encodes value. Sector and year selectors support meaningful regional comparisons. The title identifies estimated state allocations, and the caption explains packing-location allocations before the reader reaches the map.
6. **Sequential choropleth (advanced map).** Compare a normalised production-to-bearing-area ratio. An unclassed continuous fruit-orange scale avoids arbitrary bins for six producing states. Its 3–15 domain remains fixed across years; missing states stay grey. A separate built-in grey No estimate legend swatch distinguishes unavailable estimates from low or zero ratios.
7. **Dorling cartogram (advanced map).** Emphasise nursery concentration by replacing land areas with proportional circles. A deterministic pair-repulsion layout in scripts/build_cartogram.py separates circles while approximate geographic anchors retain state ordering. Circle area uses the same value scale across years. The main display replaces state areas with circles; a separate geographic inset provides context. The legend and note explain the altered geography.
8. **Diverging heatmap (advanced).** Compare annual value changes across industries and years. A separate purple/gold palette encodes direction; intensity encodes magnitude; cell labels show signed percentages to one decimal place.
9. **Scatterplot (basic).** Compare physical and value changes simultaneously. Zero reference lines identify the quadrants; all ten selected industries have direct labels with leader lines. A visible hint invites readers to hover over points for exact values. Percentage changes make unlike physical units comparable without adding their quantities.
10. **Bar chart (basic).** Show nursery physical output in its correct plant unit. A zero baseline preserves proportional lengths and direct labels reveal the incomplete recovery. In-bar annotations identify the 2023/24 trough and the 3.3% recovery in 2024/25.
11. **Sankey (advanced).** Show an exactly balanced two-stage potato production partition: production divides into processing, fresh exports and domestic fresh supply; domestic fresh supply then divides into retail and food service. Both stages load the published figures from potato_supply.csv and use one tonnes-to-thickness scale. A taller layout at narrow widths keeps all destinations visible. Tooltips distinguish shares of the source flow from shares of total production. Production, processing and fresh-market definitions stay explicit.
12. **Waffle (advanced).** Show export-value composition for the three focus sectors. Each cell approximates 0.5 percentage points; counts are rounded but one shared legend states the actual shares and values. The denominator is not the whole horticulture export industry.
13. **Indexed multi-line chart (basic).** Contrast additional avocado bearing-area and business-count variables from the experimental ABS data. Separate baselines permit comparison without equating hectares with counts. Fruit-family colours and solid/dashed lines distinguish the two measures. Cross-references connect the view to the earlier avocado output-per-hectare case study. The narrative makes descriptive claims rather than asserting causes.

There are 13 chart views. Conservatively grouping the two indexed multi-line views leaves 12. The advanced candidates are the treemap, waterfall, bump chart, proportional-symbol map, choropleth, Dorling cartogram, heatmap, Sankey and waffle. All map idioms are advanced under the assignment rubric. If the bump chart is classified as a basic line chart, eight advanced candidates remain provided the three maps are recognised as distinct. Effectiveness and meaning matter alongside the count. All graphics use Vega or Vega-Lite.

## Interaction, layout and accessibility

I organised the scrolling page into four narrative sections with responsive columns, direct takeaways and a closing synthesis. Controls update individual charts, while the main story stays visible without interaction. I use consistent sector colours and a separate diverging legend for the heatmap. Headings use Fraunces, a serif font suited to the editorial field-notes theme; body text and all chart labels use Source Sans 3. I self-host the Latin font files under their SIL Open Font Licences and wait for the fonts before rendering charts. Georgia and Arial remain fallback fonts. I included focus styles, semantic headings, chart descriptions and reduced-motion support.

I limit each text line to ten words or 60 characters, whichever is reached first. The layout script counts both limits and inserts line breaks without rewriting my text or replacing its links and emphasis. Existing heading breaks remain in place. I also measure the available text width after fonts load and reflow the generated breaks when the window resizes, preserving readability on narrow screens. This rule also applies to sources and footer text.

The page locally hosts version-pinned Vega libraries and reuses data loads. Prepared data and specifications total well below a few megabytes. There are no original third-party graphics, stock photographs or copied dashboards.

Leo · 14 October 2026. I used ChatGPT/Codex to assist with research, data preparation, writing, coding and verification. My remaining submission tasks are recorded in the README.

Last updated: 27 October 2026. I retained the four-section structure and added direct Chart spec links. My digital sketch guide is a drawing reference; the required submission is an image of my own hand-drawn sketch in a PDF, aligned with the final page.
