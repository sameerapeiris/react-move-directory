// TextArea.tsx
import React, { TextareaHTMLAttributes } from 'react';

interface ThemeTextAreaProps extends  TextareaHTMLAttributes<HTMLTextAreaElement> {

}

const ThemeTextArea: React.FC<ThemeTextAreaProps> = ({ ...props }) => {
  return (
    <textarea className='form-control' {...props} />
  );
};

export default ThemeTextArea;
