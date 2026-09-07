import * as React from "react";
import { HelpCircle } from "lucide-react";
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
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-[#581C87]">
          <HelpCircle className="w-4 h-4" />
          <span className="type-eyebrow font-mono">Knowledge Base &bull; Scheme Inquiries</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F0A1A] tracking-tight">
          Frequently Asked Questions regarding {serviceName}
        </h2>
      </div>

      <div className="rounded-xl border border-purple-100 bg-white p-6 sm:p-7 shadow-xs">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-medium text-[#0F0A1A] hover:text-[#581C87]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#475569] font-sans leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
