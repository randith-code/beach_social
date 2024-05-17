import React, { useState, useRef } from "react";

const ClickAndDragScroll = ({ children, className }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef();

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scroll speed as needed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeaveOrUp}
      onMouseUp={onMouseLeaveOrUp}
      onMouseMove={onMouseMove}
      className={`relative overflow-auto ${className}`} // Tailwind CSS for overflow control
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      {children}
    </div>
  );
};

export default ClickAndDragScroll;
