window.onload = async function () {

    var mymap = L.map('map').setView([concent.conc_coordenadas.x, concent.conc_coordenadas.y], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidG9sb2pvIiwiYSI6ImNrdm1tMXR5czBpczEydHFmemZydXUzaDIifQ.lGeTBDscs0MSt-l4BXK6ig'
    }).addTo(mymap);

    try {
        let html = "";
        let concentracoes = await $.ajax({
            url: `/api/concentracoes`,
            method: "get",
            dataType: "json"
        });

        for (let concent of concentracoes) {
            html += `<section onclick='showItem(${concent.conc_id})'>
            <h3>${concent.conc_nome}</h3>
            <div id="map"></div>
    </section>`;
            document.getElementById("concent").innerHTML = html;
        }
    } catch (err) {
        console.log(err);
    }
}