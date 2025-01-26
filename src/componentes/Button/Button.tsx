import * as S from './Button.styles';
import * as I from './Button.interfaces';

export const Button = ({
  text,
  size,
  $variant = 'primary',
  ...props
}: I.ButtonProps) => {
  return (
    <S.Button__Container
      size={size}
      $variant={$variant}
      text={text}
      {...props}
    />
  );
};
