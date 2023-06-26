CREATE DATABASE IF NOT EXISTS hitsdb;
USE hitsdb;
DROP TABLE IF EXISTS `movies`;
CREATE TABLE if not exists `movies` (
  `id` int(10) unsigned AUTO_INCREMENT,
  `name` varchar(30)  NOT NULL,
  `genre` varchar(20)  NOT NULL,
  `mark` TINYINT unsigned  NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `movies` (name, genre, mark) VALUES 
('the shawshank redemption','drama', 10), 
('mimino','comedy', 8), 
('se7en','thriller', 7), 
('phycho','horror', 9), 
('gladiator','history', 8), 
('Django Unchained','western', 7), 
('the avengers','action', 7), 
('interstellar','sci-fi', 7), 
('the hobbit','fantasy', 8) 
  ;

DROP TABLE IF EXISTS `books`;
Create table if not exists `books` (
`id` int(10) unsigned AUTO_INCREMENT,
`name` varchar(30) Not NULL,
`genre` varchar(20) not null,
`mark` tinyint unsigned not null,
PRIMARY KEY (`id`)
) engine=innodb default charset=latin1;



insert into `books` (name, genre, mark) VALUES
('humiliated and insulted','drama', 10), 
('crime and punishment','phycho', 8), 
('poor people','drama', 7), 
('1984','dystopia', 9), 
('The Man Who Laughs','romantic', 8), 
('the gambler','game', 7), 
('lord of the fliers','dystopia', 7), 
('picture of dorian gray','philosophy', 7), 
('Time to Love and Time to Die','war', 8)
  ;

DROP TABLE IF EXISTS `songs`;
Create table if not exists `songs` (
`id` int(10) unsigned AUTO_INCREMENT,
`name` varchar(30) Not NULL,
`genre` varchar(20) not null,
`mark` tinyint unsigned not null,
PRIMARY KEY (`id`)
) engine=innodb default charset=latin1;

insert into `songs` (name, genre, mark) VALUES
('Redemption Song','folk', 10), 
('fallen leaves','rock', 8), 
('nothing else matters','ballad', 7), 
('crush','pop', 9), 
('sign for the moment','electronic', 8), 
('i hate everything about you','rock', 7), 
('straight outta flames','hip-hop', 7), 
('98 flow','trap ', 7), 
('c4','rap', 8)
  ;

DROP TABLE IF EXISTS `usersdata`;
create table if not exists `usersdata` (
`id` int(10) unsigned AUTO_INCREMENT,
`username` varchar(30) not null,
`password` varchar(30) not null,
PRIMARY KEY(`id`)
) engine = innodb default charset=latin1;

insert into `usersdata` (username, password) values 
('hits-student', 'y2zuk3z0p24n3p0ny1c0p');
