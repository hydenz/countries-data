import styled from 'styled-components';
import { RiMoonLine } from 'react-icons/ri';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.font};
  padding: calc(3.3rem - 0.65vw) calc(-0.79rem + 6.1vw);
  box-shadow: 0px 2px 20px -2px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: calc(1.05rem + 0.95vw);
  font-weight: 800;
`;

export const ThemeChangerContainer = styled.span`
  display: flex;
  align-items: center;
`;

export const ThemeChangerButton = styled.button.attrs({
  type: 'button',
  'aria-label': 'Change color theme',
})`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: inherit;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;

export const ThemeChangerIcon = styled(RiMoonLine)`
  margin-right: 1.1rem;
`;
