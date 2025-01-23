import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background.dark};
  width: 100%;
  padding: 3rem 0;
`;

export const Footer__Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

export const Footer__Navigate = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
`;

export const Footer__Content__Title = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: ${({ theme }) => theme.fonts.size.xxs};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    color: ${({ theme }) => theme.colors.neutral.lightest};
  }

  p {
    font-size: ${({ theme }) => theme.fonts.size.base};
    color: ${({ theme }) => theme.colors.neutral.gray};
  }
`;

export const Footer__Navigate__List = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 8px;

  dt {
    font-size: ${({ theme }) => theme.fonts.size.xxs};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    color: ${({ theme }) => theme.colors.neutral.lightest};
    margin-bottom: 0.5rem;
  }

  dd {
    svg {
      width: 20px;
      height: 20px;
      margin-right: 0.5rem;
      color: #3984fa;
    }

    a {
      display: flex;
      align-items: center;
      font-size: ${({ theme }) => theme.fonts.size.base};
      color: ${({ theme }) => theme.colors.neutral.gray};

      &:hover {
        color: ${({ theme }) => theme.colors.neutral.lightest};
      }
    }
  }
`;

export const Footer__Navigate__Newsletter = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: ${({ theme }) => theme.fonts.size.xxs};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    color: ${({ theme }) => theme.colors.neutral.lightest};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Footer__Border = styled.hr`
  border: none;
  background-color: ${({ theme }) => theme.colors.neutral.gray};
  height: 1px;
  margin: 0.25rem 0;
`;

export const Footer__Copyright = styled.nav`
  color: ${({ theme }) => theme.colors.neutral.gray};
  text-align: center;
  margin-top: 1.25rem;
`;
