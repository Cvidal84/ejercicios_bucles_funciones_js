/* Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.
Imprime este nuevo array por consola. */
const characters = [
    { name: 'Luke Skywalker', species: 'Human' },
    { name: 'Darth Vader', species: 'Human' },
    { name: 'Chewbacca', species: 'Wookiee' },
    { name: 'Leia Organa', species: 'Human' },
    { name: 'R2-D2', species: 'Droid' },
    { name: 'C-3PO', species: 'Droid' },
    { name: 'Obi-Wan Kenobi', species: 'Human' },
    { name: 'Yoda', species: 'Unknown' },
    { name: 'Han Solo', species: 'Human' }
  ];
  const humanCharacters = [];
  //esta es la primer manera que se me ha ocurrido
  for( let character of characters) {
    if (character.species === 'Human') {//si es de la especie Humano, lo añado a la nueva array.
        humanCharacters.push(character)
    }
  }
  console.log(humanCharacters)
  
  //otra manera con el includes.
   const humanCharacters1 = []
    for (let character of characters) {
        if (character.species.includes('Human')) {
            humanCharacters1.push(character)
        }
    }
    console.log(humanCharacters1)