/* eslint-disable import/named */
import {create} from 'apisauce';
import {BASE_URL, API_VERSION} from '../constants';

export const RestClient = create({
  baseURL: `${BASE_URL}/${API_VERSION}`,
  headers: {
    Accept: 'application/json',
    Authorization: '',
  },
  timeout: 30000,
});
