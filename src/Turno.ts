import { Paciente } from "./Paciente";
import { Medico } from "./Medico";

export class Turno {
  private _paciente: Paciente;
  private _medico: Medico;
  private _fecha: string;

  constructor(
    paciente: Paciente,
    medico: Medico,
    fecha: string
  ) {
    if (!fecha) {
      throw new Error("La fecha no puede estar vacía");
    }
    this._paciente = paciente;
    this._medico = medico;
    this._fecha = fecha;
  }

  get paciente(): Paciente {
    return this._paciente;
  }

  get medico(): Medico {
    return this._medico;
  }

  get fecha(): string {
    return this._fecha;
  }

  getInfo(): string {
    return `${this._fecha} - ${this._paciente.getInfo()} con ${this._medico.getEspecialidad()}`;
  }
}