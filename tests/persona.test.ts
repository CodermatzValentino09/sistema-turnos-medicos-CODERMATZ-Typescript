import { Persona } from "../src/Persona";

describe("Clase Persona", () => {

  test("crea una persona correctamente", () => {
    const persona = new Persona("Juan", 12345678);

    expect(persona).toBeInstanceOf(Persona);
  });

  import { Persona } from "../src/Persona";

describe("Clase Persona", () => {

  test("crea una persona correctamente", () => {
    const persona = new Persona("Juan", 12345678);
    expect(persona).toBeInstanceOf(Persona);
  });

  test("obtiene el nombre correctamente", () => {
    const persona = new Persona("Juan", 12345678);
    expect(persona.getNombre()).toBe("Juan");
  });

  test("obtiene el dni correctamente", () => {
    const persona = new Persona("Juan", 12345678);
    expect(persona.getDni()).toBe(12345678);
  });

});

});