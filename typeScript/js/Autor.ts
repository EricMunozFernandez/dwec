
class Autor{
    private _dni:string;
    private _nombreApellidos:string;

    constructor(dni: string, nombreApellidos: string) {
        this._dni = dni;
        this._nombreApellidos = nombreApellidos;
    }

    get dni(): string {
        return this._dni;
    }

    set dni(value: string) {
        this._dni = value;
    }

    get nombreApellidos(): string {
        return this._nombreApellidos;
    }

    set nombreApellidos(value: string) {
        this._nombreApellidos = value;
    }
}