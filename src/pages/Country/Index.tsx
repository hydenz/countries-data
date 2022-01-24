import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container/Index';
import * as S from './styles';
import { BsArrowLeft } from 'react-icons/bs';
import type { Country as CountryType } from '../../types/index';
import api from '../../utils/api';
import Loading from '../../components/Loading/Index';
import CountryDetails from './CountryDetails/Index';

const Country = () => {
  const { country } = useParams() as { country: string };
  const [countryData, setCountryData] = useState({} as CountryType);

  useEffect(() => {
    const fetchCountryData = async () => {
      const data = await api.getCountryByFullText(country);
      let initialBorders = data.borders;
      const randomBorders = [];
      if (initialBorders.length) {
        for (let i = 1; i <= 3; i++) {
          randomBorders.push(
            initialBorders.splice(
              Math.floor(Math.random() * initialBorders.length),
              1
            )[0]
          );
        }
      }
      const borderNames = randomBorders.length
        ? await api.getCountriesNamesByCodes(randomBorders)
        : randomBorders;
      setCountryData({ ...data, borders: borderNames });
    };
    fetchCountryData();
  }, [country]);

  return (
    <Container padding='calc(2.59rem + 3.76vw) calc(0.9rem + 4.93vw);'>
      <S.BackButton to='/'>
        <BsArrowLeft size='1.5em' css='margin-left: .3rem' />
        <p css='margin-left: .65rem;'>Back</p>
      </S.BackButton>
      {country !== countryData.name?.toLowerCase() ? (
        <Loading />
      ) : (
        <CountryDetails country={countryData} />
      )}
    </Container>
  );
};
export default Country;
