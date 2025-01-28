import { Button } from '../../../../componentes/Button';
import Hero from './../../../../containers/Hero';

import * as S from './HeroSection.styles';

export const HeroSection = () => {
  return (
    <S.HeroSection__Container>
      <S.HeroSection__Content>
        <Hero.Wrapper>
          {/* //TODO Remover Badge , deixei so como exemplo */}
          <Hero.Badge
            bgColor="#DBEAFE"
            color="#193CB8"
            text="Vagas Limitadas"
          />
          <Hero.HeroTitle title=" Transformando Disciplina em Realização">
            <small>
              Ajudo pessoas a construírem uma vida mais disciplinada e
              significativa, unindo método prático com experiência real que
              integra todas as áreas da vida.
            </small>
          </Hero.HeroTitle>
          <S.Button__Content>
            <S.Button__Primary>
              <Button $variant="secondary">Comece sua jornada</Button>
            </S.Button__Primary>
            <S.Button__Outline>
              <Button $variant="outline">Saiba mais</Button>
            </S.Button__Outline>
          </S.Button__Content>
        </Hero.Wrapper>
      </S.HeroSection__Content>
    </S.HeroSection__Container>
  );
};
