import * as S from './Badge.styles';
import * as I from './Badge.interface';

export const Badge = ({ text, bgColor, color }: I.BadgeProps) => {
  return (
    <S.Badge__Container bgColor={bgColor} color={color}>
      {text}
    </S.Badge__Container>
  );
};
