import { useEffect, useState } from "react";
import Paragraph from "./Paragraph";
import { Clock } from "lucide-react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return (
    <div className="flex justify-between py-2 px-4 bg-heading-highlight rounded-md">
      <Paragraph.sm className="text-white">Discount expires in:</Paragraph.sm>
      <Paragraph.sm className="font-bold text-white flex items-center gap-2">
        {formattedTime} <Clock className="text-white font-bold" />
      </Paragraph.sm>
    </div>
  );
}
