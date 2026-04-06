import { Paciente } from "../src/Paciente";
import { Medico } from "../src/Medico";
import { Turno } from "../src/Turno";

describe("Clase turno", () => {

  test("crea un Turno correctamente", () => {
    const paciente = new Paciente("Juan", 12345678);
    const medico = new Medico("Dr. Perez", 87654321, "Cardiologia");

    const turno = new Turno(paciente, medico, "2026-04-10");

    expect(turno.paciente).toBe(paciente);
    expect(turno.medico).toBe(medico);
    expect(turno.fecha).toBe("2026-04-10");
  });

  test("no permite crear turno sin fecha", () => {
    const paciente = new Paciente("Juan", 12345678);
    const medico = new Medico("Dr. Perez", 87654321, "Cardiologia");

    expect(() => {
      new Turno(paciente, medico, "");
    }).toThrow();
  });

});