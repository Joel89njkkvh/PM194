const persona = {
  nombre: "Joel",
  edad: 20,
  direccion: {
    ciudad: "Qro",
    pais: "MX"
  }
};

const { nombre, edad, direccion: { ciudad } } = persona;

console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);
