import { SistemaTurnos } from "../src/SistemaTurnos";
import { Turno } from "../src/Turno";
import { Paciente } from "../src/Paciente";
import { Medico } from "../src/Medico";

test("Sistema agrega turno", () => {
  const sistema = new SistemaTurnos();
  const t = new Turno(new Paciente("A",1), new Medico("B",2,"Clinico"), "hoy");
  sistema.reservarTurno(t);
  expect(sistema.listarTurnos().length).toBe(1);
});

test("Sistema elimina turno", () => {
  const sistema = new SistemaTurnos();
  const t = new Turno(new Paciente("A",1), new Medico("B",2,"Clinico"), "hoy");
  sistema.reservarTurno(t);
  sistema.cancelarTurno(0);
  expect(sistema.listarTurnos().length).toBe(0);
});