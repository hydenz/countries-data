import * as S from './styles';

const Header = () => (
  <S.Container>
    <S.Title>Where in the world?</S.Title>
    <S.ThemeChangerContainer>
      <S.ThemeChangerButton>
        <S.ThemeChangerIcon size='16px' />
        Dark Mode
      </S.ThemeChangerButton>
    </S.ThemeChangerContainer>
  </S.Container>
);

export default Header;
