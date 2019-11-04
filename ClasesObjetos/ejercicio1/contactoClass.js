class Contacto {
    constructor(nombre, organizacion,otros) {
        this.nombre = nombre;
        this.organizacion = organizacion;
        this.otros=[];
    }

    contactoString() {
        return this.nombre + ' de la organizacion ' + this.organinazion;
    }
}



