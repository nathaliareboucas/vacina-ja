import React, {useCallback} from 'react';

import {Container} from './styles';
import {cpfMask, dateMask} from './masks';

const InputMask = ({mask, ...props}) => {

  const handleKeyUp = useCallback((event) => {
    if (mask === 'cpf') cpfMask(event);
    if (mask === 'date') dateMask(event);    
  }, [mask]);

  return(
    <Container {...props} onKeyUp={handleKeyUp} />
  );
};


export default InputMask;