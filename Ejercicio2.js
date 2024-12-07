/* Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.
Imprime ambos conteos por consola. */
const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
  ];
  
  const before2000 = []
  let countbefore2000 = 0
  const after2000 = []
  let countafter2000 = 0
  // Añade tu código de bucle aquí
for (let movie of movies) {
    if (movie.releaseYear <= 2000) {
        before2000.push(movie)
        countbefore2000++
    } else {
        after2000.push(movie)
        countafter2000++
    }
}
console.log("En total hay "+countbefore2000+" películas del 2000 o anteriores.")
console.log(before2000)
console.log("--".repeat(15))
console.log("En total hay "+countafter2000+" películas de después del año 2000.")
console.log(after2000)