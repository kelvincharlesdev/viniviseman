import { useState } from 'react';
import Modal from 'react-modal';
import { IoCloseSharp, IoMenuSharp } from 'react-icons/io5';
import * as S from './Modal.styles';

Modal.setAppElement('#root');

interface ModalContentProps {
  children: React.ReactNode;
}

export const Modal__Content = ({ children }: ModalContentProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <S.Open__Modal onClick={openModal}>
        <IoMenuSharp />
      </S.Open__Modal>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={S.customStylesModal}
        contentLabel="Modal"
      >
        <S.Close__Modal>
          <button onClick={closeModal}>
            <IoCloseSharp />
          </button>
        </S.Close__Modal>

        <S.Wrapper__Modal>{children}</S.Wrapper__Modal>
      </Modal>
    </div>
  );
};
