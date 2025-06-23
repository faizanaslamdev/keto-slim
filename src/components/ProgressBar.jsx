export function ProgressBar({ currentStep, totalSteps }) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index <= currentStep
                ? "bg-teal-500 shadow-lg shadow-teal-200"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <div className="text-center text-sm text-gray-600">
        Step {currentStep + 1} of {totalSteps}
      </div>
    </div>
  );
}
