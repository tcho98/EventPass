"use client";

import React, { ChangeEvent } from "react";

type InputProps = {
  label?: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
}: InputProps) => {
  return (
    <div className={`w-full max-w-xs flex flex-col ${className}`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border-2 w-full rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
      />
    </div>
  );
};
export default Input;
