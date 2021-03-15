import {httpClient} from '../http-client';
import {AxiosResponse} from 'axios';
import {Search} from './types';

export const fetchSearch = (params: string): Promise<AxiosResponse<Search>> => httpClient({
  method: 'get',
  url: 'search/movie',
  params
}).then(response => response)