import styled from 'styled-components';
import * as I from './Badge.interface';

export const Badge__Container = styled.div<I.BadgeStylesProps>`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  color: ${({ color, theme }) => color || theme.colors.neutral.black};
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
`;
