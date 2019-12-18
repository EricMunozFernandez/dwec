///<reference path="Autor.ts"/>
class Libro {
    private titulo: string | number | string[]
    private isbn: string | number | string[];
    private tipo: string | number | string[];
    private numEjemplares: string | number | string[];
    private autores: Autor[];
    private disponibilidad: boolean;
    private fechaDisponible: Date;


    constructor(titulo: string | number | string[], isbn: string | number | string[], tipo: string | number | string[], numEjemplares: string | number | string[], autores: Autor[], disponibilidad: boolean, fechaDisponible: Date) {
        this.titulo = titulo;
        this.isbn = isbn;
        this.tipo = tipo;
        this.numEjemplares = numEjemplares;
        this.autores = autores;
        this.disponibilidad = disponibilidad;
        this.fechaDisponible = fechaDisponible;
    }
}