class Autor {
    private dni: string | number | string[];
    private nombreApellidos: string | number | string[];

    constructor(dni: string | number | string[], nombreApellidos: string | number | string[]) {
        this.dni = dni;
        this.nombreApellidos = nombreApellidos;
    }

}