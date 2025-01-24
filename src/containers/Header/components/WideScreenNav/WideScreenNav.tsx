import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import * as S from './WideScreenNav.styles';

export const WideScreenNav = () => {
  return (
    <S.WideScreenNav>
      <Logo />

      <S.WideScreenNav__Content>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/solucoes">Soluções</Link>
        <Link to="/contato">Contato</Link>
      </S.WideScreenNav__Content>

      <button>Teste</button>
    </S.WideScreenNav>
  );
};
