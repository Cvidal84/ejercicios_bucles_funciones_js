/* Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.
Utiliza este array para probar tu función. */
const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
  function findOldestXMen(xMen) {
    let oldest = xMen[0] //creamos una variable y la ponemos por defecto en el 0
    for (let member of xMen) {
        if (member.year < oldest.year) { //es .year porque comparamos el año y no el nombre
            oldest = member
        }
    }
    return(oldest)
  }
  const oldestMember = findOldestXMen(xMen) 
  console.log(oldestMember)
  console.log(`El xMen más antiguo es ${oldestMember.name} y apareció en ${oldestMember.year}`)
  
  