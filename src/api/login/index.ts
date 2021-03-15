import {httpClient} from '../http-client';
import {AxiosResponse} from 'axios';
import {
  AuthData,
  AuthResponse,
  SessionIdResponse,
} from './types';

export const fetchRequestToken = (): Promise<AxiosResponse<AuthResponse>> => httpClient({
  method: 'get',
  url: 'authentication/token/new'
}).then(response => response)

export const fetchAuth = (data: AuthData): Promise<AxiosResponse<AuthResponse>> => httpClient({
  method: 'post',
  url: 'authentication/token/validate_with_login',
  data
}).then(response => response)

export const fetchSessionId = (data: object): Promise<AxiosResponse<SessionIdResponse>> => httpClient({
  method: 'post',
  url: 'authentication/session/new',
  data
}).then(response => response)

export const fetchLogOut = (data: string) => httpClient({
  method: 'delete',
  url: '/authentication/session',
  data
}).then(response => response)