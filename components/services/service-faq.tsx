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
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80  border border-amber-500/40 text-xs font-mono tracking-widest text-amber-300 shadow-xs">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
 <span>KNOWLEDGE BASE &bull; SCHEME INQUIRIES</span>
 </div>
 <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white tracking-tight">
 Frequently Asked Questions regarding {serviceName}
 </h2>
 </div>

 <div className="rounded-2xl border border-slate-700/60 bg-gradient-to-b from-[#131D38]/90 via-[#0E162B]/95 to-[#0A1020]/95 p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
 <Accordion type="single" collapsible className="w-full divide-y divide-slate-800">
 {faqs.map((faq, index) => (
 <AccordionItem key={index} value={`faq-${index}`} className="border-b-0 py-2 first:pt-0 last:pb-0">
 <AccordionTrigger className="text-left font-serif text-base sm:text-lg font-semibold text-white hover:text-amber-300 transition-colors">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-sm text-slate-300 font-sans leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
