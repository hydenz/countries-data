import styled from 'styled-components';
import type { Country } from '../../types/index';

export const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 4rem;
`;

export const NameFilterContainer = styled.div`
  flex-grow: 1;
  min-width: 343px;
  /* max-width: 343px; */
  max-width: 482px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  /* padding-block: 1.4rem; */
  padding-block: calc(1.3rem + 0.25vw);
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.lightBoxShadow};
  margin-right: 2rem;
`;

export const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  border: none;
  background: none;
  font-size: 1.2rem;
  flex-grow: 1;
  font-family: inherit;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.font};
  }
`;

export const RegionFilterContainer = styled.div`
  padding: 1.7rem 1.8rem 1.7rem 2.4rem;
  min-width: 200px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  box-shadow: ${({ theme }) => theme.lightBoxShadow};
`;

export const FilterOptionsContainer = styled.div<FilterOptionsContainerProps>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  width: 100%;
  padding-block: 1rem 1.2rem;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.secondary};
  top: 54px;
  left: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.lightBoxShadow};
`;

export const FilterOption = styled.div`
  padding: 0.4rem 1.8rem 0.4rem 2.4rem;
  /* margin-top: 0.6rem; */
  user-select: none;
  &:hover {
    cursor: pointer;
    background-color: hsl(210, 17%, 98%);
  }
`;

export const CardsContainer = styled.div`
  margin-top: calc(2rem + 2.4vw);
  row-gap: calc(2.65rem + 3.6vw);
  column-gap: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 264px);
  justify-content: center;

  @media only screen and (min-width: 1000px) {
    justify-content: space-between;
  }
`;

interface FilterOptionsContainerProps {
  show: boolean;
}

export interface CountryCardFlagProps {
  src?: Country['flag'];
  alt?: string;
  withBorderRadius?: boolean;
  height?: string;
}
