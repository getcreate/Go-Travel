import React from "react";
import "./Button.scss";

export const Button = (props) => {
  const { text, type, textHidden, classes, beforeIcon, afterIcon, onClick, disabled } = props;

  return (
    <button type={type ? type : "button"} className={"btn " + classes ? "btn " + classes : null} onClick={onClick} disabled={disabled ? "disabled" : null}>
      {beforeIcon ? <span className="btn__icon"> {beforeIcon} </span> : null}
      <span className={textHidden ? "btn__text visually-hidden" : "btn__text"}>{text}</span>
      {afterIcon ? <span className="btn__icon">{afterIcon}</span> : null}
    </button>
  );
};
