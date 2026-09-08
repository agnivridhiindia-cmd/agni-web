"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Send,
  RotateCcw,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact-form";
import { getAllServices } from "@/data/services";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FormField, FieldError } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFormProps {
  initialService?: string;
}

export function ContactForm({ initialService = "" }: ContactFormProps) {
  const searchParams = useSearchParams();
  const prefillSubject = searchParams.get("subject") || "";
  const prefillService = searchParams.get("service") || initialService;

  // Form submission state
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [referenceCode, setReferenceCode] = React.useState<string>("");
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const services = getAllServices();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: prefillService || "cgtmse-funding",
      message: prefillSubject ? `Inquiry regarding: ${prefillSubject}` : "",
      website: "",
    },
  });

  // Submission handler
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result?.error || "Failed to submit diagnostic request. Please try again.");
      }

      setReferenceCode(result.referenceCode ?? "AGNI-PENDING");
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong while registering your consultation. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    reset();
  };

  // Submission Confirmed Screen
  if (isSubmitted) {
    return (
      <div className="p-8 md:p-10 rounded-2xl bg-white border border-cyan-100 shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-xs border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Inquiry Registered
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0F0A1A]">
            Advisory Inquiry Received
          </h3>
          <p className="text-[#475569] text-sm max-w-md mx-auto font-sans leading-relaxed">
            Your inquiry has been allocated to the senior advisory practice lead. You will receive an initial appraisal within 24 business hours.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-100 text-xs text-[#475569] font-mono max-w-xs mx-auto space-y-1">
          <div className="text-[#64748B] text-[11px] uppercase tracking-wider">Reference Ledger Code</div>
          <div className="text-base font-bold text-[#0F0A1A] tracking-wide">{referenceCode}</div>
        </div>

        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            className="inline-flex items-center gap-2 text-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Schedule Another Diagnostic</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl bg-white border border-cyan-100 shadow-2xl overflow-hidden">
      {/* Honeypot field for bot suppression */}
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8 space-y-6" noValidate>
        <div className="space-y-4">
          {/* Executive Contact & Financial Scope */}
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-semibold text-[#0F0A1A]">
                    Executive Contact &amp; Financial Scope
                  </h4>
                  <p className="text-xs text-[#64748B] font-sans">
                    Information is evaluated strictly under bilateral Non-Disclosure Agreement (NDA).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField>
                    <Label htmlFor="contact-name" required>
                      Full Name
                    </Label>
                    <Input
                      id="contact-name"
                      placeholder="e.g. Rajesh Sharma"
                      error={Boolean(errors.name)}
                      {...register("name")}
                    />
                    <FieldError>{errors.name?.message}</FieldError>
                  </FormField>

                  <FormField>
                    <Label htmlFor="contact-email" required>
                      Corporate Email
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="rajesh@company.com"
                      error={Boolean(errors.email)}
                      {...register("email")}
                    />
                    <FieldError>{errors.email?.message}</FieldError>
                  </FormField>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField>
                    <Label htmlFor="contact-phone" required>
                      Mobile / WhatsApp Number
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      error={Boolean(errors.phone)}
                      {...register("phone")}
                    />
                    <FieldError>{errors.phone?.message}</FieldError>
                  </FormField>

                  <FormField>
                    <Label htmlFor="contact-company">
                      Enterprise Legal Entity <span className="text-slate-400 text-xs">(Optional)</span>
                    </Label>
                    <Input
                      id="contact-company"
                      placeholder="e.g. Apex Precision Tools LLP"
                      error={Boolean(errors.company)}
                      {...register("company")}
                    />
                    <FieldError>{errors.company?.message}</FieldError>
                  </FormField>
                </div>

                {/* Primary Service Select */}
                <FormField>
                  <Label htmlFor="contact-service" required>
                    Advisory Practice Desk
                  </Label>
                  <Controller
                    name="service"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value ?? ""}>
                        <SelectTrigger id="contact-service" error={Boolean(errors.service)}>
                          <SelectValue placeholder="Select primary practice desk..." />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.id} value={s.slug}>
                              {s.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FieldError>{errors.service?.message}</FieldError>
                </FormField>

                {/* Executive Notes / Capex Scope */}
                <FormField>
                  <Label htmlFor="contact-message" required>
                    Capex Objective / Scope Summary
                  </Label>
                  <Textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Briefly state intended capex machinery, expansion city, or statutory accreditation timeline..."
                    error={Boolean(errors.message)}
                    {...register("message")}
                  />
                  <FieldError>{errors.message?.message}</FieldError>
                </FormField>

                <div className="pt-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center shadow-xs"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        <span>Submitting Inbound Parameters...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Confidential Diagnostic</span>
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>

              </div>

        {/* Global Error Banner if API Fails */}
        {submitError && (
          <div
            role="alert"
            className="flex items-start gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs"
          >
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{submitError}</span>
          </div>
        )}

        {/* =========================================================================
            AUTHORITY INDICATORS & INSTITUTIONAL SEALS
        ========================================================================= */}
        <div className="pt-4 border-t border-cyan-100 space-y-2.5">
          <div className="flex items-start gap-2 text-xs text-[#475569] font-sans">
            <ShieldCheck className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <strong>Protected by Mutual Non-Disclosure Agreement (NDA):</strong> All shared financial statements,
              balance sheets, and DPR projections are protected under statutory confidentiality covenants.
            </span>
          </div>

          <div className="flex items-start gap-2 text-xs text-[#475569] font-sans">
            <Lock className="w-4 h-4 text-[#0891B2] shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <strong>Direct Consultation with Practice Principals (No Sales Callers):</strong> Consultations are
              conducted exclusively by senior banking underwriters and certified quality auditors.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}