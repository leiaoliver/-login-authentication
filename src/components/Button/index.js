import React from 'react';

import './styles';

const Button = ({Text, onClick, Type = 'button'}) => {
  return (
    <Button type={Type} onClick={onClick}>
      {Text}
    </Button>
  );
};

export default Button;
