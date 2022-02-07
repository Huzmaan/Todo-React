import React from 'react';

const Button = ({value,button,onClick}) => {
  return (
      <button className={`btn${button}`} onClick={onClick}>{value}</button>
  );
};

export default Button;
