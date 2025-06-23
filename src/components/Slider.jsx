import { useRef } from "react";

export function Slider({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) {
  const sliderRef = useRef(null);

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

      onValueChange([Math.max(min, Math.min(max, steppedValue))]);
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

  const percentage = ((value[0] - min) / (max - min)) * 100;

  return (
    <div className={`relative ${className}`}>
      <div
        ref={sliderRef}
        className="relative h-2 bg-gray-200 rounded-full cursor-pointer"
        onMouseDown={handleMouseDown}
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
}
