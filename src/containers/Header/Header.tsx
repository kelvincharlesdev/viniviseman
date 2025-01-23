import { ModalContent } from '../../componentes/Modal';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import * as S from './Header.styles';

import { NavBar } from './components/NavBar';

export const Header = () => {
  const windowWidth = useWindowWidth();

  return (
    <S.Header>
      <S.Logo>
        <a href="/">Viní Viseman</a>
      </S.Logo>

      {windowWidth > 768 ? (
        <NavBar />
      ) : (
        <ModalContent>
          <NavBar />
        </ModalContent>
      )}
    </S.Header>
  );
};
