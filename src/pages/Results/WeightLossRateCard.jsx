import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

const WeightLossRateCard = ({ weightLossRate }) => {
  return (
    <Card>
      <Heading.H1 className="text-center">📉</Heading.H1>
      <Heading.H1 className="text-center">
        You Could Be Losing
        <br />
        <Heading.H1.Highlight>{weightLossRate} lbs / Week</Heading.H1.Highlight>
      </Heading.H1>

      <Heading.H2 className="text-center mt-2">
        With the Right Fuel Source
      </Heading.H2>

      <img src="./weight-loss.png" alt="Weight Loss" className="mx-auto mt-4" />
      <div className="mb-5 ">
        <Paragraph.sm className="mb-2">
          This is your potential, what your body could lose if it’s in
          fat-burning mode. But that depends on getting your metabolism working
          with you, not against you.
        </Paragraph.sm>
        <Paragraph.sm>
          Low energy, stubborn cravings, and slow progress usually mean your
          body is still burning sugar instead of fat — and that keeps weight
          loss stuck.
        </Paragraph.sm>
      </div>

      <Paragraph.sm>
        <Paragraph.sm.Highlight>
          With your numbers, results could show up even faster than expected,
          but only if your metabolism is dialed in and you’re burning fat, not
          sugar.
        </Paragraph.sm.Highlight>
      </Paragraph.sm>
    </Card>
  );
};

export default WeightLossRateCard;
