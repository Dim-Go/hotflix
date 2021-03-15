import axios from 'axios';
import { camelize } from '@ridi/object-case-converter';

export const httpClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

httpClient.interceptors.request.use(
  config => {
    return {
      ...config,
      headers: {
        ...config.headers,
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjI4N2ZhNTI5NGVkZmI0NGNkZDM1MWU1NjM0YThiNSIsInN1YiI6IjYwMTdlY2JiMWI3MGFlMDAzYzY1NWE1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._L8qUBcIl-V60c4fgy1a-34WZZljY9KhyTs5FTS40eo',
      },
      params: {
        ...config.params,
        language: 'ru'
      }
    };
  },
  error => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  response => {
    const normalizedData = camelize(response.data, { recursive: true });
    return {
      ...response,
      data: normalizedData,
    };
  },
  error => {
    return Promise.reject(error);
  }
);