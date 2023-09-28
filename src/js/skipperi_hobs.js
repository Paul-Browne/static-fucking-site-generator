import harbours from "./locations.js"
import leaflet from "leaflet"

export default lang => {
    
    const centerCoordinates = {
        fi: { lat: 60.6, lon: 24.9449625, zoom: 5 },
        'sv-se': { lat: 59.3509366, lon: 18.1420808, zoom: 6 },
        no: { lat: 59.9139, lon: 10.7522, zoom: 9 },
        'da-dk': { lat: 59.3509366, lon: 18.1420808, zoom: 5 },
        'en-gb': { lat: 60.1605253, lon: 24.9449625, zoom: 9 },     // ???
        'en-us': { lat: 60.1605253, lon: 24.9449625, zoom: 9 },
        'en-nz': { lat: -36.8359, lon: 174.743, zoom: 9 },
        'en-ca': { lat: 43.6341570013708, lon: -79.37393252227673, zoom: 12 },
        'en-au': { lat: -27.4700979, lon: 153.0262211, zoom: 9 }
    }

    const icon = leaflet.icon({
        iconUrl: '/img/map-marker-icon-motorboat.svg',
        iconAnchor: [17, 48]
    });
    
    
    const {lat, lon, zoom } = centerCoordinates[lang];
    const map = leaflet.map('map',{
        scrollWheelZoom: false
    }).setView([lat, lon], zoom);
    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
        
    const harboursGroup = new leaflet.FeatureGroup();
    harbours.forEach(location => {
        harboursGroup.addLayer(leaflet.marker([location.lat, location.lon], {icon: icon}))
        if(location.buttonZoomLevel){
            // Re-organize based on country (eg, nzl first on en-nz pages)
            const btnContainer = document.getElementById("areas");
            const areaContainer = btnContainer.querySelector(`.${location.country}`)
            const btn = document.createElement("BUTTON")
            btn.addEventListener("click", (e) => {
                map.setView([location.lat, location.lon], location.buttonZoomLevel);
                btnContainer.querySelector(".active")?.classList.remove("active");
                e.target.classList.add("active");
            })
            btn.textContent = location.area;
            areaContainer.appendChild(btn);
        }
    })
    map.addLayer(harboursGroup);       
}