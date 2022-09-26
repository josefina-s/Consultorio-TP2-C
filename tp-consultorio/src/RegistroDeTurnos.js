export default class RegistroDeTurnos {//usar para el registro de médicos
    #turnos

    constructor() {
        this.#turnos = []
    }

    Alta(turno) {
        this.#turnos.push(turno)
    }
    // habría que buscar por médico o fecha.
    // buscarPorMatricula(matricula) {
    //     const turno = this.#turno.find(m => {
    //         return m.matricula === matricula
    //     })

    //     if (!turno) {
    //         throw new Error('Turno no encontrado')
    //     }

    //     return turno
    // }


    listarTurnos() {
        return this.#turnos
    }
}