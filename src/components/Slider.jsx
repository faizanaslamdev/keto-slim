import { useRef } from "react";

export const Slider = ({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const sliderRef = useRef(null);

  const getDecimalPlaces = (num) => {
    if (Math.floor(num) === num) return 0;
    return num.toString().split(".")[1]?.length || 0;
  };

  const handleMouseDown = (e) => {
    const updateValue = (clientX) => {
      if (!sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = Math.max(
        0,
        Math.min(1, (clientX - rect.left) / rect.width)
      );
      const newValue = min + percentage * (max - min);
      const steppedValue = Math.round(newValue / step) * step;

      const decimalPlaces = getDecimalPlaces(step);
      const finalValue = parseFloat(steppedValue.toFixed(decimalPlaces));

      onValueChange([Math.max(min, Math.min(max, finalValue))]);
    };

    updateValue(e.clientX);

    const handleMouseMove = (e) => updateValue(e.clientX);
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    if (!touch) return;

    const updateValue = (clientX) => {
      if (!sliderRef.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = Math.max(
        0,
        Math.min(1, (clientX - rect.left) / rect.width)
      );
      const newValue = min + percentage * (max - min);
      const steppedValue = Math.round(newValue / step) * step;
      const decimalPlaces = getDecimalPlaces(step);
      const finalValue = parseFloat(steppedValue.toFixed(decimalPlaces));
      onValueChange([Math.max(min, Math.min(max, finalValue))]);
    };

    updateValue(touch.clientX);

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) updateValue(e.touches[0].clientX);
    };
    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  const percentage = ((value[0] - min) / (max - min)) * 100;

  return (
    <div className={`relative ${className}`}>
      <div
        ref={sliderRef}
        className="relative h-2 bg-gray-200 rounded-full cursor-pointer"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div
          className="absolute h-2 bg-gradient-to-r from-label-empty to-label rounded-full"
          style={{ width: `${percentage}%` }}
        />
        <div
          className="absolute w-5 h-5 bg-white border-2 to-label rounded-full shadow-lg transform -translate-y-1.5 cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
          style={{ left: `calc(${percentage}% - 10px)` }}
        />
      </div>
    </div>
  );
};
