
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('movies')
    .insert([
      { id: 1, title: 'Blade Runner', director: 'Ridley Scott', year: 1982, star_rating: 5, poster_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,671,1000_AL_.jpg' },
      { id: 2, title: 'Star Wars: Episode IV - A New Hope', director: 'George Lucas', year: 1977, star_rating: 5, poster_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTUwNTdiMzMtNThmNS00ODUzLThlMDMtMTM5Y2JkNWJjOGQ2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SY1000_CR0,0,664,1000_AL_.jpg' },
      { id: 3, title: 'The Usual Suspects', director: 'Bryan Singer', year: 1995, star_rating: 5, poster_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,670,1000_AL_.jpg' },
      { id: 4, title: 'Moulin Rouge!', director: 'Baz Luhrmann', year: 2001, star_rating: 5, poster_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODg5MTk2YmYtMzQyOC00OGUzLWFlZDYtMjBkNTk3MTA3ZjU0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg' },
      { id: 5, title: 'Gigli', director: 'Martin Brest', year: 2003, star_rating: 1, poster_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTE5MTYxMDg5NV5BMl5BanBnXkFtZTYwNjc5MzQ3._V1_.jpg' }
    ])
    .then(() => {
      return knex.raw(`SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));`)
    })
}
