# Data and design methods

## Domain, why and who

Domain: Australian horticulture, focusing on fruit, vegetables and nursery production.

Why: determine how production changed over time, identify major industries, compare geographic concentration, and distinguish economic value from physical output. The page presents a guided story with limited, purposeful exploration.

Who: a general reader in Australia or Malaysia. Financial years, farm-gate value, bearing area, indices and cartograms are explained in ordinary language. No specialist statistical knowledge is assumed.

## What: sources and creation

### Hort Innovation

Australian Horticulture Statistics Handbook 2024/25, prepared by Kynetec; reference year ends 30 June 2025. It draws on industry sources, trade data and supply-chain modelling. Nursery figures use the separately collected NY21000 nursery industry statistics project.

[Handbook landing page](https://www.horticulture.com.au/about-hort-innovation/what-we-do/data-and-insights/australian-horticulture-statistics-handbook)

[Introduction PDF](https://edge.sitecorecloud.io/hortinnovat2fab-hortinnovat9661-production6d5f-0e78/media/Sub-pages/Information-hub/Project-reports/H/australian-horticulture-statistics-handbook-2024-25-intro.pdf)

[Fruit PDF](https://edge.sitecorecloud.io/hortinnovat2fab-hortinnovat9661-production6d5f-0e78/media/Sub-pages/About-us/What-we-do/PDFs-and-other-media/australian-horticulture-statistics-handbook-2024-25--fruit.pdf)

[Vegetable PDF](https://edge.sitecorecloud.io/hortinnovat2fab-hortinnovat9661-production6d5f-0e78/media/Sub-pages/About-us/What-we-do/PDFs-and-other-media/australian-horticulture-statistics-handbook-2024-25-vegetables.pdf)

[Other horticulture PDF](https://edge.sitecorecloud.io/hortinnovat2fab-hortinnovat9661-production6d5f-0e78/media/Sub-pages/About-us/What-we-do/PDFs-and-other-media/australian-horticulture-statistics-handbook-2024-25-other.pdf)

National five-year sector tables: fruit printed page 33, vegetables page 203, nursery page 414. Potato flows and history: pages 339–340. Figures were extracted from the original PDF tables and retained at their published precision. No missing years were interpolated.

### Australian Bureau of Statistics

[Australian Agriculture: Horticulture, 2024/25](https://www.abs.gov.au/statistics/industry/agriculture/australian-agriculture-horticulture/latest-release), released 30 June 2026.

[General horticulture workbook](https://www.abs.gov.au/statistics/industry/agriculture/australian-agriculture-horticulture/2024-25/AAHDC_Aust_Horticulture_202425.xlsx): Table 1 supplies state sector values; Tables 2 and 3 supply fruit/vegetable commodity histories; Table 5 supplies nursery values. These tables reproduce Hort Innovation data and must not be presented as an independent survey confirming the handbook.

[Selected-crop workbook](https://www.abs.gov.au/statistics/industry/agriculture/australian-agriculture-horticulture/2024-25/AAHDC_Hort_Selected_Commodities_202425.xlsx): Table 1 supplies avocado production, bearing area, total crop area and business counts for 2022/23–2024/25. These experimental estimates integrate additional crop mapping and industry inputs. The additional area and grower variables provide substantive information beyond the handbook's production tables.

[Methodology](https://www.abs.gov.au/methodologies/australian-agriculture-horticulture-methodology/2024-25): experimental regional estimates, revisions, units and confidentiality. Some general avocado state data describe packing locations; selected estimates describe growing locations. The page keeps those populations distinct.

Workbooks were read without editing the originals, reshaped from year columns to tidy records, and converted to typed chart data. Unavailable, suppressed or non-numeric values remain missing. Published numeric zeroes remain zeroes.

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

The unneeded trade snapshot extraction is excluded from the delivered site because inconsistencies between snapshot and commodity tables require reconciliation before use. The export composition chart instead uses each sector's own five-year aggregate table. ABARES workforce downloads were inaccessible, so no unverified worker composition has been added.

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
2. **Hierarchical treemap (advanced).** Show the composition of production value while distinguishing sector and industry. Rectangle area encodes value; colour encodes sector. Grouped remaining values preserve the full three-sector denominator.
3. **Waterfall (advanced).** Attribute the latest combined change to each sector. Floating bar positions show accumulation; bar heights show contribution. Direct labels retain exact AUD million amounts.
4. **Bump chart (advanced).** Trace ranking changes among a declared, fixed set. Direct labels identify the final industry positions. The text explains that rank differences do not measure value differences.
5. **Proportional-symbol map (advanced map).** Compare absolute state production values without equating land area and output. Circle area, not radius, encodes value. Sector and year selectors support meaningful regional comparisons.
6. **Sequential choropleth (advanced map).** Compare a normalised production-to-bearing-area ratio. An unclassed continuous blue scale avoids arbitrary bins for six producing states. Its 0–20 domain remains fixed across years; missing states stay grey.
7. **Dorling cartogram (advanced map).** Emphasise nursery concentration by replacing land areas with proportional circles. Relative geographic order is retained while circles move to avoid overlap. The legend and note explain the altered geography.
8. **Diverging heatmap (advanced).** Compare annual value changes across industries and years. Blue/orange encodes direction; intensity encodes magnitude; cell labels provide exact rounded percentages.
9. **Scatterplot (basic).** Compare physical and value changes simultaneously. Zero reference lines identify the quadrants; direct annotations highlight informative industries. Percentage changes make unlike physical units comparable without adding their quantities.
10. **Bar chart (basic).** Show nursery physical output in its correct plant unit. A zero baseline preserves proportional lengths and direct labels reveal the incomplete recovery.
11. **Sankey (advanced).** Show an exactly balanced potato production partition. Ribbon thickness encodes tonnes; branches show destinations. Production, processing and fresh-market definitions stay explicit.
12. **Waffle (advanced).** Show export-value composition for the three focus sectors. Each cell approximates 0.5 percentage points; counts are rounded but labels state the actual shares and values. The denominator is not the whole horticulture export industry.
13. **Indexed multi-line chart (basic).** Contrast additional avocado bearing-area and business-count variables from the experimental ABS data. Separate baselines permit comparison without equating hectares with counts. The narrative makes descriptive claims rather than asserting causes.

There are 13 charts and nine distinct advanced idioms, including three different map idioms. Similar multi-line views should be counted conservatively; the page still has more than ten charts if those views are treated together. All graphics use Vega or Vega-Lite.

## Interaction, layout and accessibility

One scrolling page, four narrative sections, responsive columns, direct takeaways and an ending synthesis. Controls only change appropriate chart elements; no control replaces a major section. Tooltips give detail, while the central story remains visible without hover. Sector colours stay consistent; the heatmap has a separate explicit diverging legend. Typography uses serif headings and sans-serif body/chart labels. Focus styles, semantic headings, chart descriptions and reduced-motion support improve access.

The page locally hosts version-pinned Vega libraries and reuses data loads. Prepared data and specifications total well below a few megabytes. There are no original third-party graphics, stock photographs or copied dashboards.

Author: Leo. Date: 14 October 2026. AI acknowledgement: ChatGPT/Codex assisted with research, preparation, writing, coding and verification. The student must review the narrative and data and complete their own hand-drawn A4 sketch and interview preparation.
