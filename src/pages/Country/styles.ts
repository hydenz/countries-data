import styled from 'styled-components';
import Link from '../../components/Link/Index';

export const BackButton = styled(Link)`
  padding: calc(0.45rem + 0.25vw) calc(2rem + 1vw);
  display: flex;
  align-items: center;
  width: max-content;
  font-size: 1.6rem;
  box-shadow: ${({ theme }) => theme.mediumBoxShadow};
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 6px;
`;
