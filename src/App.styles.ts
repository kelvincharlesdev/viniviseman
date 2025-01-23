import styled from 'styled-components';

export const Teste = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral.medium};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    color: red;
  }
`;
