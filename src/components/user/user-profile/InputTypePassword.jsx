import { IconEye, IconEyeClosed } from '@tabler/icons-react';
import React, { useState } from 'react';

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-password-container position-relative">
      <input type={showPassword ? 'text' : 'password'} {...props} />
      <div className="inputEndAdornment" onClick={togglePasswordVisibility}>
        {showPassword ? <IconEye size={18} /> : <IconEyeClosed size={18} />}
      </div>
    </div>
  );
};

export default PasswordInput;

