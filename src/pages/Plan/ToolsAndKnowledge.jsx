import Paragraph from "../../components/Paragraph";

const ToolsAndKnowledge = () => (
  <div className="grid grid-cols-2 px-2 py-4 my-3 items-center">
    <ul className="list-none mt-2 space-y-2">
      <ToolItem img="./keto-food.webp" label="Daily Custom Meal Plan" />
      <ToolItem img="./cart.webp" label="Done-For-You Grocery Lists" />
      <ToolItem
        img="./heart-pot.webp"
        label="Overwhelm-Free Delicious Recipes"
      />
      <ToolItem img="./education-icon.webp" label="Weekly Tips & Guidance" />
    </ul>
    <img src="./iphone-mockup-r.webp" alt="Mock" />
  </div>
);

const ToolItem = ({ img, label }) => (
  <li className="flex items-center">
    <img src={img} alt="img" className="h-[32px]" />
    <Paragraph.sm.Highlight>{label}</Paragraph.sm.Highlight>
  </li>
);

export default ToolsAndKnowledge;
