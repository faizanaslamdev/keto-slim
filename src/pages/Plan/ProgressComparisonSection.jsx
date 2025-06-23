import Paragraph from "../../components/Paragraph";
import { StaticProgressBar } from "../../components/StaticProgressBar";

const ProgressComparisonSection = () => (
  <div className="grid grid-cols-2 px-2 py-4 pb-3 mt-2">
    <div className="border-r-2 border-label-empty pr-4">
      <ProgressStats fat="20-25%" energy={30} health={20} metabolism={40} />
    </div>
    <div className="border-label-empty pl-4">
      <ProgressStats fat="10-15%" energy={70} health={100} metabolism={100} />
    </div>
  </div>
);

const ProgressStats = ({ fat, energy, health, metabolism }) => (
  <>
    <div className="mb-3">
      <Paragraph.sm>Body Fat</Paragraph.sm>
      <Paragraph.sm.Highlight>{fat}</Paragraph.sm.Highlight>
    </div>
    <div className="mb-3">
      <StaticProgressBar label={"Energy Levels"} percentage={energy} />
    </div>
    <div className="mb-3">
      <StaticProgressBar label={"Physical Health"} percentage={health} />
    </div>
    <div className="mb-3">
      <StaticProgressBar label={"Metabolism Speed"} percentage={metabolism} />
    </div>
  </>
);

export default ProgressComparisonSection;
