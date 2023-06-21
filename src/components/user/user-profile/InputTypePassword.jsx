import { IconEye, IconEyeClosed } from '@tabler/icons-react';
import React, { useState } from 'react';

const PasswordInput = ({ error, errorMessage, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="input-password-container position-relative">
        <input type={showPassword ? 'text' : 'password'} {...props} />
        <div className="inputEndAdornment" onClick={togglePasswordVisibility}>
          {showPassword ? <IconEye size={18} /> : <IconEyeClosed size={18} />}
        </div>
      </div>
      {error && (
        <span
          className="text-danger"
          style={{
            fontSize: '11px'
          }}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default PasswordInput;

