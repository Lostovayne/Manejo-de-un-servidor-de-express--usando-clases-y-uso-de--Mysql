-- Active: 1687995790268@@127.0.0.1@3306@biblioteca
CREATE DATABASE IF NOT EXISTS BIBLIOTECA;

USE BIBLIOTECA;

CREATE TABLE
    autores (
        codigo_autor INT PRIMARY KEY,
        nombre_autor VARCHAR(50),
        apellido_autor VARCHAR(50),
        fecha_nacimiento DATE,
        fecha_muerte DATE,
        tipo_autor VARCHAR(50)
    );

CREATE TABLE
    libros (
        isbn VARCHAR(13) PRIMARY KEY,
        titulo VARCHAR(100),
        numero_paginas INT,
        codigo_autor INT,
        FOREIGN KEY (codigo_autor) REFERENCES autores (codigo_autor)
    );

CREATE TABLE
    socios (
        rut_socio VARCHAR(12) PRIMARY KEY,
        nombre VARCHAR(50),
        apellido VARCHAR(50),
        direccion VARCHAR(100),
        telefono VARCHAR(20)
    );

CREATE TABLE
    prestamos (
        id_prestamo INT PRIMARY KEY AUTO_INCREMENT,
        isbn VARCHAR(13),
        rut_socio VARCHAR(12),
        fecha_inicio DATE,
        fecha_esperada_devolucion DATE,
        fecha_real_devolucion DATE,
        FOREIGN KEY (isbn) REFERENCES libros (isbn),
        FOREIGN KEY (rut_socio) REFERENCES socios (rut_socio)
    );

/* 2023-07-12 18:51:58 [13 ms] */
INSERT INTO
    autores (
        codigo_autor,
        nombre_autor,
        apellido_autor,
        fecha_nacimiento,
        fecha_muerte,
        tipo_autor
    )
VALUES
    (
        1,
        'Juan',
        'Perez',
        '1990-05-20',
        '2023-05-10',
        'Autor'
    ),
    (
        2,
        'Maria',
        'Lopez',
        '1994-09-12',
        '2021-05-10',
        'Coautor'
    ),
    (
        3,
        'Ana',
        'Gonzalez',
        '1973-05-10',
        '2010-05-10',
        'Autor'
    ),
    (
        4,
        'Pedro',
        'Garcia',
        '1985-05-10',
        '1990-05-10',
        'Coautor'
    ),
    (
        5,
        'Luis',
        'Martinez',
        '1952-05-10',
        '1999-05-10',
        'Autor'
    );

/* 2023-07-12 18:53:57 [12 ms] */
INSERT INTO
    libros (isbn, titulo, numero_paginas, codigo_autor)
VALUES
    ('1-1234567890', 'Cuentos de Terror', 400, 1),
    ('2-1234567890', 'Historias de Asia', 120, 2),
    (
        '3-1234567890',
        'Harry Potter y el prisionero de Azkaban',
        200,
        3
    ),
    ('4-1234567890', 'Manual de Mecánica', 100, 4),
    (
        '5-1234567890',
        'Harry Potter y el cáliz de fuego',
        150,
        5
    );

/* 2023-07-12 18:58:28 [19 ms] */
INSERT INTO
    socios (rut_socio, nombre, apellido, direccion, telefono)
VALUES
    (
        '11111111-1',
        'cristian',
        'Pérez',
        'Calle 123',
        '123456789'
    ),
    (
        '22222222-2',
        'Papelucho',
        'González',
        'Avenida 456',
        '987654321'
    ),
    (
        '33333333-3',
        'Paula',
        'López',
        'Carrera 789',
        '456123789'
    ),
    (
        '44444444-4',
        'Román',
        'Rodríguez',
        'Callejón 012',
        '789456123'
    ),
    (
        '55555555-5',
        'Jimena',
        'Martínez',
        'Pasaje 345',
        '321654987'
    );

/* 2023-07-12 19:00:49 [6 ms] */
INSERT INTO
    prestamos (
        isbn,
        rut_socio,
        fecha_inicio,
        fecha_esperada_devolucion,
        fecha_real_devolucion
    )
VALUES
    (
        '1-1234567890',
        '11111111-1',
        '2022-01-01',
        '2022-01-02',
        '2022-01-03'
    ),
    (
        '2-1234567890',
        '22222222-2',
        '2022-01-01',
        '2022-01-02',
        '2022-01-03'
    ),
    (
        '3-1234567890',
        '33333333-3',
        '2022-01-01',
        '2022-01-02',
        '2022-01-09'
    ),
    (
        '4-1234567890',
        '44444444-4',
        '2022-01-01',
        '2022-01-02',
        '2022-01-06'
    ),
    (
        '5-1234567890',
        '55555555-5',
        '2022-01-01',
        '2022-01-02',
        '2022-01-13
    '
    );