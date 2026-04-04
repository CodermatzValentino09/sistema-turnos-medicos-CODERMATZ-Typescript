export class Persona {
  protected nombre: string;
  protected dni: number;

  constructor(nombre: string, dni: number) {
    this.nombre = nombre;
    this.dni = dni;
  }

  getNombre(): string {
    return this.nombre;
  }
  getInfo(): string {
    return this.nombre;
  }
}