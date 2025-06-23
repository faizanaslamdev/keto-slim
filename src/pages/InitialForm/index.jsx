import { useCallback, useState } from "react";
import GenderSelectorPage from "./GenderSelectorPage";
import BodyFatPage from "./BodyFatPage";
import HealthGoalsPage from "./HealthGoalsPage";
import LifeStylePage from "./LifeStylePage";
import Card from "../../components/Card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const steps = ["Gender", "BodyFat", "Goals", "Lifestyle"];

const InitialForm = ({ setSteps, formData, setFormData }) => {
  const [stepForm, setStepForm] = useState(0);
  const [errors, setErrors] = useState({});

  const validateStep = (step) => {
    const newErrors = {};
    switch (step) {
      case 0:
        if (!formData.gender) newErrors.gender = "Please select your gender.";
        break;
      case 1:
        if (!formData.bodyFatPercent)
          newErrors.bodyFatPercent = "Select body fat %.";
        if (!formData.BMI) newErrors.BMI = "Enter BMI.";
        break;
      case 2:
        if (!formData.calorieTarget)
          newErrors.calorieTarget = "Enter calorie target.";
        if (!formData.weightLossRate)
          newErrors.weightLossRate = "Enter weight loss rate.";
        break;
      case 3:
        if (!formData.waterIntake)
          newErrors.waterIntake = "Select water intake.";
        if (!formData.seeResultsDays)
          newErrors.seeResultsDays = "Enter result days.";
        break;
      default:
        break;
    }
    return Object.keys(newErrors).length ? newErrors : null;
  };

  const handleNext = useCallback(() => {
    const validationError = validateStep(stepForm);
    if (validationError) {
      setErrors(validationError);
      return;
    }
    setErrors({});
    if (stepForm === steps.length - 1) {
      setSteps((prev) => prev + 1);
    }
    setStepForm((prev) => prev + 1);
  }, [stepForm, formData]);

  const handlePrevious = useCallback(() => {
    setErrors({});
    setStepForm((prev) => Math.max(0, prev - 1));
  }, []);

  const renderCurrentStep = () => {
    switch (stepForm) {
      case 0:
        return (
          <GenderSelectorPage
            setSelectedGender={(value) => {
              setFormData((prev) => ({ ...prev, gender: value }));
              setErrors({});
            }}
            error={errors.gender}
          />
        );
      case 1:
        return (
          <BodyFatPage
            selectedFatValue={formData.bodyFatPercent}
            setSelectedFatValue={(value) => {
              setFormData((prev) => ({ ...prev, bodyFatPercent: value }));
              setErrors((prev) => ({ ...prev, bodyFatPercent: "" }));
            }}
            selectBMIValue={formData.BMI}
            SetSelectedBMIValue={(value) => {
              setFormData((prev) => ({ ...prev, BMI: value }));
              setErrors((prev) => ({ ...prev, BMI: "" }));
            }}
            errors={errors}
          />
        );
      case 2:
        return (
          <HealthGoalsPage
            selectedCaloriesValue={formData.calorieTarget}
            setSelectedCaloriesValue={(value) => {
              setFormData((prev) => ({ ...prev, calorieTarget: value }));
              setErrors((prev) => ({ ...prev, calorieTarget: "" }));
            }}
            selectedWeightLogssGoal={formData.weightLossRate}
            setSelectedWeightLossGoal={(value) => {
              setFormData((prev) => ({ ...prev, weightLossRate: value }));
              setErrors((prev) => ({ ...prev, weightLossRate: "" }));
            }}
            errors={errors}
          />
        );
      case 3:
        return (
          <LifeStylePage
            selectedWaterIntake={formData.waterIntake}
            setSelectedWaterIntake={(value) => {
              setFormData((prev) => ({ ...prev, waterIntake: value }));
              setErrors((prev) => ({ ...prev, waterIntake: "" }));
            }}
            selectedResultDays={formData.seeResultsDays}
            setSelectedResultDays={(value) => {
              setFormData((prev) => ({ ...prev, seeResultsDays: value }));
              setErrors((prev) => ({ ...prev, seeResultsDays: "" }));
            }}
            errors={errors}
          />
        );
      default:
        return <div>All steps completed</div>;
    }
  };

  return (
    <>
      <Card>{renderCurrentStep()}</Card>

      <div className="grid grid-cols-2 gap-5 mt-3 px-3">
        <button
          className="px-4 py-2 flex justify-center items-center relative w-full bg-white border-2 border-label text-label rounded disabled:opacity-50"
          onClick={handlePrevious}
          disabled={stepForm === 0}
        >
          <ArrowLeft className="absolute left-3" />
          Previous
        </button>

        {stepForm < steps.length && (
          <button
            className="px-4 py-2 flex justify-center items-center relative w-full bg-label text-white rounded disabled:opacity-50"
            onClick={handleNext}
          >
            Next <ArrowRight className="absolute right-3 bottom-2.5" />
          </button>
        )}
      </div>
    </>
  );
};

export default InitialForm;
