import Heading from "../../components/Heading";
import ImageRadioGroup from "../../components/ImageRadioSelector";
import Card from "../../components/Card";

const genderGroup = [
  { id: "male", label: "Male", img: "./male.jpg" },
  { id: "female", label: "Female", img: "./female.jpg" },
];

const GenderSelectorPage = ({ setSelectedGender }) => {
  return (
    <Card>
      <Heading.H1 className="text-center">👤</Heading.H1>
      <Heading.H2 className="text-center">What's your gender?</Heading.H2>
      <div className="mt-4">
        <ImageRadioGroup
          options={genderGroup}
          name="age-group"
          defaultValue="30-39"
          onChange={setSelectedGender}
        />
      </div>
    </Card>
  );
};

export default GenderSelectorPage;
