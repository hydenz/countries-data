// eslint-disable-next-line
import { AxiosInstance } from 'axios';
import type { Country } from './index';

declare module 'axios' {
  export interface AxiosInstance {
    getAllCountries: () => Promise<Country[]>;
    getCountryByFullText: (country: string) => Promise<Country>;
    getCountriesNamesByCodes: (
      countriesCodes: string[]
    ) => Promise<Country['name'][]>;
  }
}
