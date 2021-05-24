import React from 'react';

export const ModalFooter = (props) => {
  const { children } = props;

  return (
    <div className="modal__footer">
      {children}
    </div>
  )
}