import styled from 'styled-components';

export const customStylesModal = {
  content: {
    width: '254px',
    top: 0,
    left: 'auto',
    right: 0,
    bottom: 0,
    height: '100%',
    marginRight: 0,
    transform: 'none',
    backgroundColor: 'rgba(253, 253, 253, 0.99)',
    border: 'none',
    overflowY: 'auto' as const,
    padding: '20px',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }
};

export const Close__Modal = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    color: black;
  }
`;

export const Open__Modal = styled.button`
  color: ${({ theme }) => theme.colors.neutral.medium};
  font-size: ${({ theme }) => theme.fonts.size.md};
`;

export const Wrapper__Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  justify-content: flex-start;
`;
