import GreatIdeaBulb from "@/app/Icons/GreatIdeaBulb";

export default function FooterLogoLine({ color }: { color: string }) {
  return (
    <div className="footerLogoLine">
      <div className="footerLogo logoColor">
        <GreatIdeaBulb />
      </div>
    </div>
  );
}
