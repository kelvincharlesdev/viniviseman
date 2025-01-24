import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const NavBar__Content = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  gap: 32px;

  :hover {
    color: ${({ theme }) => theme.colors.neutral.medium};
  }
`;
