import React from 'react';
import { CircleX, CircleCheck, Eye, EyeOff } from 'lucide-react';

const InputField = ({
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  touched,
  icon: Icon,
  disabled = false,
  showPassword,
  togglePasswordVisibility,
}) => {
  return (
    <div>
      <label htmlFor={id} className="text-slate-700 dark:text-slate-100 block mb-1">
        {placeholder}
      </label>
      <div className="relative text-white-dark">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className="w-full rounded-md border border-slate-400 bg-white px-4 py-2 text-sm font-normal text-slate-700 !outline-none focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-slate-800 dark:text-slate-50 dark:focus:border-primary ps-10 placeholder:text-slate-700 dark:placeholder:text-slate-400"
        />
        {Icon && (
          <span className="absolute text-slate-500 dark:text-slate-400 start-4 top-1/2 -translate-y-1/2">
            <Icon size={16} />
          </span>
        )}
        {id === 'password' && (
          <button
            type="button"
            className="absolute end-4 top-1/2 -translate-y-1/2"
            onClick={togglePasswordVisibility}
            disabled={disabled}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
        {touched && (
          <span className="absolute end-4 top-1/2 -translate-y-1/2">
            {error ? <CircleX size={20} color="red" /> : <CircleCheck size={20} color="green" />}
          </span>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;