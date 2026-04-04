import { Persona } from "./Persona";

export class Paciente extends Persona {
  private historial: string[] = [];

  agregarHistorial(registro: string) {
    this.historial.push(registro);
  }

  getHistorial(): string[] {
    return this.historial;
  }

  getInfo(): string {
    return `Paciente: ${this.nombre}`;
  }
}
