import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  width: 100%;
  height: 78px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(99, 99, 99, 0.2);
  background-color: ${({ theme }) => theme.colors.neutral.lightest};

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const Mobile__Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
