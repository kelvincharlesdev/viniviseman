import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import * as S from './MainLayout.styles';
import { Link } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <S.MainLayout__Container>
      <header
        style={{
          height: '78px',
          position: 'fixed',
          top: '0',
          background: '#ffffff',
          width: '100%'
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/comunidade">comunidade</Link>
      </header>
      <S.Main__Content>
        <Outlet />
      </S.Main__Content>
      <Footer />
    </S.MainLayout__Container>
  );
};
