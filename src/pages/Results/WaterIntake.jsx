import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

const WaterIntake = () => {
  return (
    <Card>
      <Heading.H1 className="text-center">💧</Heading.H1>
      <Heading.H1 className="text-center">
        Your Body Needs <Heading.H1.Highlight>8-9 Cups</Heading.H1.Highlight> of
        Water Daily
      </Heading.H1>

      <Heading.H2 className="text-center mt-2">
        Here's Why That Matters
      </Heading.H2>

      <img
        src="./drinking-water.png"
        alt="Water Intake"
        className="mx-auto mt-4"
      />
      <div className="mb-5 ">
        <Paragraph.sm className="mb-2">
          Hydration is a fat-burning multiplier. Without enough water, your body
          holds onto toxins, slows digestion, and burns fat less efficiently.
        </Paragraph.sm>
        <Paragraph.sm>
          Even mild dehydration can feel like fatigue, hunger, or sugar
          cravings. You're not lazy — you're likely underhydrated.
        </Paragraph.sm>
      </div>

      <Paragraph.sm>
        <Paragraph.sm.Highlight>
          Drinking over 6 glasses a day? Nice work — your hydration game is
          strong. Keep it up to support optimal fat loss, steady energy, and
          fewer cravings.
        </Paragraph.sm.Highlight>
      </Paragraph.sm>
    </Card>
  );
};

export default WaterIntake;
