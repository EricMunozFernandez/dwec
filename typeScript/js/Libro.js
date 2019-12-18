///<reference path="Autor.ts"/>
var Libro = /** @class */ (function () {
    function Libro(titulo, isbn, tipo, numEjemplares, autores, disponibilidad, fechaDisponible) {
        this.titulo = titulo;
        this.isbn = isbn;
        this.tipo = tipo;
        this.numEjemplares = numEjemplares;
        this.autores = autores;
        this.disponibilidad = disponibilidad;
        this.fechaDisponible = fechaDisponible;
    }
    return Libro;
}());
