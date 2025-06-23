import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

const MoneyBackGuarantee = () => (
  <div className="mt-4">
    <div className="flex justify-between items-center">
      <Heading.H1>Money Back Guarantee</Heading.H1>
      <img
        src="./60-day-guarantee.webp"
        alt="guarantee"
        className="h-[104px]"
      />
    </div>
    <Paragraph className="my-3">
      We are confident with our service quality and its results. So, if you are
      ready to reach your goals, it’s a risk-free offer.
    </Paragraph>
    <Paragraph className="my-3">
      We guarantee you’ll see visible results or you’ll receive a full refund
      within 60 days after your purchase.
    </Paragraph>
    <Paragraph.sm className="my-3">
      By continuing, you represent that you are over 18 years of age and agree
      if for whatever reason you’re unhappy with your plan to contact customer
      support for a refund.
    </Paragraph.sm>
    <Paragraph.sm className="my-3">
      You will only be charged $67 today for your first quarter (details above)
    </Paragraph.sm>
    <Paragraph.sm className="my-3">
      Your introductory period will last until Aug 27, 2025. You may cancel at
      any time before Aug 27, 2025, and you will not be charged.
    </Paragraph.sm>
    <Paragraph.sm className="my-3">
      If you don’t cancel, KetoSlim will automatically continue your membership
      at the end of your introductory period and charge the membership fee of
      $67 quarterly until you cancel.
    </Paragraph.sm>
    <Paragraph.sm className="my-3">
      Your subscription will be bound by our{" "}
      <Paragraph.sm.Highlight>Terms and Privacy Policy</Paragraph.sm.Highlight>.
    </Paragraph.sm>
    <Paragraph.sm className="my-3">
      If you would like a refund for any reason call{" "}
      <Paragraph.sm.Highlight>1-800-695-5045</Paragraph.sm.Highlight> or email{" "}
      <Paragraph.sm.Highlight>support@myketoslim.com</Paragraph.sm.Highlight>.
    </Paragraph.sm>
  </div>
);

export default MoneyBackGuarantee;
