import styled from 'styled-components';
import * as I from './Title.interface';

export const Title__Container = styled.div<I.HeroTitleProps>`
  max-width: 845px;
  height: auto;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  color: ${({ theme }) => theme.colors.neutral.black};

  h1 {
    font-size: ${({ theme }) => theme.fonts.size.xl};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    margin: 1.5rem 0 1.125rem;

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fonts.size.xhuge};
      margin: 1.75rem 0 1.5rem;
    }
  }

  small {
    font-size: ${({ theme }) => theme.fonts.size.md};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
  }
`;
