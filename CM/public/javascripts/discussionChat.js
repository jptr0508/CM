var discussao = sessionStorage.getItem("discId");

window.onload = async function () {
    try {
        let html = "";
        let disc = await $.ajax({
            url: "/api/discussoes/" + discussao,
            method: "get",
            dataType: "json"
        });

        console.log(disc);

        html += `<section>
        <h3>${disc.disc_nome}</h3>
        <h3>${disc.disc_descricao}</h3>
        <h3>Tags: ${disc.disc_tags}</h3>
        <h3>Criador: ${disc.disc_creator_id}</h3>
        </section>`;
        document.getElementById("discussao").innerHTML = html;

        html = "";
        let discu = await $.ajax({
            url: "/api/discussoes/"+ discussao +"/chat",
            method: "get",
            dataType: "json"
        });

        console.log(discu);

        for (let disc of discu)
        html += `<p style = "color: black"> ${disc.user_nome} </p>
                 <p style = "color: black"> ${disc.disc_user_mensagem}</p>`;        
        document.getElementById("mensagens").innerHTML = html;

    } catch (err) {
        console.log(err);
    }
}

async function Message(){
    
    let info ={ 
        disc_user_user_id: 1,
        disc_user_disc_id: discussao,
        disc_user_mensagem: document.getElementById("chat").value
    };

    try {
        let res = await $.ajax({
            url: `/api/discussoes/message`,
            method: "post",
            data: JSON.stringify(info),
            dataType: "json",
            contentType: "application/json"
        })
        window.location.href = "#";
    } catch (err) {
        console.log(err);
    }
}