import styled from 'styled-components';

// eslint-disable-next-line
export const Container = styled.div<ContainerProps>`
  padding: ${({ padding }) => padding};
`;

interface ContainerProps {
  padding?: string;
}
