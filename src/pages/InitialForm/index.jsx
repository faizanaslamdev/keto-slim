import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useState } from "react";
import BodyFatPage from "./BodyFatPage";
import GenderSelectorPage from "./GenderSelectorPage";
import HealthGoalsPage from "./HealthGoalsPage";
import LifeStylePage from "./LifeStylePage";

const steps = ["Gender", "BodyFat", "Goals", "Lifestyle"];

const InitialForm = ({ setSteps, formData, setFormData }) => {
  const [stepForm, setStepForm] = useState(0);

  const isStepValid = useCallback(
    (step) => {
      switch (step) {
        case 0:
          return !!formData.gender;
        case 1:
          return !!(formData.bodyFatPercent && formData.BMI);
        case 2:
          return !!(formData.calorieTarget && formData.weightLossRate);
        case 3:
          return !!(formData.waterIntake && formData.seeResultsDays);
        default:
          return true;
      }
    },
    [formData]
  );

  const handleNext = useCallback(() => {
    if (stepForm === steps.length - 1) {
      setSteps((prev) => prev + 1);
    }
    setStepForm((prev) => prev + 1);
  }, [stepForm, setSteps]);

  const handlePrevious = useCallback(() => {
    setStepForm((prev) => Math.max(0, prev - 1));
  }, []);

  const renderCurrentStep = () => {
    switch (stepForm) {
      case 0:
        return (
          <GenderSelectorPage
            setSelectedGender={(value) => {
              setFormData((prev) => ({ ...prev, gender: value }));
              setStepForm((prev) => prev + 1);
            }}
          />
        );
      case 1:
        return (
          <BodyFatPage
            selectedFatValue={formData.bodyFatPercent}
            setSelectedFatValue={(value) => {
              setFormData((prev) => ({ ...prev, bodyFatPercent: value }));
            }}
            selectBMIValue={formData.BMI}
            setSelectedBMIValue={(value) => {
              setFormData((prev) => ({ ...prev, BMI: value }));
            }}
          />
        );
      case 2:
        return (
          <HealthGoalsPage
            selectedCaloriesValue={formData.calorieTarget}
            setSelectedCaloriesValue={(value) => {
              setFormData((prev) => ({ ...prev, calorieTarget: value }));
            }}
            selectedWeightLogssGoal={formData.weightLossRate}
            setSelectedWeightLossGoal={(value) => {
              setFormData((prev) => ({ ...prev, weightLossRate: value }));
            }}
          />
        );
      case 3:
        return (
          <LifeStylePage
            selectedWaterIntake={formData.waterIntake}
            setSelectedWaterIntake={(value) => {
              setFormData((prev) => ({ ...prev, waterIntake: value }));
            }}
            selectedResultDays={formData.seeResultsDays}
            setSelectedResultDays={(value) => {
              setFormData((prev) => ({ ...prev, seeResultsDays: value }));
            }}
          />
        );
      default:
        return <div>All steps completed</div>;
    }
  };

  return (
    <>
      {renderCurrentStep()}
      {stepForm === 0 ? null : (
        <div className="grid grid-cols-2 gap-5 mt-3 px-3">
          <button
            className="px-4 py-2 flex justify-center items-center relative w-full bg-white border-2 border-label text-label rounded-md disabled:opacity-50"
            onClick={handlePrevious}
            disabled={stepForm === 0}
          >
            <ArrowLeft className="absolute left-3" />
            Previous
          </button>

          {stepForm < steps.length && (
            <button
              className="px-4 py-2 flex justify-center items-center relative w-full bg-label text-white rounded-md disabled:opacity-50"
              onClick={handleNext}
              disabled={!isStepValid(stepForm)}
            >
              Next <ArrowRight className="absolute right-3 bottom-2.5" />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default InitialForm;
