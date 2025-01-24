import styled from 'styled-components';

export const WideScreenNav = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const WideScreenNav__Content = styled.div`
  display: flex;
  gap: 32px;

  :hover {
    color: ${({ theme }) => theme.colors.neutral.medium};
  }
`;
