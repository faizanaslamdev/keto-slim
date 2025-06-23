import { useCallback, useState } from "react";
import Header from "./components/Header";
import InitialForm from "./pages/InitialForm";
import ProgressBar from "./components/ProgressBar";
import BodyFatInsightCard from "./pages/Results/BodyFatInsightCard";
import BMIInsightCard from "./pages/Results/BMIInsightCard";
import RecommendedCalories from "./pages/Results/RecommendedCalories";
import WaterIntake from "./pages/Results/WaterIntake";
import WeightLossRateCard from "./pages/Results/WeightLossRateCard";
import VisibleChangesTimelineCard from "./pages/Results/VisibleChangesTimelineCard";
import Plan from "./pages/Plan";
import { ArrowLeft, ArrowRight } from "lucide-react";

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    gender: "",
    bodyFatPercent: 5,
    BMI: 15.0,
    calorieTarget: "",
    waterIntake: "",
    weightLossRate: "",
    seeResultsDays: "",
  });

  const handleNext = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handlePrevious = useCallback(() => {
    setStep((prev) => Math.max(0, prev - 1));
  }, []);

  const stepsComponents = [
    <InitialForm
      formData={formData}
      setFormData={setFormData}
      setSteps={setStep}
    />,
    <BodyFatInsightCard
      bodyFatPercent={formData.bodyFatPercent}
      gender={formData.gender}
    />,
    <BMIInsightCard BMI={formData.BMI} />,
    <RecommendedCalories calorieTarget={formData.calorieTarget} />,
    <WaterIntake />,
    <WeightLossRateCard weightLossRate={formData.weightLossRate} />,
    <VisibleChangesTimelineCard seeResultsDays={formData.seeResultsDays} />,
    <Plan />,
  ];

  const isInitial = step === 0;
  const isPlan = step === 7;

  return (
    <div className="mx-auto container max-w-lg p-4">
      <Header />

      {!isInitial && !isPlan && (
        <div className="grid grid-cols-2 gap-5 mt-3 px-3">
          <p className="text-label">Your Results</p>
          <div className="col-start-2">
            <ProgressBar currentStep={step} totalSteps={7} />
          </div>
        </div>
      )}

      {stepsComponents[step]}

      {!isInitial && !isPlan && (
        <div className="grid grid-cols-2 gap-5 mt-3 px-3">
          <button
            className="px-4 py-2 flex justify-center items-center relative w-full bg-white border-2 border-label text-label rounded disabled:opacity-50"
            onClick={handlePrevious}
            disabled={step === 0}
          >
            <ArrowLeft className="absolute left-3" />
            Previous
          </button>

          <button
            className="px-4 py-2 flex justify-center items-center relative w-full bg-label text-white rounded disabled:opacity-50"
            onClick={handleNext}
            disabled={step >= stepsComponents.length - 1}
          >
            Next <ArrowRight className="absolute right-3 bottom-2.5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
