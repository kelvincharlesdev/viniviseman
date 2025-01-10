import * as S from './Model.styles';
import * as I from './Model.interfaces';

export const Model = ({ modelo }: I.ModelProps) => {
  return (
    <S.Model__Container>
      <S.Model__Title>Componente Modelo</S.Model__Title>
      {modelo}
    </S.Model__Container>
  );
};
