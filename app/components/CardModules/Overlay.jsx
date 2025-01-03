import React from "react";
import ReactDOM from "react-dom";

const Overlay = ({ children, className }) => {
  const overlayRoot = document.getElementById("overlay-root");

  if (!overlayRoot) return null;

  return ReactDOM.createPortal(
    <div
      className={`overlay z-100 absolute top-0 left-0 right-0 bottom-0 h-screen w-full ${className}`}
    >
      {children}
    </div>,
    overlayRoot
  );
};

export default Overlay;
