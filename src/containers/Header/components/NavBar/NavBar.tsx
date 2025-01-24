import * as S from './NavBar.styles';

export const NavBar = () => {
  return (
    <S.NavBar>
      <S.NavBar__Content>
        <a href="/">Home</a>

        <a href="/">Sobre</a>

        <a href="/">Blog</a>

        <a href="/">Soluções</a>

        <a href="/">Contato</a>
      </S.NavBar__Content>
      <button>Teste</button>
    </S.NavBar>
  );
};
