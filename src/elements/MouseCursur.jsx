import React, { useState } from 'react';
import styled from 'styled-components';

const MousePointer = styled.div`
  position: absolute;
  background-color: rgb(108, 12, 31);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  left: -15px;
  top: -15px;
`;

function MouseCursur() {
  const [xy, setXy] = useState({ x: 0, y: 0 });
  const xyHandler = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setXy({ x: mouseX, y: mouseY });
  };

  return (
    <MousePointer
      onMouseMove={xyHandler}
      style={{ transform: `translate(${xy.x}px, ${xy.y}px)` }}
    />
  );
}

export default MouseCursur;
