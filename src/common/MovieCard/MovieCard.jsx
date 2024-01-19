import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css';

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ')',
      }}
      className='movie-card'
    >
      <div className='overlay'>
        <h1 className='movie_title'>{movie.title}</h1>
        {movie.genre_ids.map((id, index) => (
          <Badge bg='danger' key={index} className='badge-margin'>
            {id}
          </Badge>
        ))}
        <div className='movie_social_details'>
          <ul>
            <li>
              <img src='IMDB.png' width={20} />
              <span>{movie.vote_average}</span>
            </li>
            <li>
              <img src='people.png' width={20} />
              <span>{movie.popularity}</span>
            </li>
            <li>
              {movie.adult ? (
                <img src='/over18.svg' width={20} />
              ) : (
                <img src='/under18.svg' width={20} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
