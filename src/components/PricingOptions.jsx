import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Paragraph from "./Paragraph";

const PricingOptions = () => {
  const [selected, setSelected] = useState("one-time");

  return (
    <div className="flex flex-col gap-4 py-4 max-w-md mx-auto">
      <div
        onClick={() => setSelected("installments")}
        className={`border rounded-xl p-4 shadow-md cursor-pointer transition-all ${
          selected === "installments"
            ? "border-cta bg-blue-50"
            : "border-label-empty bg-white"
        } flex justify-between items-center`}
      >
        <div>
          <h3 className="text-lg font-bold">3 PAYMENTS OF $29</h3>
          <p className="text-sm text-gray-600">
            Just $29 today. Split the rest over 2 easy payments.
          </p>
        </div>
        <div className="ml-4">
          <div
            className={`h-5 w-5 rounded-full border-2 ${
              selected === "installments"
                ? "bg-cta border-cta"
                : "border-label-empt"
            }`}
          ></div>
        </div>
      </div>

      <div
        onClick={() => setSelected("one-time")}
        className={`relative border-2 rounded-xl p-4 shadow-md cursor-pointer transition-all ${
          selected === "one-time"
            ? "border-cta bg-green-50"
            : "border-label-empty bg-white"
        }`}
      >
        <div className="flex justify-between items-start relative">
          <div>
            <div className="bg-red-500 text-white px-2 py-0.5 text-xs rounded-md mb-2 inline-block">
              DISCOUNT
            </div>
            <h3 className="text-base font-medium">
              1 Payment of $67. Pay in full today and save $20 instantly.
            </h3>
          </div>
          <span className="bg-cta text-heading absolute right-[-18px] top-[-18px] text-xs px-2 py-1 rounded-full font-semibold">
            23% OFF
          </span>
          <div className="flex items-center gap-1 absolute bottom-0 right-0">
            {selected === "one-time" && (
              <CheckCircle className="text-cta w-[20px] h-[20px]" />
            )}
          </div>
        </div>
        <div className="mt-3 text-sm text-cta font-semibold text-center">
          MOST POPULAR
        </div>
      </div>

      {/* Guarantee */}
      <div className="flex items-center gap-2 mt-2">
        <div className="h-4 w-4 bg-cta text-white flex items-center justify-center rounded-sm">
          ✓
        </div>
        <p className="text-sm text-gray-700">
          Risk-Free: Backed by 60-Day Money-Back Guarantee
        </p>
      </div>

      {/* Continue Button */}
      <button className="px-4 py-2 flex justify-center items-center relative w-full bg-label text-white rounded">
        Continue <ArrowRight className="absolute right-3 bottom-2.5" />
      </button>

      <Paragraph.sm className="underline text-center text-label-empty">
        No Thanks, I don’t want my plan.
      </Paragraph.sm>
    </div>
  );
};

export default PricingOptions;
