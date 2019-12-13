///<reference path="Autor.ts"/>
class Libro{
    private _titulo:string
    private _isbn:string;
    private _tipo:string;
    private _numEjemplares:number;
    private _autores:Autor[];
    private _disponivilidad:boolean;
    private _fechaDisponible:Date;


    constructor(titulo: string, isbn: string, tipo: string, numEjemplares: number, autores: Autor[], disponivilidad: boolean, fechaDisponible: Date) {
        this._titulo = titulo;
        this._isbn = isbn;
        this._tipo = tipo;
        this._numEjemplares = numEjemplares;
        this._autores = autores;
        this._disponivilidad = disponivilidad;
        this._fechaDisponible = fechaDisponible;
    }

    get titulo(): string {
        return this._titulo;
    }

    set titulo(value: string) {
        this._titulo = value;
    }

    get isbn(): string {
        return this._isbn;
    }

    set isbn(value: string) {
        this._isbn = value;
    }

    get tipo(): string {
        return this._tipo;
    }

    set tipo(value: string) {
        this._tipo = value;
    }

    get numEjemplares(): number {
        return this._numEjemplares;
    }

    set numEjemplares(value: number) {
        this._numEjemplares = value;
    }

    get autores(): Autor[] {
        return this._autores;
    }

    set autores(value: Autor[]) {
        this._autores = value;
    }

    get disponivilidad(): boolean {
        return this._disponivilidad;
    }

    set disponivilidad(value: boolean) {
        this._disponivilidad = value;
    }

    get fechaDisponible(): Date {
        return this._fechaDisponible;
    }

    set fechaDisponible(value: Date) {
        this._fechaDisponible = value;
    }
}