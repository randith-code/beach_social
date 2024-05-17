import React, { forwardRef } from "react";

const RightArc = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={`${props.className} w-1/3 h-full bg-[url('/left_arc.svg')] md:bg-right-top lg:bg-cover bg-center`}
    ></div>
  );
});

RightArc.displayName = "RightArc";

export default RightArc;
