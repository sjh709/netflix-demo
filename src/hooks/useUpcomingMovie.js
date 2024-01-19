import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchPopularMovies = () => {
  return api.get(`/movie/upcoming`);
};

export const useUpcomingMovie = () => {
  return useQuery({
    queryKey: ['movie-upcoming'],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
};
