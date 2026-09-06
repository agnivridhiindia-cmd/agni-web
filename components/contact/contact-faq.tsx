import * as React from "react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const consultationFaqs = [
  {
    question: "What is the turnaround time for initial inquiry review?",
    answer:
      "Our advisory desk reviews borrowing capacity and regulatory scope within 24 business hours, assigning a practice principal to coordinate your diagnostic call.",
  },
  {
    question: "Is our financial and project documentation confidential?",
    answer:
      "Yes, unconditionally. All enterprise discussions, Detailed Project Reports (DPRs), and banking financials are handled under strict non-disclosure governance.",
  },
  {
    question: "Do you guarantee loan sanctions or sovereign subsidies?",
    answer:
      "In compliance with institutional underwriting governance, credit sanctions and subsidy releases are determined by member lending institutions (MLIs) and government sanctioning authorities. We prepare institutional-grade DPRs, CMA data, and ensure full scheme compliance to maximize approval probability.",
  },
  {
    question: "Which geographic regions across India do you serve?",
    answer:
      "Headquartered in Noida, Uttar Pradesh, Agnivridhi advises enterprises across Delhi NCR, Uttar Pradesh, Haryana, Rajasthan, and manufacturing clusters pan-India.",
  },
];

export function ContactFaq() {
  return (
    <section aria-labelledby="faq-heading" className="space-y-4 pt-4">
      <div className="flex items-center gap-2">
        <HelpCircle className="w-4 h-4 text-[#C79A4A]" aria-hidden="true" />
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C79A4A] bg-[#C79A4A]/10 border border-[#C79A4A]/30 px-2.5 py-0.5 rounded">
          Consultation FAQs
        </span>
      </div>

      <h3 id="faq-heading" className="font-serif text-2xl font-semibold text-[#F3EFE7]">
        Frequently Asked Questions
      </h3>

      <div className="rounded-2xl border border-[#232727] bg-[#111313] p-5 sm:p-6 shadow-xs">
        <Accordion type="single" collapsible className="w-full">
          {consultationFaqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-sm font-semibold text-[#F3EFE7] hover:text-[#C79A4A]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-[#D1CBC1] font-sans leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
