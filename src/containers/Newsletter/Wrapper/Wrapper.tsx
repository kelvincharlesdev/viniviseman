import * as S from './Wrapper.styles';
import * as I from './Wrapper.interface';

export const Wrapper = ({ children }: I.WrapperProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
