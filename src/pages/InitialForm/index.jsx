import { useCallback, useState } from "react";
import GenderSelectorPage from "./GenderSelectorPage";
import Card from "../../components/Card";
import BodyFatPage from "./BodyFatPage";

const InitialForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    bodyFatPercent: "",
    BMI: "",
    calorieTarget: "",
    waterIntake: "",
    weightLossRate: "",
    seeResultsDays: "",
  });

  const renderSelectors = useCallback((formData) => {
    if (!formData.gender.length)
      return (
        <GenderSelectorPage
          setSelectedGender={(value) => {
            setFormData((prev) => ({ ...prev, gender: value }));
          }}
        />
      );
    if (formData.gender.length)
      return (
        <BodyFatPage
          selectedValue={formData.bodyFatPercent}
          setSelectedValue={(value) => {
            setFormData((prev) => ({ ...prev, bodyFatPercent: value }));
          }}
        />
      );
    return <></>;
  }, []);

  return <Card>{renderSelectors(formData)}</Card>;
};

export default InitialForm;
