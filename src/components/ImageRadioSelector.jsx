import { useState } from "react";

export const ImageRadioGroup = ({
  options,
  name,
  defaultValue,
  onChange,
  className = "",
}) => {
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || options[0]?.id || ""
  );

  const handleChange = (value) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ${className}`}
    >
      {options.map((option) => (
        <div key={option.id} className="relative">
          <input
            type="radio"
            id={option.id}
            name={name}
            value={option.id}
            checked={selectedValue === option.id}
            onChange={(e) => handleChange(e.target.value)}
            className="sr-only"
          />
          <label
            htmlFor={option.id}
            className={`block cursor-pointer transition-all duration-200 rounded-lg ${
              selectedValue === option.id
                ? "transform scale-105"
                : "hover:ring-0 hover:transform hover:scale-102"
            }`}
          >
            <div className="relative rounded-lg overflow-hidden aspect-[1/1] group">
              <div className="absolute inset-0">
                {option.img ? (
                  <img
                    src={option.img}
                    alt={`${option.label}`}
                    className="object-"
                  />
                ) : null}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg font-semibold text-center drop-shadow-lg">
                  {option.label}
                </h3>
              </div>

              <div
                className={`absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 ${
                  selectedValue === option.id ? "opacity-100" : ""
                } transition-opacity duration-200`}
              />
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ImageRadioGroup;
