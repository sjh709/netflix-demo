import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchPopularMovies = () => {
  return api.get(`movie/top_rated`);
};

export const useTopRatedMovies = () => {
  return useQuery({
    queryKey: ['movie-top-rated'],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
};
