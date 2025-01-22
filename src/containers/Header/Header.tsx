import { ModalContent } from '../../componentes/Modal';
import * as S from './Header.styles';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Header>
      <S.Logo>Viní Viseman</S.Logo>
      {windowWidth > 540 ? (
        <S.Menu>
          <a href="/">Home</a>

          <a href="/">Sobre</a>

          <a href="/">Blog</a>

          <a href="/">Soluções</a>

          <a href="/">Contato</a>
        </S.Menu>
      ) : (
        <ModalContent>
          <S.Menu>
            <a href="/">Home</a>

            <a href="/">Sobre</a>

            <a href="/">Blog</a>

            <a href="/">Soluções</a>

            <a href="/">Contato</a>
          </S.Menu>
        </ModalContent>
      )}

      <button>Teste</button>
    </S.Header>
  );
};
