const personas = [
  { nombre: "Ana", edad: 19 },
  { nombre: "Luis", edad: 33 },
  { nombre: "María", edad: 21 }
];

const buscarpersona = personas.find(persona => persona.nombre === "Luis");
console.log("Persona encontrada:", buscarpersona); 
personas.forEach(persona => {
  console.log(`${persona.nombre} tiene ${persona.edad} años`);
});

const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("Suma total de edades:", totalEdades); 
