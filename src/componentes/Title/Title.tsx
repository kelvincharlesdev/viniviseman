import * as S from './Title.styles';
import * as I from './Title.interfaces';

export const Title = ({ children }: I.TitleProps) => {
  return <S.Title__Container>{children}</S.Title__Container>;
};
