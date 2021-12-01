var user_id = 1;
var car_id = sessionStorage.getItem("car_id");

window.onload = async function () {
    try {
        console.log(car_id);
        var map = L.map('mapa').setView([45.707116, -9.152556], 3);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        let html = "";
        let concentracoes = await $.ajax({
            url: '/api/concentracoes',
            method: "get",
            dataType: "json"
        });
        for (let concent of concentracoes) {

            let tipo_concent;
            console.log(concent.conc_tipo);


            switch (concent.conc_tipo) {
                case 1:
                    tipo_concent = "Meeting";
                    L.marker([concent.conc_coordenadas.x, concent.conc_coordenadas.y]).addTo(map)
                        .bindPopup(concent.conc_nome);
                    break;

                case 2:
                    tipo_concent = "Roadtrip"
                    break;

            }
            console.log(concent.conc_coordenadas.x, concent.conc_coordenadas.y);
            html += `<section>
            <h3>${concent.conc_nome}</h3>
            <p>${concent.conc_descricao}</p>
            <p>${concent.conc_data}</p>
            <p>Tipo de evento: ` + tipo_concent + `</p>
            <button onclick='editarMeet(${concent.conc_id})'>Editar</button>
            <button onclick='showConcent(${concent.conc_id})'>Detalhes</button>
            <button type="button" onclick='inscrever(${concent.conc_id},` + car_id +","+user_id+ `)'>Inscrever-me</button>
            </section>`;
            document.getElementById("concentracoes").innerHTML = html;
        }
    } catch (err) {
        console.log(err);
    }
}

function editarMeet(id) {
    sessionStorage.setItem("concentId", id);
    window.location = "editMeeting.html";
}

function showConcent(id) {
    sessionStorage.setItem("concentId", id);
    window.location = "meetingDetailed.html";

}

async function inscrever(conc_id, car_id, user_id) {
    let data = {
        conc_id : conc_id,
        car_id: car_id,
        user_id : user_id
    };
    try {
        let concentracoes = await $.ajax({
        url: '/api/carros',
        method: "post",
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json"
    });
    alert("registado com sucesso");

    } catch (error) {
        
    }
    

}