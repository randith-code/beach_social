import React, { forwardRef } from "react";

const RightArc = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-1/3 h-full bg-[url('/left_arc.svg')] bg-cover"
    ></div>
  );
});

RightArc.displayName = "RightArc";

export default RightArc;
