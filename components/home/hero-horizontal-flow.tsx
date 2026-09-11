import { Hero } from "@/components/home/hero";
import { AboutBrief } from "@/components/home/about-brief";

export function HeroHorizontalFlow() {
  return (
    <div>
      <Hero />
      <div className="hairline-rule-multi w-full" aria-hidden="true" />
      <AboutBrief />
    </div>
  );
}
