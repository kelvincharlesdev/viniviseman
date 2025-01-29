import * as S from './Title.styles';
import * as I from './Title.interface';

export const Title = ({
  textAlign = 'center',
  children,
  title
}: I.NewsletterTitleProps) => {
  return (
    <S.Title__Container textAlign={textAlign}>
      <h1>{title}</h1>
      {children}
    </S.Title__Container>
  );
};
