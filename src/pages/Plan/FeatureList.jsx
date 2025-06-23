import { CircleCheck } from "lucide-react";
import Paragraph from "../../components/Paragraph";

const FeatureList = () => (
  <ul className="list-none mt-2">
    {[
      "Improving Digestion",
      "Toning Muscles",
      "Mental Wellness Reset",
      "Physical Endurance Boost",
    ].map((item) => (
      <li key={item} className="flex items-center mb-2">
        <CircleCheck className="text-heading-highlight mr-2 w-[20px] h-[20px]" />
        <Paragraph.sm>{item}</Paragraph.sm>
      </li>
    ))}
  </ul>
);
export default FeatureList;
