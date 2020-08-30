import React from 'react';
import { IButton } from './type';

import './style.css';

function Button({ callback, text }: IButton): React.ReactElement {
  return (
    <button onClick={callback} type="button" className="btn">
      {text}
    </button>
  );
}
export default Button;
