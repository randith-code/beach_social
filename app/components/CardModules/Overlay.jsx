import React from "react";
import ReactDOM from "react-dom";

const Overlay = ({ children }) => {
  const overlayRoot = document.getElementById("overlay-root");

  if (!overlayRoot) return null;

  return ReactDOM.createPortal(
    <div className="overlay absolute top-0 left-0 right-0 bottom-0 h-screen w-full bg-valuesBg">
      {children}
    </div>,
    overlayRoot
  );
};

export default Overlay;
