export default class Medico {
    #matricula;
    #especialidad;
    #nombre;
    #apellido;


    constructor(matricula, especialidad, nombre, apellido) {
        this.#matricula = matricula;
        this.#especialidad = especialidad;
        this.#nombre = nombre;
        this.#apellido = apellido;
    }

    get matricula() { return this.#matricula; }
    get especialidad() { return this.#especialidad; }
    get nombre() { return this.#nombre; }
    get apellido() { return this.#apellido; }

    asDto() {
        return Object.freeze({
            matricula: this.#matricula,
            espespecialidad: this.#especialidad,
            nombre: this.#nombre.nombre,
            apellido: this.#apellido.apellido
        });
    }
}
