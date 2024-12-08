/* Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola. */
const artists = [
    { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
    { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
    { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
    { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
    { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
  ];
  
  // Añade tu código de bucle aquí
  for (let artist of artists) {
    for (let influence of artist.influences) { // aquí tengo que poner artist.influences para que mire en las influencias
        console.log(`${artist.name} is influenced by ${influence}`) 
        // aquí solo influence para que saque una a una por separado cuando imprime. si pongo artist.influences me las saca todas juntas
    }
  }
  