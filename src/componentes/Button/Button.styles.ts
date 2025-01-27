import styled, { css } from 'styled-components';
import * as I from './Button.interfaces';

const buttonSharedStyles = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.3s;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.size.xxs};
  border-radius: 10px;
`;

const buttonVariantStyles = {
  primary: css<I.ButtonProps>`
    height: 40px;
    background-color: ${({ theme }) => theme.colors.background.medium};
    color: ${({ theme }) => theme.colors.neutral.lightest};

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral.medium};
    }
  `,
  secondary: css<I.ButtonProps>`
    height: 60px;
    color: ${({ theme }) => theme.colors.neutral.lightest};
    background-color: ${({ theme }) => theme.colors.background.medium};

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral.medium};
    }
  `,
  outline: css<I.ButtonProps>`
    height: 60px;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.background.medium};
    color: ${({ theme }) => theme.colors.background.medium};

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral.light};
    }
  `
};

export const Button__Container = styled.button<I.ButtonProps>`
  ${buttonSharedStyles}
  ${({ $variant }) => $variant && buttonVariantStyles[$variant]}
`;
