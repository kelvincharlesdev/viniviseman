import styled from 'styled-components';
import * as I from './Title.interfaces';

export const Title__Container = styled.h2<I.TitleProps>`
  color: ${({ theme }) => theme.colors.background.dark};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: ${({ textAlign }) => textAlign || 'center'};
`;
