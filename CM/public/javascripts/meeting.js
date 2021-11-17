window.onload = async function () {
    try {
        let html = "";
        let concentracoes = await $.ajax({
            url: '/api/concentracoes',
            method: "get",
            dataType: "json"
        });
        for (let concent of concentracoes) {

            let tipo_concent;
            console.log(concent.conc_tipo);
            switch(concent.conc_tipo){
                case 1:
                    tipo_concent = "Meeting"
                    break;

                case 2:
                    tipo_concent = "Roadtrip"
                    break;

            }
            console.log(concent.conc_coordenadas.x, concent.conc_coordenadas.y);
            html += `<section onclick='showConcent(${concent.conc_id})'>
            <h3>${concent.conc_nome}</h3>
            <p>${concent.conc_descricao}</p>
    <p>Tipo de evento: `+tipo_concent+`</p>
            </section>`;
            document.getElementById("concentracoes").innerHTML = html;
        }
    } catch (err) {
        console.log(err);
    }
}

function showConcent(id) {
    sessionStorage.setItem("concentId", id);
    window.location = "meetingDetailed.html";

}