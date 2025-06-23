import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

export const Select = ({ value, onValueChange, children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            value,
            onValueChange,
            isOpen,
            setIsOpen,
          });
        }
        return child;
      })}
    </div>
  );
};

export const SelectTrigger = ({
  children,
  className = "",
  isOpen,
  setIsOpen,
}) => {
  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent flex justify-between items-center  ${className}`}
    >
      {children}
      {isOpen ? <ChevronUp /> : <ChevronDown />}
    </button>
  );
};

export const SelectValue = ({ placeholder, value }) => {
  return <span>{value || placeholder}</span>;
};

export const SelectContent = ({
  children,
  isOpen,
  setIsOpen,
  onValueChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            onValueChange,
            setIsOpen,
          });
        }
        return child;
      })}
    </div>
  );
};

export const SelectItem = ({ value, children, onValueChange, setIsOpen }) => {
  return (
    <button
      type="button"
      onClick={() => {
        onValueChange?.(value);
        setIsOpen?.(false);
      }}
      className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
    >
      {children}
    </button>
  );
};
