import React from "react";

function Eyes({ eyeOffsetY, eyeOffsetX, eyeRadius }) {
  return (
    <>
      <circle cy={-eyeOffsetY} cx={-eyeOffsetX} r={eyeRadius} />
      <circle cy={-eyeOffsetY} cx={eyeOffsetX} r={eyeRadius} />
    </>
  );
}

export default Eyes;
