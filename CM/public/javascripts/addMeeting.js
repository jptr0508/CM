var latleng;
var latlengF
var tipo;
window.onload = async function () {

    document.getElementById("mapaFL").style.display = 'none';
    document.getElementById("mapaF").style.display = 'none';
    try {

        document.getElementById("mapaF").innerHTML = "";

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
            latleng = "" + e.latlng.lat + "," + e.latlng.lng;
            console.log(latleng);
        }

        map.on('click', onMapClick);



        var mapaF = L.map('mapaF').setView([38.712954, -9.131880], 13);


        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapaF);

        var popup1 = L.popup();

        function onMapClick1(e1) {
            popup1
                .setLatLng(e1.latlng)
                .setContent("You clicked the map at " + e1.latlng.toString())
                .openOn(mapaF);
            latlengF = "" + e1.latlng.lat + "," + e1.latlng.lng;
            console.log(latlengF);
        }

        mapaF.on('click', onMapClick1);

    } catch (err) {
        console.log(err);
    }
}

async function roadtrip() {
    tipo = document.getElementById("tipoEvent").value;
    switch (tipo) {
        case "1":
            document.getElementById("mapaFL").style.display = 'none';
            document.getElementById("mapaF").style.display = 'none';
            break;


        case "2":
            document.getElementById("mapaFL").style.display = 'block';
            document.getElementById("mapaF").style.display = 'block';
            break;
    }
    console.log(tipo);
}

async function Registar() {
    
    switch (tipo) {
       
        case "1":
            
            let data = {
                conc_nome: document.getElementById("nome").value,
                conc_descricao: document.getElementById("descricao").value,
                conc_data: document.getElementById("data").value,
                conc_rt_id: null,
                conc_coordenadas: latleng,
                conc_creator_id: 1
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
            break;

        case "2":
            try {
                let data = {
                    conc_nome: document.getElementById("nome").value,
                    conc_descricao: document.getElementById("descricao").value,
                    conc_data: document.getElementById("data").value,
                    conc_rt_id: null,
                    conc_coordenadas: latleng,
                    conc_creator_id: 1,
                    rt_coordenadas_final: latlengF
                };

                let res = await $.ajax({
                    url: `/api/concentracoes/roadtrip`,
                    method: "post",
                    data: JSON.stringify(data),
                    dataType: "json",
                    contentType: "application/json"
                })


                alert("Roadtrip criado com sucesso");
                window.location.href = "meeting.html";
            } catch (err) {
                console.log(err);
            }
            break;
    }
}