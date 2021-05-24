import React, { useState, useContext } from 'react';
import './Modal.scss';
import { ModalContext } from "../../contexts";

export const Modal = (props) => {
  const { children } = props;

  const { closeModal } = useContext(ModalContext);
  const [ closing, setClosing ] = useState(false);

  const handleModalClose = () => {
    setClosing(true);

    const closeTimeout = setTimeout(() => {
      closeModal();
      clearTimeout(closeTimeout);
    }, 300)
  }

  const modalClasses = closing ? 'modal modal--hide' : 'modal';

  return (
    <div className={modalClasses} onClick={handleModalClose}>
      <div className="modal__dialog">
        <div className="modal__content" onClick={(event) => event.stopPropagation()}>
          { children }
        </div>
      </div>
    </div>
  )
}