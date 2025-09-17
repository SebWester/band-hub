import React from "react";
import "../styles/login.css";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, name, placeholder, value, onChange }: InputProps) {
  return (
    <input
      className="input"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
