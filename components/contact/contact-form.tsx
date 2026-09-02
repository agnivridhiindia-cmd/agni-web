"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { CheckCircle2, Send, RotateCcw, Loader2, ShieldCheck, AlertCircle } from "lucide-react";

interface ContactFormProps {
  initialService?: string;
}

export function ContactForm({ initialService = "" }: ContactFormProps) {
  const searchParams = useSearchParams();
  const prefillSubject = searchParams.get("subject") || "";
  const prefillService = searchParams.get("service") || initialService;

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [referenceCode, setReferenceCode] = React.useState<string>("");
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const honeypotRef = React.useRef<HTMLInputElement>(null);
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
      service: prefillService,
      message: prefillSubject ? `Inquiry regarding: ${prefillSubject}` : "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: honeypotRef.current?.value ?? "" }),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result?.error || "Failed to submit inquiry. Please try again.");
      }

      setReferenceCode(result.referenceCode ?? `AGNI-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong while submitting your inquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    reset({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  if (isSubmitted) {
    return (
      <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-elevated text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-xs border border-emerald-100">
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded">
            Inquiry Registered
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900">
            Advisory Request Confirmed
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto font-sans leading-relaxed">
            Thank you for connecting with Agnivridhi India. A senior practice lead has received your
            inquiry parameters and will respond within 24 business hours.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 font-mono max-w-xs mx-auto">
          Reference Code: <span className="font-bold text-slate-900">{referenceCode}</span>
        </div>

        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            className="inline-flex items-center gap-2 text-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Submit Another Inquiry</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md space-y-5"
      noValidate
    >
      {/* Honeypot field — hidden from real users, catches basic bots.
          Kept out of the validation schema; checked server-side in /api/contact. */}
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          ref={honeypotRef}
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="border-b border-slate-100 pb-4">
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
          Request Confidential Diagnostic
        </h3>
        <p className="text-slate-500 text-xs mt-1 font-sans">
          Provide your enterprise details. All inquiries are evaluated under strict non-disclosure governance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
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

        {/* Corporate Email */}
        <FormField>
          <Label htmlFor="contact-email" required>
            Business / Corporate Email
          </Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="name@company.com"
            error={Boolean(errors.email)}
            {...register("email")}
          />
          <FieldError>{errors.email?.message}</FieldError>
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Contact Phone */}
        <FormField>
          <Label htmlFor="contact-phone" required>
            Contact Number
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

        {/* Company Name */}
        <FormField>
          <Label htmlFor="contact-company">
            Enterprise Name <span className="text-slate-400 text-xs">(Optional)</span>
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
          Primary Advisory Practice
        </Label>
        <Controller
          name="service"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value ?? ""}>
              <SelectTrigger id="contact-service" error={Boolean(errors.service)}>
                <SelectValue placeholder="Select primary practice area or scheme..." />
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

      {/* Inquiry Message */}
      <FormField>
        <Label htmlFor="contact-message" required>
          Project Scope &amp; Borrowing / Advisory Need
        </Label>
        <Textarea
          id="contact-message"
          rows={4}
          placeholder="Briefly describe your borrowing scope, machinery expansion, certification need, or current turnover..."
          error={Boolean(errors.message)}
          {...register("message")}
        />
        <FieldError>{errors.message?.message}</FieldError>
      </FormField>

      {/* Trust & Submit row */}
      <div className="pt-2 space-y-3">
        {submitError && (
          <div
            role="alert"
            className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs"
          >
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{submitError}</span>
          </div>
        )}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center shadow-xs"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" aria-hidden="true" />
              <span>Submitting Inbound Parameters...</span>
            </>
          ) : (
            <>
              <span>Submit Advisory Inquiry</span>
              <Send className="w-4 h-4 ml-2" aria-hidden="true" />
            </>
          )}
        </Button>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-sans">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" aria-hidden="true" />
          <span>Factual Transparency: No unsolicited marketing or data sharing.</span>
        </div>
      </div>
    </form>
  );
}