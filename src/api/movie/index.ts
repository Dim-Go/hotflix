import {httpClient} from '../http-client';
import {AxiosResponse} from 'axios';
import {
  MovieDetails,
  SimilarMovies,
  MovieReviews,
  MovieCredits
} from './types';

export const fetchMovieDetails = (id: number): Promise<AxiosResponse<MovieDetails>> => httpClient({
  method: 'get',
  url: `/movie/${id}`
}).then(response => response)

export const fetchCredits = (id: number): Promise<AxiosResponse<MovieCredits>> => httpClient({
  method: 'get',
  url: `movie/${id}/credits`
}).then(response => response)

export const fetchSimilarMovies = (id: number): Promise<AxiosResponse<SimilarMovies>> => httpClient({
  method: 'get',
  url: `movie/${id}/similar`
}).then(response => response)

export const fetchReviews = (id: number): Promise<AxiosResponse<MovieReviews>> => httpClient({
  method: 'get',
  url: `movie/${id}/reviews`
}).then(response => response)