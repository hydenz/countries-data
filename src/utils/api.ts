import axios from 'axios';
import type { Country } from '../types/index';

const api = axios.create({ baseURL: 'https://restcountries.eu/rest/v2/' });

api.getAllCountries = async () => {
  const countriesData: Country[] = (await api.get('/all')).data;
  return countriesData;
};

api.getCountryByFullText = async (country: string) => {
  const countryData: Country = (await api.get(`/name/${country}?fullText=true`))
    .data[0];
  return countryData;
};

api.getCountriesNamesByCodes = async (countriesCodes: string[]) => {
  const countriesNames: Country['name'][] = (
    await api.get(`/alpha?codes=${countriesCodes.join(';')}&fields=name`)
  ).data.map(({ name }: { name: Country['name'] }) => name);

  return countriesNames;
};

export default api;
