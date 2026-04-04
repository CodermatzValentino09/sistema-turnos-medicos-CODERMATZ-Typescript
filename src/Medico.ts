import { Persona } from "./Persona";

export class Medico extends Persona {
  private especialidad: string;

  constructor(nombre: string, dni: number, especialidad: string) {
    super(nombre, dni);
    this.especialidad = especialidad;
  }

  getEspecialidad(): string {
    return this.especialidad;
  }
  
  getInfo(): string {
  return `Medico: ${this.nombre} - ${this.especialidad}`;
}
}