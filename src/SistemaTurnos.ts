import { Turno } from "./Turno";

export class SistemaTurnos {
  private turnos: Turno[] = [];

  reservarTurno(turno: Turno) {
    this.turnos.push(turno);
  }

  cancelarTurno(index: number) {
    this.turnos.splice(index, 1);
  }

  listarTurnos(): Turno[] {
    return this.turnos;
  }
}