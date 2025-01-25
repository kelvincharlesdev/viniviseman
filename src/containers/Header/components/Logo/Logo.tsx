import { Link } from 'react-router-dom';
import * as S from './Logo.styles';

export const Logo = () => {
  return (
    <S.Logo>
      <Link to="/">Viní Viseman</Link>
    </S.Logo>
  );
};
