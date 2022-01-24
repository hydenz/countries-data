import styled from 'styled-components';
import type { Country } from '../../../types/index';

export const Flag = styled.img.attrs(({ src, alt }) => ({
  src,
  alt,
  height: '160px',
  width: '100%',
}))<FlagProps>`
  object-fit: cover;
  display: block;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const CountryCardDataContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2.5rem 2.5rem 4.4rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.lightBoxShadow};
`;

export const CountryCardData = styled.p<CountryCardDataProps>`
  font-size: 1.4rem;
  margin-top: 0.5rem;
  &::before {
    font-weight: 600;
    content: ${({ name }) =>
      `'${(name[0].toUpperCase() + name.slice(1)).replace(
        /([A-Z])/g,
        ' $1'
      )}: '`};
  }
`;

export const CountryCardBorderData = styled.span`
  width: 31.2%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem;
  box-shadow: ${({ theme }) => theme.lightBoxShadow};
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface CountryCardDataProps {
  name: keyof Country;
  css?: string;
  // name: 'Population' | 'Region' | 'Capital';
}

export interface FlagProps {
  src: Country['flag'];
  alt: string;
}
