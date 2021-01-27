import React, { createRef, PropsWithChildren, MouseEvent } from "react";

interface MenuButtonProps{
  hasIcon: boolean;
}

function MenuButton(
  ButtonComponent: PropsWithChildren<any>,
  IconComponent: PropsWithChildren<any> | undefined
) {
  return ({hasIcon} : MenuButtonProps) => {
    const buttonEl = createRef<any>();
    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      buttonEl.current.firstChild.click();
    };
    return (
      <div className="custom-menu-button" onClick={handleClick}>
        {hasIcon && IconComponent !== undefined ? (
          <span className="custom-menu-button-icon">
            <IconComponent />
          </span>
        ) : null}
        <span ref={buttonEl} className="custom-menu-button-component">
          <ButtonComponent />
        </span>
      </div>
    );
  };
}

export default MenuButton;
