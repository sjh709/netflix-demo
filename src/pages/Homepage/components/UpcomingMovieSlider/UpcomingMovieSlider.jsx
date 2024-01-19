import React from 'react';
import { useUpcomingMovie } from '../../../../hooks/useUpcomingMovie';
import { Alert } from 'bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const UpcomingMovieSlider = () => {
  const { data, isLoading, isError, error } = useUpcomingMovie();
  //   console.log('upcoming data', data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert>{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider
        title='Upcoming Movies'
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMovieSlider;
