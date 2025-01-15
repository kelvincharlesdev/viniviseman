import * as S from './Header.styles';

export const Header = () => {
  return (
    <S.Header>
      <S.Logo>Viní Viseman</S.Logo>
      <S.Menu>
        <a href="/">Home</a>

        <a href="/">Sobre</a>

        <a href="/">Blog</a>

        <a href="/">Soluções</a>

        <a href="/">Contato</a>
      </S.Menu>
      <div>
        <button>Teste</button>
      </div>
    </S.Header>
  );
};
