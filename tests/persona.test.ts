import { Persona } from "../src/Persona";

describe("Clase Persona", () => {

  test("crea una persona correctamente", () => {
    const persona = new Persona("Juan", 12345678);

    expect(persona).toBeInstanceOf(Persona);
  });

});