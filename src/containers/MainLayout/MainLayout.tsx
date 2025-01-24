import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import * as S from './MainLayout.styles';
import { Header } from '../Header';

export const MainLayout = () => {
  return (
    <S.MainLayout__Container>
      <Header />
      <S.Main__Content>
        <Outlet />
      </S.Main__Content>
      <Footer />
    </S.MainLayout__Container>
  );
};
