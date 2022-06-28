CREATE DATABASE IF NOT EXISTS db_desarrollo_integral_2092;

USE db_desarrollo_integral_2092;

CREATE TABLE IF NOT EXISTS tbl_rol (
	cveRol SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(250) NOT NULL,
	clave VARCHAR(100),
    estatus TINYINT(1) NOT NULL
);

CREATE TABLE IF NOT EXISTS tbl_usuario (
	cveUsuario SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(350) NOT NULL,
    apellidos VARCHAR(450) NOT NULL,
    username VARCHAR(150) NOT NULL,
    password VARCHAR(350) NOT NULL,
    email VARCHAR(250) NOT NULL,
    fechaRegistro DATETIME NOT NULL,
    cveRol SMALLINT NOT NULL,
    FOREIGN KEY (cveRol) REFERENCES tbl_rol(cveRol)
);

CREATE TABLE IF NOT EXISTS tbl_categoria (
	cveCategoria SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(250) NOT NULL,
    descripcion VARCHAR(450),
    estatus TINYINT(1) NOT NULL,
    fechaRegistro DATETIME NOT NULL,
    cveUsuario SMALLINT NOT NULL,
    FOREIGN KEY (cveUsuario) REFERENCES tbl_usuario(cveUsuario)
);

CREATE TABLE IF NOT EXISTS tbl_producto (
	cveProducto SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(250) NOT NULL,
    descripcion VARCHAR(450) NOT NULL,
    cantidad INT NOT NULL,
    precio FLOAT NOT NULL,
    nombreArchivo VARCHAR(250) NOT NULL,
    estatus TINYINT(1) NOT NULL,
    cveCategoria SMALLINT NOT NULL,
    FOREIGN KEY (cveCategoria) REFERENCES tbl_categoria(cveCategoria),
    cveUsuario SMALLINT NOT NULL,
    FOREIGN KEY (cveUsuario) REFERENCES tbl_usuario(cveUsuario)
);



CREATE TABLE IF NOT EXISTS tbl_venta (
	cveVenta SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    totalVenta FLOAT NOT NULL,
    fechaVenta DATETIME NOT NULL,
    cveUsuario SMALLINT NOT NULL,
    FOREIGN KEY (cveUsuario) REFERENCES tbl_usuario(cveUsuario)
);

CREATE TABLE IF NOT EXISTS tbl_detalle_venta (
	cveDetalleVenta SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cantidad INT NOT NULL,
    precioProducto FLOAT NOT NULL,
    cveProducto SMALLINT NOT NULL,
    FOREIGN KEY (cveProducto) REFERENCES tbl_producto(cveProducto),
    cveVenta SMALLINT NOT NULL,
    FOREIGN KEY (cveVenta) REFERENCES tbl_venta(cveVenta)
);