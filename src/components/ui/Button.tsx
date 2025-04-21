// src/components/ui/Button.tsx
import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  children,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full max-w-xs py-3 bg-blue-600 text-gray-800 rounded-lg bg-gradient-to-r from-red-500 to-yellow-400 
             opacity-70 hover:opacity-100 
             outline outline-2 outline-offset-2 outline-transparent 
             hover:outline-red-500 transition duration-300"
    >
      {children}
    </button>
  );
}
