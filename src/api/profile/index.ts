import {AxiosResponse} from 'axios';
import {httpClient} from '../http-client';
import {
  ProfileData,
  FavouriteMovies,
  FavoriteMark,
  AddWatchList,
  WatchList
} from './types';

export const fetchProfile = (params: string): Promise<AxiosResponse<ProfileData>> => httpClient({
  method: 'get',
  url: 'account',
  params
}).then(response => response)

export const fetchFavoritesMovies = (accountId: string): Promise<AxiosResponse<FavouriteMovies>> => httpClient({
  method: 'get',
  url: `account/${accountId}/favorite/movies`
}).then(response => response)

export const fetchWatchList = (accountId: number): Promise<AxiosResponse<WatchList>> => httpClient({
  method: 'get',
  url: `/account/${accountId}/watchlist/movies`
}).then(response => response)

export const fetchMarkFavorite = ({accountId, ...rest}: FavoriteMark) => httpClient({
  method: 'post',
  url: `/account/${accountId}/favorite`,
  data: rest
}).then(response => response)

export const fetchAddToWatchList = ({accountId, ...rest}: AddWatchList) => httpClient({
  method: 'post',
  url: `/account/${accountId}/favorite`,
  data: rest
}).then(response => response)
