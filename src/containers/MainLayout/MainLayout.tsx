import { Footer } from '../Footer';
import * as S from './MainLayout.styles';

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
        Header
      </header>
      <S.Main__Content>Main</S.Main__Content>
      <Footer />
    </S.MainLayout__Container>
  );
};
