import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 76px;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(99, 99, 99, 0.2);
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.colors.neutral.medium};
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-weight: bold;
`;

export const Menu = styled.nav`
  display: flex;
  gap: 32px;
  align-items: center;
  font-weight: bolder;

  :hover {
    color: ${({ theme }) => theme.colors.neutral.medium};
  }
`;
