import styled from 'styled-components';

export const HeroSection__Container = styled.div`
  background-color: #eef2ff;
  width: 100%;
`;

export const HeroSection__Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem 3.75rem;
`;

export const Button__Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
  margin-top: 2.5rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Button__Primary = styled.div`
  width: 290px;
`;
export const Button__Outline = styled.div`
  width: 200px;
`;
