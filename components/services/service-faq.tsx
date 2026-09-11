import * as React from "react";
import type { ServiceFaq as ServiceFaqType } from "@/types/service";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface ServiceFaqProps {
  faqs?: readonly ServiceFaqType[];
  serviceName: string;
}

export function ServiceFaq({ faqs, serviceName }: ServiceFaqProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>KNOWLEDGE BASE &bull; SCHEME INQUIRIES</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white tracking-tight">
          Frequently Asked Questions regarding {serviceName}
        </h2>
      </div>

      <div className="rounded-2xl border border-teal-500/30 bg-gradient-to-b from-teal-900/80 via-[#043331]/95 to-teal-950/95 p-6 sm:p-7 shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
        <Accordion type="single" collapsible className="w-full divide-y divide-teal-500/20">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border-b-0 py-2 first:pt-0 last:pb-0">
              <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-medium text-amber-300 hover:text-amber-200 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-teal-100/85 font-sans leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
