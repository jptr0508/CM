insert into utilizador (user_nome, user_birthday,user_pontos,user_password) values('Ricardo Silva','1995-01-01', 15000, 'ricardo');
insert into utilizador (user_nome, user_birthday,user_pontos, user_password) values('Jaime Bagorro','2001-04-23', 1000,'jaime');
insert into utilizador (user_nome, user_birthday,user_pontos, user_password) values('Vasco da Gama','1990-11-03', 0,'vasco');

insert into produtos (prod_nome, prod_descricao,prod_stock, prod_preço) values('Mudança de pastilhas','Mudança de pastilhas na oficina Norauto a 30% desconto',500, 5000);
insert into produtos (prod_nome, prod_descricao,prod_stock, prod_preço) values('Trocar fluidos de motor','Troca de fluidos de motor na oficina Norauto a 40% de desconto',20, 10000);
insert into produtos (prod_nome, prod_descricao,prod_stock, prod_preço) values('Alinhamento de direção','Alinhamento de direção na oficicina Auto Seat a 15% desconto',0, 3000);

insert into concentracoes (conc_nome, conc_descricao,conc_data,conc_coordenadas, conc_tipo,conc_creator_id, conc_estado ) values('Hondas do aço','Concentracao de hondas do aço','2020-11-05','38.788383, -9.093056',1, 2, true);
insert into concentracoes (conc_nome, conc_descricao,conc_data,conc_coordenadas,conc_tipo,conc_creator_id, conc_estado ) values('BMWs do porto','Concentracao de BMWs','2020-11-11','41.183631, -8.56538',1 ,1,true);

insert into discussoes (disc_nome, disc_descricao, disc_tags, disc_creator_id ) values('Como trocar o óleo a um fiat punto','Olá malta, estava com um problema a trocssr o óleo ao meu fiat puta, e gostava de saber se alguem me conseguia ajudar!','#DIY, #PuntoéCarro', 1);
insert into discussoes (disc_nome, disc_descricao, disc_tags, disc_creator_id ) values('O que acham do novo BMW M4 que saiu?','Boas pessoal, neste forum gostava de saber quais as vossas ideias sobre o novo BMW M4 acabadinho de ser lançado','#BMW, #PetrolHead', 2);

insert into pontos (pontos_concentracao) values(100);
insert into pontos (pontos_concentracao) values(0.75);

insert into carros(car_modelo, car_engine, car_user_id) VALUES ('Seat Ibiza',130,1);
insert into carros(car_modelo, car_engine, car_user_id) VALUES ('Honda Civic',160,1);
insert into carros(car_modelo, car_engine, car_user_id) VALUES ('BMW 320d',177,2);
insert into carros(car_modelo, car_engine, car_user_id) VALUES ('Fiat Punto',77,3);

insert into discussoesutilizador(disc_user_user_id,disc_user_disc_id,disc_user_mensagem) VALUES (1,1,'1ºDesapertar o parafuso por baixo do caro situado perto do filtro de oleo 2ºdesapertar o filtro de oleo e troca-lo 3ºapertar o novo filtro de oleo 4ºapertar o parafuso do filtro de oleo 5ºreencher o deposito de oleo 6º verificar pela vareta do nivel do oleo, se este esta com o nivel adequado');