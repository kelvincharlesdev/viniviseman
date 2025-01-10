import styled from 'styled-components';

export const Teste = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral.medium};

  h1 {
    color: red;
  }
`;
