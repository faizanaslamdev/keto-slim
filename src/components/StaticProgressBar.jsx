import Paragraph from "./Paragraph";

export const StaticProgressBar = ({ label, percentage }) => {
  return (
    <div className="space-y-1">
      <Paragraph.sm>{label}</Paragraph.sm>
      <div className="h-2 rounded-full bg-label-empty">
        <div
          className="rounded-full mt-1 bg-paragraph-highlight h-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
