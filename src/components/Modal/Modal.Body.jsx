import React from 'react';

export const ModalBody = (props) => {
  const { children } = props;

  return (
    <div className="modal__body">
      {children}
    </div>
  )
}