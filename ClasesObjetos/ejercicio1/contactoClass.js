class Contacto {
    constructor(nombre, organizacion,otros) {
        this.nombre = nombre;
        this.organinazion = organizacion;
        this.otros=[];
    }

    contactoString() {
        return this.nombre + ' de la organizacion ' + this.organinazion;
    }
}



