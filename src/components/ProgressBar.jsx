const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-3 mb-4">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index <= currentStep
                ? "bg-label shadow-lg shadow-label-empty"
                : "bg-label-empty"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
