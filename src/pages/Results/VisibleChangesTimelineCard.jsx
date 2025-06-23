import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

const VisibleChangesTimelineCard = ({ seeResultsDays }) => {
  return (
    <Card>
      <Heading.H1 className="text-center">⏳</Heading.H1>
      <Heading.H1 className="text-center">
        You Could See Results in as Little as{" "}
        <Heading.H1.Highlight>{seeResultsDays}</Heading.H1.Highlight> Days
      </Heading.H1>

      <img src="./timeline.png" alt="timeline" className="mx-auto mt-4" />
      <div className="mb-5 ">
        <Paragraph.sm className="mb-2">
          Visible change doesn’t take forever — when your metabolism shifts,
          your body can start dropping bloat, water weight, and fat surprisingly
          fast
        </Paragraph.sm>
        <Paragraph.sm>
          It’s not about how long you try — it’s about whether your body’s
          actually set up to change. The wrong plan wastes months.
        </Paragraph.sm>
      </div>

      <Paragraph.sm>
        <Paragraph.sm.Highlight>
          You’re already aware — and that’s step one. Now imagine pairing that
          awareness with a plan that shows results in the mirror by day 10.
        </Paragraph.sm.Highlight>
      </Paragraph.sm>
    </Card>
  );
};

export default VisibleChangesTimelineCard;
