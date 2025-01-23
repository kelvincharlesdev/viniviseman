import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 78px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(99, 99, 99, 0.2);

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  min-width: 33%;
  color: ${({ theme }) => theme.colors.neutral.medium};
  font-size: ${({ theme }) => theme.fonts.size.md};
  font-weight: bold;
`;
