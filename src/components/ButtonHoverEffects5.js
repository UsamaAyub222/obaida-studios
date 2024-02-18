import React, { useState } from 'react';


const RippleEffect = ({ x, y }) => {
  return <span className="ripple" style={{ left: x, top: y }} />;
};

const ButtonHoverEffects5 = (props) => {
  const [hovered, setHovered] = useState(false);
  const [ripple, setRipple] = useState({ x: -1, y: -1 });

  const handleRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setRipple({ x: -1, y: -1 });
  };

  return (
    <a
    href={props.link}
      className="button-with-ripple"
      onMouseMove={handleRipple}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      target={props.target}
    >
      {props.text}
      {hovered && ripple.x !== -1 && <RippleEffect x={ripple.x} y={ripple.y} />}
    </a>
  );
};

export default ButtonHoverEffects5;