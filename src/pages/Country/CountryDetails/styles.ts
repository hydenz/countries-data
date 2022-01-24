import styled from 'styled-components';
import Link from '../../../components/Link/Index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: calc(5.5rem + 1.9vw);
  /* min-height: 677px; */

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const Flag = styled.img`
  max-width: 560px;
  aspect-ratio: 320/230;
  max-height: 402.5px;
`;

export const DataContainer = styled.div`
  padding-block: 3.6rem;
  width: 47%;
`;

export const DataColumnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  font-size: 1.4rem;
  min-height: 275px;
  justify-content: space-between;
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }

  strong {
    font-weight: 600;
  }

  p:not(:first-child) {
    margin-top: 1.3rem;
  }
`;

export const BordersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  h2 {
    font-weight: 600;
    font-size: 1.6rem;
  }

  div {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    width: 97%;
    margin-top: 1.6rem;
  }
`;

export const BorderNav = styled(Link)`
  font-size: 1.2rem;
  padding: 0.7rem 2.9rem;
`;
