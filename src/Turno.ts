import { Paciente } from "./Paciente";
import { Medico } from "./Medico";

export class Turno {
  constructor(
    private paciente: Paciente,
    private medico: Medico,
    private fecha: string
  ) {}

  getInfo(): string {
    return `${this.fecha} - ${this.paciente.getInfo()} con ${this.medico.getEspecialidad()}`;
  }
}