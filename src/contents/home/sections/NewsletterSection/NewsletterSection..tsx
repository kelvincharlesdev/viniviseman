import { Button } from '../../../../componentes/Button';
import Newsletter from '../../../../containers/Newsletter';

import * as S from './NewsletterSection.styles';

export const NewsletterSection = () => {
  return (
    <S.NewsletterSection__Container>
      <S.NewsletterSection__Wrapper>
        <S.NewsletterSection__Content>
          <Newsletter.Wrapper>
            <Newsletter.Title title="Receba conteúdo exclusivo">
              <small>
                Dicas práticas e insights quinzenais sobre disciplina e
                realização
              </small>
            </Newsletter.Title>
            <S.Form>
              <S.Input type="email" placeholder="Seu melhor e-mail" />
              <S.Button__Content>
                <Button $variant="secondary">Quero receber</Button>
              </S.Button__Content>
            </S.Form>
          </Newsletter.Wrapper>
        </S.NewsletterSection__Content>
      </S.NewsletterSection__Wrapper>
    </S.NewsletterSection__Container>
  );
};
