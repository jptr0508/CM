var tipo;

window.onload = async function () {
    let data = sessionStorage.getItem('concentId');
    try {
        let html = "";
        let concent = await $.ajax({
            url: "/api/concentracoes/" + data,
            method: "get",
            dataType: "json"
        });
        console.log(concent);

        html += `<section>
<h3>${concent.conc_nome}</h3>
<h3>${concent.conc_descricao}</h3>
<h3>Tipo: ${concent.conc_tipo}</h3>
<h3>Data: ${concent.conc_data}</h3>
<h3>${concent.conc_creator_id}</h3>
<div id="map"></div>
</section>`;

        tipo = concent.conc_tipo;

document.getElementById("concentracoes").innerHTML = html;

                let map = L.map('map').setView([concent.conc_coordenadas.x, concent.conc_coordenadas.y], 13);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

        switch (tipo) {
            case 1:


                

                L.marker([concent.conc_coordenadas.x, concent.conc_coordenadas.y]).addTo(map)
                    .bindPopup(concent.conc_nome)
                    .openPopup();

                break;
            case 2:
                

                let roadtrip = await $.ajax({
                    url: "/api/concentracoes/" + data +"/roadtrip",
                    method: "get",
                    dataType: "json"
                });
                console.log(roadtrip);
                L.Routing.control({
                    waypoints: [
                        L.latLng(roadtrip.conc_coordenadas.x, roadtrip.conc_coordenadas.y),
                        L.latLng(roadtrip.rt_coordenadas_final.x,roadtrip.rt_coordenadas_final.y )
                    ]
                }).addTo(map);

                break;
        }

    } catch (err) {
        console.log(err);
    }
}