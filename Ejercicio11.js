/* Escribe una función que calcule el promedio de duración de una lista de películas.
Recibe un array de películas, cada una con su duración en minutos.
La función debe devolver el promedio de duración de todas las películas. */
const movies = [
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
  ];
  
  function averageMovieDuration(movies) {
    let totalDuration = 0
    for (let movie of movies) {
        totalDuration += movie.duration
    }
    const averageDuration = totalDuration/movies.length
    return averageDuration
  }
  console.log(averageMovieDuration(movies))
  //con esto ya me muestra los minutos, pero si lo que quiero es poner un mensaje tengo que crear una costante o variable
  const averageDuration1 = averageMovieDuration(movies)
  console.log(`La duración media de las películas es de ${averageDuration1}`)
  // con esto ya me deja ponerlo donde quiera

  //para hacer una función más genérica que pueda reaprovechar
  function averageMovieDuration1(list, property) {
    let total = 0
    for (const item of list) {
        total += item[property] //no entiendo bien porque aquí debe usar corchetes y no como arriba, preguntar antonio
    }
    return total/list.length
  }
  const averageDurationgeneric = averageMovieDuration1(movies, 'duration')
  console.log(`La duración media es de ${averageDurationgeneric}`)
  