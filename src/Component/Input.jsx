import React from 'react';

const Input = ({type,placeholder,onChange,onKeyPress}) => {
  return <div>
      <input type={type} placeholder={placeholder} onChange={onChange}onKeyPress={onKeyPress}/>
  </div>;
};

export default Input;
