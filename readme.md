# Movie-CRUD
> This is the server end of a movie ratings website done as a project for Galvanize.

## Database Format
| table:      | 'movies'                            |
|-------------|-------------------------------------|
| id          | primary key, sequence, non-nullable |
| title       | string, non-nullable                |
| director    | string                              |
| year        | integer                             |
| star_rating | integer                             |
| poster_url  | string                              |
| created_at  | timestamp                           |
| updated_at  | timestamp                           |
