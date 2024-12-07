/* Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.
Utiliza bucles para lograrlo e imprime el objeto final por consola. */
const starWarsMovies = [
    { title: 'A New Hope', releaseYear: 1977 },
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 },
    { title: 'The Phantom Menace', releaseYear: 1999 },
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 },
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ];
  
  // Añade tu código de bucle aquí
  //creo un objeto y dentro le pongo los arrays de las decadas que quiero rellenar
  const moviesByDecade = {
    1970: [],
    1980: [],
    1990: [],
    2000: [],
    2010: []
  }
//recorro todo el array principal
  for (let movie of starWarsMovies) {
    
//mira las y fechas mete cada titulo de pelicula donde le corresponda.
    if (movie.releaseYear >= 1970 && movie.releaseYear <= 1979){
        moviesByDecade[1970].push(movie.title)
    } else if (movie.releaseYear >= 1980 && movie.releaseYear <= 1989){
        moviesByDecade[1980].push(movie.title)
    } else if (movie.releaseYear >= 1990 && movie.releaseYear <= 1999){
        moviesByDecade[1990].push(movie.title)
    } else if (movie.releaseYear >= 2000 && movie.releaseYear <= 2009){
        moviesByDecade[2000].push(movie.title)
    } else if (movie.releaseYear >= 2010 && movie.releaseYear <= 2019){
        moviesByDecade[2010].push(movie.title)
    
    }               
}
console.log(moviesByDecade)

/* para hacerlo menos corto podria cambiar el crear una variable que se llame year en vez de movie.releaseYear
 */
const moviesByDecade1 = {
    1970: [],
    1980: [],
    1990: [],
    2000: [],
    2010: []
  }
for (let movie of starWarsMovies) {
    let year = movie.releaseYear
    
    if (year >= 1970 && year <= 1979){
        moviesByDecade1[1970].push(movie.title)
    } else if (year >= 1980 && year <= 1989){
        moviesByDecade1[1980].push(movie.title)
    } else if (year >= 1990 && year <= 1999){
        moviesByDecade1[1990].push(movie.title)
    } else if (year >= 2000 && year <= 2009){
        moviesByDecade1[2000].push(movie.title)
    } else if (year >= 2010 && year <= 2019){
        moviesByDecade1[2010].push(movie.title)
    
    }
}
console.log(moviesByDecade1)          

    

  
 
  
  