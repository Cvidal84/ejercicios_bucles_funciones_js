/* Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.
Utiliza bucles para estructurar este objeto e imprime el resultado por consola. */
const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
  
  // creamos el objeto vacío
 const tracksByGenre = {
    Metal: [],
    Rock: [],
    Pop: [],
    Country: [],
    Grunge: []
 }

 for (let track of tracks) {
    let genre = track.genre

    if (genre === "Metal") {
        tracksByGenre["Metal"].push(track.title)
    } else if (genre === "Rock") {
        tracksByGenre["Rock"].push(track.title)
    } else if (genre === "Pop") {
        tracksByGenre["Pop"].push(track.title)
    } else if (genre === "Country") {
        tracksByGenre["Country"].push(track.title)
    } else if (genre === "Grunge") {
        tracksByGenre["Grunge"].push(track.title)
    }
 }
 console.log(tracksByGenre)
 //para que funcione como son string hay que ponerlos entre comillas, tanto cuando hacemos el === como cuando le queremos hacer el push, siempre comillas en string