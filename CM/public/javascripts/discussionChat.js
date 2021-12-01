window.onload = async function () {
    let discussao = sessionStorage.getItem("discId");
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
    } catch (err) {
        console.log(err);
    }
}