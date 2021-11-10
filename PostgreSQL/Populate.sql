insert into utilizador (user_nome, user_birthday,user_pontos) values('Ricardo Silva','1995-01-01', 15000);
insert into utilizador (user_nome, user_birthday,user_pontos) values('Jaime Bagorro','2001-04-23', 1000);
insert into utilizador (user_nome, user_birthday,user_pontos) values('Vasco da Gama','1990-11-03', 0);

insert into produtos (prod_nome, prod_descricao,prod_stock, prod_preço) values('Mudança de pastilhas','Mudança de pastilhas na oficina Norauto a 30% desconto',500, 5000);
insert into produtos (prod_nome, prod_descricao,prod_stock, prod_preço) values('Trocar fluidos de motor','Troca de fluidos de motor na oficina Norauto a 40% de desconto',20, 10000);
insert into produtos (prod_nome, prod_descricao,prod_stock, prod_preço) values('Alinhamento de direção','Alinhamento de direção na oficicina Auto Seat a 15% desconto',0, 3000);

insert into concentracoes (conc_nome, conc_descricao,conc_data,conc_coordenadas,conc_creator_id ) values('Hondas do aço','Concentracao de hondas do aço','2020-11-05',point(38.788383, -9.093056), 2);
insert into concentracoes (conc_nome, conc_descricao,conc_data,conc_coordenadas,conc_creator_id ) values('BMWs do porto','Concentracao de BMWs','2020-11-11',point(41.183631, -8.565389), 1);


insert into discussoes (disc_nome, disc_descricao, disc_tags, disc_creator_id ) values('Como trocar o óleo a um fiat punto','Olá malta, estava com um problema a trocssr o óleo ao meu fiat punto, e gostava de saber se alguem me conseguia ajudar!','#DIY, #PuntoéCarro', 1);
insert into discussoes (disc_nome, disc_descricao, disc_tags, disc_creator_id ) values('O que acham do novo BMW M4 que saiu?','Boas pessoal, neste forum gostava de saber quais as vossas ideias sobre o novo BMW M4 acabadinho de ser lançado','#BMW, #PetrolHead', 2);
