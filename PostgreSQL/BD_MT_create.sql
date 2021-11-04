--create database MT;

--use MT;

create table Utilizador (User_Id serial not null,
						 User_nome varchar(60) not null,
					     User_birthday date not null, 				
						 User_pontos integer,                           --users points
						 primary key (User_Id));
		     		     
create table Carros (Car_Id serial not null,
					 Car_modelo varchar(30) not null, 			        --car name
					 Car_engine integer not null,                       --car cv
					 Car_User_Id integer,                               --FK to Utilizador
					 primary key (Car_Id));
					 
create table Milestones (Mile_Id serial not null,
					     Mile_nome varchar(30) not null,
					     Mile_descricao text,
					     Mile_objetivo text,
					     primary key (Mile_Id));
						 
create table Produtos (Prod_Id serial not null,
					   Prod_nome varchar(30) not null,
					   Prod_descricao text,
					   Prod_stock integer not null, 		            --number of available products
					   Prod_preço integer not null, 					--price in points
					   primary key (Prod_Id));
						 
create table Discussoes(Disc_Id serial not null,
						Disc_nome varchar(40) not null,                 --discussion title
						Disc_descricao text,                            
						Disc_tags varchar(20) not null,                 --discussion identifiers
						Disc_creator_Id integer,                        --FK to Utilizador
						primary key (Disc_Id));
						
create table PontosIntermedios(PI_Id serial not null,
							   PI_coordenadas point not null,           --points of interest coordinates
							   primary key (PI_Id));

create table Concentracoes(Conc_Id serial not null,
						   Conc_nome varchar(30) not null,
						   Conc_descrição text,
						   Conc_data timestamp not null,                --time and date of the event
						   Conc_coordenadas point not null,             --event coordinates/roadtrip initial coordinates
						   Conc_RT_Id integer,                          --FK to Roadtrip
						   Conc_creator_Id integer not null,                     --FK to Utilizador
						   Conc_pontos_Id integer,                      --FK to Pontos
						   primary key (Conc_Id));
						   
create table Roadtrip(RT_Id serial not null,
					  RT_coordenadas_final point not null,              --roadtrip final coordinates/the end of the roadtrip
					  primary key (RT_Id)) 
					  inherits (Concentracoes);
					  
create table Pontos(Pontos_Id serial not null,
					Pontos_concentracao integer not null,
					primary key (Pontos_Id));

create table MilestonesUtilizador (Ms_User_Id serial not null,
								   Ms_User_User_Id integer, 		    --FK to Utilizador
								   Ms_User_Milestone_Id integer, 	    --FK to Milestones
								   primary key (Ms_User_Id));	     
		           
create table ProdutosUtilizador (Prod_User_Id serial not null,
								 Prod_User_User_Id integer,				--FK to Utilizador
								 Prod_User_Prod_Id integer,				--FK to Produtos
								 primary key (Prod_User_Id));		

create table DiscussoesUtilizador (Disc_User_Id serial not null,
						           Disc_User_User_Id integer,           --FK to Utilizador
						           Disc_User_Disc_Id integer,           --FK to Discussões
						           Disc_User_mensagem text,             --users messages
						           primary key (Disc_User_Id));
								  
create table ConcentracoesCarros (Conc_Car_Id serial not null,
								  Conc_Car_Conc_Id integer,             --FK to Concentracao
								  Conc_Car_Car_Id integer,              --FK to Carros
								  primary key (Conc_Car_Id));
								  
create table PontosIntermediosRoadtrip (PI_RT_Id serial not null,
										PI_RT_PI_Id integer,            --FK to PontosIntermedios
										PI_RT_RT_Id integer,            --FK to Roadtrip
										primary key (PI_RT_Id));
										
-- Foreign Keys

alter table Carros add constraint Carros_fk_Utilizador
            foreign key (Car_User_Id) references Utilizador(User_Id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
            
alter table Discussoes add constraint Discussoes_fk_Utilizador
            foreign key (Disc_creator_Id) references Utilizador(User_Id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
            
alter table Concentracoes add constraint Concentracoes_fk_Roadtrip
            foreign key (Conc_RT_Id) references Roadtrip(RT_Id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;            
            
alter table Concentracoes add constraint Concentracoes_fk_Utilizador
            foreign key (Conc_creator_Id) references Utilizador(User_Id)  
			ON DELETE NO ACTION ON UPDATE NO ACTION;            

alter table Concentracoes add constraint Concentracoes_fk_Pontos
            foreign key (Conc_pontos_Id) references Pontos(Pontos_Id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION; 
                        
alter table MilestonesUtilizador add constraint MilestonesUtilizador_fk_Utilizador
            foreign key (Ms_User_User_Id) references Utilizador(User_Id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
			
alter table MilestonesUtilizador add constraint MilestonesUtilizador_fk_Milestones
            foreign key (Ms_User_Milestone_Id) references Milestones(Mile_Id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
			
alter table ProdutosUtilizador add constraint ProdutosUtilizador_fk_Utilizador
            foreign key (Prod_User_User_Id) references Utilizador(User_Id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION; 

alter table ProdutosUtilizador add constraint ProdutosUtilizador_fk_Produtos
            foreign key (Prod_User_Prod_Id) references Produtos(Prod_Id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
			
alter table DiscussoesUtilizador add constraint DiscussoesUtilizador_fk_Utilizador
            foreign key (Disc_User_User_Id) references Utilizador(User_Id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION; 

alter table DiscussoesUtilizador add constraint DiscussoesUtilizador_fk_Discussoes
            foreign key (Disc_User_Disc_Id) references Discussoes(Disc_Id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
			
alter table ConcentracoesCarros add constraint ConcentraçõesCarros_fk_Concentracoes
            foreign key (Conc_Car_Conc_Id) references Concentracoes(Conc_Id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION; 

alter table ConcentracoesCarros add constraint ConcentracoesCarros_fk_Carros
            foreign key (Conc_Car_Car_Id) references Carros(Car_Id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
			
alter table PontosIntermediosRoadtrip add constraint PontosIntermediosRoadtrip_fk_Roadtrip
            foreign key (PI_RT_RT_Id) references Roadtrip(RT_Id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION; 

alter table PontosIntermediosRoadtrip add constraint PontosIntermediosRoadtrip_fk_PontosIntermedios
            foreign key (PI_RT_PI_Id) references PontosIntermedios(PI_Id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;			
