import React from 'react';
import { ButtonClose } from '../ButtonClose';

export const ModalHeader = (props) => {
  const { children } = props;

  return (
    <div className="modal__header">
    <div className="modal__headline">
      { children }
    </div>
      
      <div className="modal__close">
        <ButtonClose
        ariaLabel="Закрыть" text="Закрыть" />
      </div>
      
    </div>
  )
}