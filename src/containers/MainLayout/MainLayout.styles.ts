import styled from 'styled-components';

export const MainLayout__Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const Main__Content = styled.main`
  width: 100%;
  height: calc(100vh - 300px);
  background-color: red;
  margin-top: 4.875rem;
`;
