import React from 'react';
import Link from '../../../components/Link/Index';
import DataItem from './DataItem/Index';
import * as S from './styles';
import type { Country } from '../../../types/index';

const CountryDetails = ({ country }: { country: Country }) => {
  return (
    <S.Container>
      <S.Flag
        src={country.flag}
        width='100%'
        // height='230px'
        alt={`${country.name} flag`}
      />
      {/* <div css='padding-block: 4rem'> */}
      <S.DataContainer>
        <h1 css='font-size: 3.2rem'>{country.name}</h1>
        <S.DataColumnsContainer>
          <div>
            <p>
              <strong>Native Name: </strong>
              {country.nativeName}
            </p>
            <p>
              <strong>Population: </strong>
              {country.population.toLocaleString('en-US')}
            </p>
            <p>
              <strong>Region: </strong>
              {country.region}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {country.subregion}
            </p>
            <p>
              <strong>Capital: </strong>
              {country.capital}
            </p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain: </strong>
              {country.topLevelDomain}
            </p>
            <p>
              <strong>Currencies: </strong>
              {country.currencies
                .map((currency: any) => currency.name)
                .join(', ')}
            </p>
            <p>
              <strong>Languages: </strong>
              {country.languages
                .map((language: any) => language.name)
                .join(', ')}
            </p>
          </div>
        </S.DataColumnsContainer>
        <S.BordersWrapper>
          <h2>Border Countries:</h2>
          <div>
            {country.borders.map((border) => (
              <Link
                to={`/${border.toLowerCase()}`}
                width='31.2%'
                display='flex'
                justifycontent='center'
                alignitems='center'
                padding='0.7rem'
                fontSize='1.2rem'
                key={border}
              >
                {border}
              </Link>
            ))}
          </div>
        </S.BordersWrapper>
      </S.DataContainer>
    </S.Container>
  );
};

export default CountryDetails;
