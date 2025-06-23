import { ArrowRight } from "lucide-react";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import CountdownTimer from "../../components/CountDownTimer";
import PricingOptions from "../../components/PricingOptions";
import ImageComparisonSection from "./ImageComparisonSection";
import ProgressComparisonSection from "./ProgressComparisonSection";
import FeatureList from "./FeatureList";
import ToolsAndKnowledge from "./ToolsAndKnowledge";
import TrustedSources from "./TrustedSources";
import MoneyBackGuarantee from "./MoneyBackGuarantee";
import { useEffect, useRef, useState } from "react";

const Plan = () => {
  const pricingRef = useRef(null);
  const [showSticky, setShowSticky] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => {
      if (pricingRef.current) {
        observer.unobserve(pricingRef.current);
      }
    };
  }, []);
  return (
    <>
      <Card>
        <Heading.H1 className="text-center">🎯</Heading.H1>
        <Heading.H1 className="text-center">
          Your Personalized KetoSlim Plan Is Ready
        </Heading.H1>

        <ImageComparisonSection />
        <ProgressComparisonSection />

        <Paragraph.sm className="mb-2 font-[600]">
          Your program will also work on:
        </Paragraph.sm>

        <FeatureList />

        <Paragraph.sm className="mb-2 font-[600]">
          Get all the right tools & knowledge.
        </Paragraph.sm>
        <ToolsAndKnowledge />

        <TrustedSources />

        <Paragraph.sm className="text-center mt-4 mb-3">
          3 Month Custom Keto Plan
        </Paragraph.sm>
        <CountdownTimer />
        <div ref={pricingRef}>
          <PricingOptions />
        </div>
      </Card>
      {showSticky && (
        <div className="fixed bottom-0 left-0 w-full bg-transparent p-3 shadow-md z-50">
          <div className="max-w-xl mx-auto px-10 py-3">
            <button
              onClick={() =>
                pricingRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-3 w-full bg-label text-white rounded flex items-center justify-center relative"
            >
              Claim My Plan
              <ArrowRight className="absolute right-4" />
            </button>
          </div>
        </div>
      )}

      <MoneyBackGuarantee />
    </>
  );
};

export default Plan;
