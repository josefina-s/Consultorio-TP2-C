const letras = 'abcdefghijklmnopqrstuvwxyz'
function esAlfabetico(str) {
    return str.split('').every(l => letras.includes(l.toLowerCase()))
}



export default class Turno {
    #nombrePaciente;
    #apellidoPaciente;
    #medico;
    #fechaHora
    
    constructor({ nombrePaciente, apellidoPaciente, medico,fechaHora }) {
        this.nombrePaciente = nombrePaciente;
        this.apellidoPaciente= apellidoPaciente
        this.medico = medico;
        this.fechaHora=fechaHora;
        
    }

    set nombrePaciente(valor) {
         if (esAlfabetico(valor)) {
            this.#nombrePaciente = valor
        } else {
            throw new Error('nombrePaciente invalido')
        }
    }
    set apellidoPaciente(valor) {
       if (esAlfabetico(valor)) {
            this.#apellidoPaciente = valor
        } else {
            throw new Error('apellidoPaciente invalido')
        }
    }


    get nombrePaciente() { return this.#nombrePaciente; }
    get apellidoPaciente() { return this.#apellidoPaciente; }
    get medico() { return this.#medico; }
    get fechaHora() { return this.#fechaHora; }
    



    asDto() {
        return Object.freeze({
            nombrePaciente: this.#nombrePaciente,
            apellidoPaciente: this.#apellidoPaciente,
            medico: this.#medico,
            fechaHora: this.fechaHora
        })
    }
}
