import styled from 'styled-components';

export const Logo = styled.div`
  color: ${({ theme }) => theme.colors.neutral.medium};
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-weight: bold;
`;
