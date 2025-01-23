import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 100%;
  flex: 1;
  display: flex;

  align-items: center;
  justify-content: space-between;
  font-weight: bolder;

  :hover {
    color: ${({ theme }) => theme.colors.neutral.medium};
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const NavBarContent = styled.div`
  display: flex;
  gap: 32px;
`;
