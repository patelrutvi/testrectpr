import React from 'react';
import { CustomInput, styleInput } from './Input.style';

function Input({children,type,placeholder}) {
    
    return (
      <CustomInput placeholder={placeholder}>
        {children}
      </CustomInput>
    );
}

export default Input;