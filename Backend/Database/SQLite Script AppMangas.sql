-- Tabla para el estado de los mangas
CREATE TABLE estado (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL
);

-- Tabla para los géneros de los mangas
CREATE TABLE genero (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL
);

-- Tabla para los autores de los mangas
CREATE TABLE autor (
    id INTEGER PRIMARY KEY,
    nombre TEXT NOT NULL,
    fechaNacimiento TEXT
);

-- Tabla principal de mangas (con img_url agregado)
CREATE TABLE mangas (
    id INTEGER PRIMARY KEY,
    titulo TEXT NOT NULL,
    fechaLanzamiento TEXT NOT NULL,
    tomos INTEGER NOT NULL,
    estado INTEGER NOT NULL,
    genero INTEGER NOT NULL,
    autor INTEGER NOT NULL,
    img_url TEXT,
    FOREIGN KEY (estado) REFERENCES estado(id),
    FOREIGN KEY (genero) REFERENCES genero(id),
    FOREIGN KEY (autor) REFERENCES autor(id)
);

-- Inserts para la tabla estado
INSERT INTO estado (id, nombre) VALUES
(1, 'En emisión'),
(2, 'Finalizado');

-- Inserts para la tabla genero
INSERT INTO genero (id, nombre) VALUES
(1, 'Shonen'),
(2, 'Seinen'),
(3, 'Isekai'),
(4, 'Acción'),
(5, 'Drama');

-- Inserts para la tabla autor
INSERT INTO autor (id, nombre, fechaNacimiento) VALUES
(1, 'Masashi Kishimoto', '1974-11-08'),
(2, 'Eiichiro Oda', '1975-01-01'),
(3, 'Hajime Isayama', '1986-08-29'),
(4, 'Kentaro Miura', '1966-07-11'),
(5, 'Koyoharu Gotouge', '1988-05-05'),
(6, 'Yoshihiro Togashi', '1966-04-27'),
(7, 'Hiromu Arakawa', '1973-05-08'),
(8, 'Gege Akutami', '1992-02-26'),
(9, 'Tatsuki Fujimoto', '1993-10-10'),
(10, 'Muneyuki Kaneshiro', '1987-03-11');

-- Inserts para la tabla mangas
INSERT INTO mangas (id, titulo, fechaLanzamiento, tomos, estado, genero, autor, img_url) VALUES
(1, 'Naruto', '1999-09-21', 72, 2, 1, 1, 'naruto1.jpg'),
(2, 'One Piece', '1997-07-22', 100, 1, 1, 2, 'onepiece2.jpg'),
(3, 'Attack on Titan', '2009-09-09', 34, 2, 5, 3, 'attackontitan3.jpg'),
(4, 'Berserk', '1989-08-01', 41, 1, 2, 4, 'berserk4.jpg'),
(5, 'Demon Slayer', '2016-02-15', 23, 2, 1, 5, 'demonslayer5.jpg'),
(6, 'Hunter x Hunter', '1998-03-03', 36, 1, 1, 6, 'hunterxhunter6.jpg'),
(7, 'Fullmetal Alchemist', '2001-07-12', 27, 2, 1, 7, 'fullmetalalchemist7.jpg'),
(8, 'Jujutsu Kaisen', '2018-03-05', 24, 1, 1, 8, 'jujutsukaisen8.jpg'),
(9, 'Chainsaw Man', '2018-12-03', 15, 1, 1, 9, 'chainsawman9.jpg'),
(10, 'Blue Lock', '2018-08-01', 24, 1, 1, 10, 'bluelock10.jpg');
