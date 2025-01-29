import styled from 'styled-components';

export const NewsletterSection__Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.medium};
  width: 100%;
`;

export const NewsletterSection__Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem 3.75rem;
`;
export const NewsletterSection__Content = styled.div`
  max-width: 672px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Input = styled.input`
  width: 236px;
  height: 60px;
  display: flex;
  flex: 1;
  padding: 12px 16px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.neutral.gray};
`;
export const Button__Content = styled.div`
  width: 236px;
`;
