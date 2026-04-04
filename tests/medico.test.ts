import { Medico } from "../src/Medico";

test("Medico devuelve especialidad", () => {
  const m = new Medico("Dr", 222, "Clinico");
  expect(m.getEspecialidad()).toBe("Clinico");
});