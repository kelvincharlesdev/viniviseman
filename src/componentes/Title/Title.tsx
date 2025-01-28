import * as S from './Title.styles';
import * as I from './Title.interfaces';

export const Title = ({ children, textAlign }: I.TitleProps) => {
  return (
    <S.Title__Container textAlign={textAlign}>{children}</S.Title__Container>
  );
};
