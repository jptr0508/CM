var latleng;

window.onload = async function () {
    try {
        var map = L.map('mapa').setView([38.712954, -9.131880], 13);


        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var popup = L.popup();

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(map);
            latleng = ""+e.latlng.lat+","+e.latlng.lng;
            console.log(latleng);
        }

        map.on('click', onMapClick);



    } catch (err) {
        console.log(err);
    }


}

async function Registar() {




    let data = {
        conc_nome: document.getElementById("nome").value,
        conc_descricao: document.getElementById("descricao").value,
        conc_data: document.getElementById("data").value,
        conc_rt_id: null,
        conc_coordenadas: latleng.toString(),
        conc_creator_id:1
    };
    try {
        let res = await $.ajax({
            url: `/api/concentracoes`,
            method: "post",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json"
        })
        alert("Evento criado com sucesso");
        window.location.href = "meeting.html";
    } catch (err) {
        console.log(err);
    }
}