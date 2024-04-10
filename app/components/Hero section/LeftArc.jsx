import React, { forwardRef } from "react";

const LeftArc = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-1/3 h-full bg-[url('/right_arc.svg')] bg-cover"
    ></div>
  );
});

LeftArc.displayName = "LeftArc";

export default LeftArc;
