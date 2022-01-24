import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)<LinkProps>`
  width: ${({ width }) => width};
  display: ${({ display }) => display};
  justify-content: ${({ justifycontent }) => justifycontent};
  align-items: ${({ alignitems }) => alignitems};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  box-shadow: ${({ theme }) => theme.mediumBoxShadow};
  border-radius: ${({ theme }) => theme.smallBorderRadius};
  text-decoration: none;
  color: initial;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Link;

interface LinkProps {
  width?: string;
  display?: string;
  justifycontent?: string;
  alignitems?: string;
  padding?: string;
  lightBoxShadow?: string;
  fontSize?: string;
}
