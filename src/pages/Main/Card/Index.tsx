import * as S from './styles';
import type { Country } from '../../../types/index';
import type { CSSProp, DefaultTheme } from 'styled-components';
import Link from '../../../components/Link/Index';
import api from '../../../utils/api';

const Card = ({ name, flag, data, pageCard }: CardProps): JSX.Element => {
  const getDataContent = (dataObj: any) => {
    const [dataKey, dataValue]: [any, any] = Object.entries(dataObj)[0];
    switch (dataKey) {
      case 'population':
        return dataValue.toLocaleString('en-US');
      case 'topLevelDomain':
        return dataValue.join(', ');
      case 'currencies':
        return dataValue.map((currency: any) => currency.name).join(', ');
      case 'languages':
        return dataValue.map((language: any) => language.name).join(', ');
      case 'borderCountries':
        // const borderCountries: string[] = [];
        // dataValue.forEach(async (code: string) =>
        //   borderCountries.push((await api.getCountryByCode(code)).name)
        // );
        // return dataValue.join(', ');
        return (
          dataValue.length && (
            <div css='display: flex; justify-content: space-between; width: 97%; margin-top: 1.6rem;'>
              {dataValue.map((value: string) => (
                <Link
                  to={`/${value.toLowerCase()}`}
                  width='31.2%'
                  display='flex'
                  justifycontent='center'
                  alignitems='center'
                  padding='0.7rem'
                  fontSize='1.2rem'
                  key={value}
                >
                  {value}
                </Link>
              ))}
            </div>
          )
        );
      default:
        return dataValue;
    }
  };

  return (
    <Link title={name} to={`/${name.toLowerCase()}`} css='width: 264px'>
      <S.Flag src={flag} alt={`${name} flag`} />
      <S.CountryCardDataContainer>
        <h1
          css={`
            font-size: ${pageCard ? '2.2rem' : '1.8rem'};
          `}
        >
          {name}
        </h1>
        {data.map((dataObj, idx) => {
          const [dataKey, dataValue]: [any, any] = Object.entries(dataObj)[0];
          return (
            <S.CountryCardData
              name={dataKey as keyof Country}
              key={dataKey}
              css={`
                ${!idx && `margin-top: 1.5rem`};
                padding-block: 0.4rem;
                ${idx === 5 && 'margin-top: 3.6rem'};
                ${idx === 8 && 'margin-top: 3.3rem; font-size: 1.6rem'}
              `}
            >
              {getDataContent(dataObj)}
            </S.CountryCardData>
          );
        })}
      </S.CountryCardDataContainer>
    </Link>
  );
};

export default Card;

interface CardProps {
  pageCard?: boolean;
  name: Country['name'];
  flag: Country['flag'];
  // flag: Country['flag'];
  // data: { [Property in keyof Country]: Country[Property] }[];
  data: any[];
}
