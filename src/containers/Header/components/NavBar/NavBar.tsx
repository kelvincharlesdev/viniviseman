import { Link } from 'react-router-dom';
import * as S from './NavBar.styles';
import { Button } from '../../../../componentes/Button';

export const NavBar = () => {
  return (
    <S.NavBar>
      <S.NavBar__Content>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/solucoes">Soluções</Link>
        <Link to="/contato">Contato</Link>
      </S.NavBar__Content>
      <S.Button__Content>
        <Button>Clube dos CEOs</Button>
      </S.Button__Content>
    </S.NavBar>
  );
};
