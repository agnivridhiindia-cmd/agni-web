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
        <HelpCircle className="w-4 h-4 text-teal-700" aria-hidden="true" />
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200/80 px-2.5 py-0.5 rounded">
          Consultation FAQs
        </span>
      </div>

      <h3 id="faq-heading" className="font-serif text-2xl font-semibold text-slate-900">
        Frequently Asked Questions
      </h3>

      <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs">
        <Accordion type="single" collapsible className="w-full">
          {consultationFaqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-sm font-semibold text-slate-900 hover:text-teal-800">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
