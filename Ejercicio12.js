/* Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder. */
const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Chanclamama', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {
    let foundMutants = []
    for (let mutant of mutants) {
        if (mutant.power === power)
            foundMutants.push(mutant.name)
    }
    if (foundMutants.length > 0) {
        return `Mutantes encontrados con el poder ${power}: ${foundMutants}`
    } else {
        return `No se ha encontrado ningun mutante con el poder ${power}`
    }
  }
  console.log(findMutantByPower(mutants, "steel skin"))
  console.log(findMutantByPower(mutants, "responsables"))
  console.log(findMutantByPower(mutants, "telekinesis"))

  //añadi un xmen mas para repetir poder y ver como salian

  