import { Modal__Content } from '../../componentes/Modal';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import * as S from './Header.styles';
import { Logo } from './components/Logo/Logo';

import { NavBar } from './components/NavBar/NavBar';
import { WideScreenNav } from './components/WideScreenNav/WideScreenNav';

export const Header = () => {
  const windowWidth = useWindowWidth();

  return (
    <S.Header>
      {windowWidth > 768 ? (
        <WideScreenNav />
      ) : (
        <S.Mobile__Header>
          <Logo />
          <Modal__Content>
            <NavBar />
          </Modal__Content>
        </S.Mobile__Header>
      )}
    </S.Header>
  );
};
