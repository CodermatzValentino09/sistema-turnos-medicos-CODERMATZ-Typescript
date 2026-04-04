import { Persona } from "../src/Persona";

test("Persona devuelve nombre", () => {
  const p = new Persona("Juan", 123);
  expect(p.getNombre()).toBe("Juan");
});