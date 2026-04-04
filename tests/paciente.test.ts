import { Paciente } from "../src/Paciente";

test("Paciente agrega historial", () => {
  const p = new Paciente("Ana", 111);
  p.agregarHistorial("Consulta");
  expect(p.getHistorial().length).toBe(1);
});