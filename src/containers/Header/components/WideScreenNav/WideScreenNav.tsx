import { Logo } from '../Logo/Logo';
import * as S from './WideScreenNav.styles';

export const WideScreenNav = () => {
  return (
    <S.WideScreenNav>
      <Logo />

      <S.WideScreenNav__Content>
        <a href="/">Home</a>

        <a href="/">Sobre</a>

        <a href="/">Blog</a>

        <a href="/">Soluções</a>

        <a href="/">Contato</a>
      </S.WideScreenNav__Content>

      <button>Teste</button>
    </S.WideScreenNav>
  );
};
