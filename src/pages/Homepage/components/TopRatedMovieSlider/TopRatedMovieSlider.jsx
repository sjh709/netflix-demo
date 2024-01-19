import React from 'react';
import { useTopRatedMovies } from '../../../../hooks/useTopRatedMovies';
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const TopRatedMovieSlider = () => {
  const { data, isLoading, isError, error } = useTopRatedMovies();
  //   console.log('top data', data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert>{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider
        title='Top Rated Movies'
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatedMovieSlider;
