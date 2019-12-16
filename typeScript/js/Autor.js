var Autor = /** @class */ (function () {
    function Autor(dni, nombreApellidos) {
        this._dni = dni;
        this._nombreApellidos = nombreApellidos;
    }
    Object.defineProperty(Autor.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (value) {
            this._dni = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Autor.prototype, "nombreApellidos", {
        get: function () {
            return this._nombreApellidos;
        },
        set: function (value) {
            this._nombreApellidos = value;
        },
        enumerable: true,
        configurable: true
    });
    return Autor;
}());
