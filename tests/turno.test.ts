import { Paciente } from "../src/Paciente";
import { Medico } from "../src/Medico";
import { Turno } from "../src/Turno";

test("Turno genera info", () => {
  const p = new Paciente("Ana", 1);
  const m = new Medico("Dr", 2, "Clinico");
  const t = new Turno(p, m, "2026-01-01");
  expect(t.getInfo()).toContain("Ana");
});