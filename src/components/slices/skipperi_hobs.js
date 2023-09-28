import richText from "../richText.js"

const html = ({
    title,
    lang
}={}) => `
<section class="slice skipperi-hobs">
    ${richText(title)}
    <div class="map-location-buttons" id="areas">
        <div class="fin"></div>
        <div class="swe"></div>
        <div class="dnk"></div>
        <div class="nor"></div>
        <div class="can"></div>
        <div class="nzl"></div>
    </div>
    <div class="map" id="map"></div>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <script>skipperiHobs("${lang}")</script>
</section>`

export default html