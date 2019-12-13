///<reference path="Autor.ts"/>
var Libro = /** @class */ (function () {
    function Libro(titulo, isbn, tipo, numEjemplares, autores, disponivilidad, fechaDisponible) {
        this._titulo = titulo;
        this._isbn = isbn;
        this._tipo = tipo;
        this._numEjemplares = numEjemplares;
        this._autores = autores;
        this._disponivilidad = disponivilidad;
        this._fechaDisponible = fechaDisponible;
    }
    Object.defineProperty(Libro.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        set: function (value) {
            this._titulo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "isbn", {
        get: function () {
            return this._isbn;
        },
        set: function (value) {
            this._isbn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "numEjemplares", {
        get: function () {
            return this._numEjemplares;
        },
        set: function (value) {
            this._numEjemplares = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "autores", {
        get: function () {
            return this._autores;
        },
        set: function (value) {
            this._autores = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "disponivilidad", {
        get: function () {
            return this._disponivilidad;
        },
        set: function (value) {
            this._disponivilidad = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "fechaDisponible", {
        get: function () {
            return this._fechaDisponible;
        },
        set: function (value) {
            this._fechaDisponible = value;
        },
        enumerable: true,
        configurable: true
    });
    return Libro;
}());
