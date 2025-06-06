create database jogo_alg;

use jogo_alg;

create table usuario(
	id int primary key auto_increment,
    nome varchar(255) not null unique,
    senha varchar(255) not null
);


create table partida(
	id int primary key auto_increment,
    codigo_partida varchar(10) not null
);


create table usuario_partida(
	id int primary key auto_increment,
    qtd_vidas tinyint default 3,
    pontuacao int default 0,
    fkusuario int,
    fkpartida int,
    
    foreign key(fkusuario) references usuario(id),
    foreign key(fkpartida) references partida(id)
);

create table item_partida(
	id int primary key auto_increment,
    pos int not null,
    tipo int not null,
    pontuacao int not null
    fkpartida int,
    fkitem int,
    
    foreign key(fkpartida) references partida(id)
);