export default class RegistroDeMedicos {//usar para el registro de médicos
    #medicos

    constructor() {
        this.#medicos = []
    }

    Alta(medico) {
        this.#medicos.push(medico)
    }

    buscarPorMatricula(matricula) {
        const medico = this.#medicos.find(m => {
            return m.matricula === matricula
        })

        if (!medico) {
            throw new Error('Medico no encontrado')
        }

        return medico
    }

    listarMedicos() {
        return this.#medicos
    }
}