import styled from 'styled-components';

export const Header = styled.header`
  max-width: 100%;
  height: 78px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-color: transparent;
  gap: 32px;
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

  @media (max-width: 540px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;
