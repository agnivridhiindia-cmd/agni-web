"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark,
  ShieldCheck,
  Sparkles,
  Code2,
  Calendar,
  Clock,
  Send,
  RotateCcw,
  Loader2,
  AlertCircle,
  CheckCircle2,
  UploadCloud,
  FileText,
  X,
  Lock,
  ArrowRight,
  ArrowLeft,
  CalendarClock,
  ClipboardCheck,
  Building2,
  Video,
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
import { cn } from "@/lib/utils";

interface ContactFormProps {
  initialService?: string;
}

type TabType = "stepper" | "slot";

interface EnterpriseNeedOption {
  id: string;
  title: string;
  ceiling: string;
  description: string;
  icon: React.ElementType;
  defaultServiceSlug: string;
}

const ENTERPRISE_NEEDS: EnterpriseNeedOption[] = [
  {
    id: "cgtmse-debt",
    title: "Collateral-Free Debt (CGTMSE)",
    ceiling: "Up to ₹5.00 Cr · 0% Property Mortgage",
    description: "Sovereign guarantee underwritten by Ministry of MSME & SIDBI for Capex/machinery.",
    icon: Landmark,
    defaultServiceSlug: "cgtmse-funding",
  },
  {
    id: "iso-compliance",
    title: "ISO & Statutory Compliance",
    ceiling: "ISO 9001/14001/45001 · ZED · CE",
    description: "Stage 1 & 2 audit readiness, documentation frameworks, and zero-NC guarantee.",
    icon: ShieldCheck,
    defaultServiceSlug: "iso-certification",
  },
  {
    id: "capex-subsidy",
    title: "Central & State Subsidies",
    ceiling: "Up to 35% Capex Grants · PLI",
    description: "State industrial policy incentives, technology upgradation schemes, and interest subvention.",
    icon: Sparkles,
    defaultServiceSlug: "cgtmse-funding",
  },
  {
    id: "digital-it",
    title: "Digital Systems & Custom IT",
    ceiling: "ERP · Web Architecture · Cloud",
    description: "Enterprise workflow automation, high-performance web systems, and compliance portals.",
    icon: Code2,
    defaultServiceSlug: "web-development",
  },
];

interface TurnoverScaleOption {
  id: string;
  title: string;
  sub: string;
  detail: string;
}

const TURNOVER_SCALES: TurnoverScaleOption[] = [
  {
    id: "sub-1cr",
    title: "< ₹1.00 Crore",
    sub: "Micro / Green-field Unit",
    detail: "Green-field plant setup, PMEGP seed capital, and initial CGTMSE appraisal.",
  },
  {
    id: "1cr-10cr",
    title: "₹1.00 Cr – ₹10.00 Cr",
    sub: "Small Industrial Enterprise",
    detail: "Capacity expansion, multi-axis tooling capex, Stage 1/2 ISO accreditations.",
  },
  {
    id: "10cr-plus",
    title: "₹10.00 Crore+",
    sub: "Medium / Corporate Industrial",
    detail: "Consortium debt syndication, corporate governance, ESG audits, and state PLI claims.",
  },
];

const TIME_SLOTS = ["11:00 AM IST", "02:30 PM IST", "04:00 PM IST", "05:30 PM IST"] as const;

export function ContactForm({ initialService = "" }: ContactFormProps) {
  const timeSlots = TIME_SLOTS;
  const searchParams = useSearchParams();
  const prefillSubject = searchParams.get("subject") || "";
  const prefillService = searchParams.get("service") || initialService;

  // Active Tab: Diagnostic Stepper vs Instant Slot Booking
  const [activeTab, setActiveTab] = React.useState<TabType>("stepper");

  // Stepper state (1: Need, 2: Scale, 3: Details)
  const [currentStep, setCurrentStep] = React.useState<number>(1);

  // Instant slot booking state
  const [selectedDate, setSelectedDate] = React.useState<string>("");
  const [selectedTime, setSelectedTime] = React.useState<string>("");

  // Uploaded file simulation state
  const [uploadedFile, setUploadedFile] = React.useState<{ name: string; size: string } | null>(null);

  // Form submission state
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [referenceCode, setReferenceCode] = React.useState<string>("");
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const honeypotRef = React.useRef<HTMLInputElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const services = getAllServices();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    trigger,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      enterpriseNeed: "cgtmse-debt",
      turnoverScale: "1cr-10cr",
      name: "",
      email: "",
      phone: "",
      company: "",
      service: prefillService || "cgtmse-funding",
      message: prefillSubject ? `Inquiry regarding: ${prefillSubject}` : "",
      documentName: "",
      documentSize: "",
      bookingDate: "",
      bookingTime: "",
    },
  });

  const selectedNeed = watch("enterpriseNeed");
  const selectedScale = watch("turnoverScale");

  // Sync service selection when enterprise need changes
  const handleSelectNeed = (needId: string) => {
    setValue("enterpriseNeed", needId);
    const needOption = ENTERPRISE_NEEDS.find((n) => n.id === needId);
    if (needOption) {
      setValue("service", needOption.defaultServiceSlug);
    }
  };

  const handleSelectScale = (scaleId: string) => {
    setValue("turnoverScale", scaleId);
  };

  // Step validation helpers
  const handleNextToStep2 = async () => {
    setCurrentStep(2);
  };

  const handleNextToStep3 = async () => {
    setCurrentStep(3);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  // File upload simulation handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 15 * 1024 * 1024) {
        alert("File size exceeds the 15MB limit. Please upload a smaller document.");
        return;
      }
      const formattedSize = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
      setUploadedFile({ name: file.name, size: formattedSize });
      setValue("documentName", file.name);
      setValue("documentSize", formattedSize);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setValue("documentName", "");
    setValue("documentSize", "");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Submission handler
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    // If slot booking tab is active, attach selected date & time
    const payload = {
      ...data,
      bookingDate: activeTab === "slot" ? selectedDate : data.bookingDate,
      bookingTime: activeTab === "slot" ? selectedTime : data.bookingTime,
      message:
        activeTab === "slot"
          ? `[Instant 30-Min Diagnostic Slot Scheduled for ${selectedDate} at ${selectedTime}] - ${data.message || "Preliminary advisory assessment"}`
          : data.message,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, website: honeypotRef.current?.value ?? "" }),
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result?.error || "Failed to submit diagnostic request. Please try again.");
      }

      setReferenceCode(result.referenceCode ?? `AGNI-${Math.floor(100000 + Math.random() * 900000)}`);
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
    setCurrentStep(1);
    setUploadedFile(null);
    setSelectedDate("");
    setSelectedTime("");
    reset();
  };

  // Generate 5 upcoming business dates for slot booking
  const upcomingDates = React.useMemo(() => {
    const dates = [];
    const today = new Date();
    let count = 0;
    let daysAhead = 1;

    while (count < 5) {
      const d = new Date(today);
      d.setDate(today.getDate() + daysAhead);
      const day = d.getDay();
      // Exclude Sunday (0)
      if (day !== 0) {
        dates.push({
          dateStr: d.toLocaleDateString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "short",
          }),
          iso: d.toISOString().split("T")[0],
          isSaturday: day === 6,
        });
        count++;
      }
      daysAhead++;
    }
    return dates;
  }, []);

  // Pre-select first date on mount if slot booking active
  React.useEffect(() => {
    if (!selectedDate && upcomingDates.length > 0) {
      setSelectedDate(upcomingDates[0].dateStr);
    }
    if (!selectedTime) {
      setSelectedTime(TIME_SLOTS[0]);
    }
  }, [selectedDate, selectedTime, upcomingDates]);

  // Submission Confirmed Screen
  if (isSubmitted) {
    return (
      <div className="p-8 md:p-10 rounded-2xl bg-[#111313] border border-[#232727] shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-xs border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            {activeTab === "slot" ? "Diagnostic Slot Reserved" : "Inquiry Registered"}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F3EFE7]">
            {activeTab === "slot"
              ? "30-Minute Preliminary Session Confirmed"
              : "Advisory Diagnostic Parameters Received"}
          </h3>
          <p className="text-[#D1CBC1] text-sm max-w-md mx-auto font-sans leading-relaxed">
            {activeTab === "slot"
              ? `Your consultation with Rahul Kumar Singh / Practice Principal is slated for ${selectedDate} at ${selectedTime}. An executive calendar invite has been dispatched.`
              : "Your enterprise parameters have been allocated to the senior underwriting practice lead. You will receive an initial appraisal within 24 business hours."}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#181A1A] border border-[#232727] text-xs text-[#D1CBC1] font-mono max-w-xs mx-auto space-y-1">
          <div className="text-[#8E8B82] text-[11px] uppercase tracking-wider">Reference Ledger Code</div>
          <div className="text-base font-bold text-[#F3EFE7] tracking-wide">{referenceCode}</div>
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
    <div className="relative rounded-2xl bg-[#111313] border border-[#232727] shadow-2xl overflow-hidden">
      {/* Honeypot field for bot suppression */}
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input ref={honeypotRef} id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Top Tab Switcher: Stepper Form vs Instant Slot Booking */}
      <div className="p-3 bg-[#0B0C0C] border-b border-[#232727] flex items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("stepper")}
          className={cn(
            "flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all",
            activeTab === "stepper"
              ? "bg-[#181A1A] text-[#F3EFE7] shadow-sm border border-[#C79A4A]/60"
              : "text-[#8E8B82] hover:text-[#F3EFE7] hover:bg-[#141616]"
          )}
        >
          <ClipboardCheck className="w-4 h-4 text-teal-700" />
          <span>Diagnostic Stepper</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("slot")}
          className={cn(
            "flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all",
            activeTab === "slot"
              ? "bg-[#181A1A] text-[#F3EFE7] shadow-sm border border-[#C79A4A]/60"
              : "text-[#8E8B82] hover:text-[#F3EFE7] hover:bg-[#141616]"
          )}
        >
          <CalendarClock className="w-4 h-4 text-amber-600" />
          <span>Instant 30-Min Slot</span>
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8 space-y-6" noValidate>
        {/* =========================================================================
            TAB 1: DIAGNOSTIC STEPPER
        ========================================================================= */}
        {activeTab === "stepper" && (
          <div className="space-y-6">
            {/* Stepper Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold uppercase tracking-wider text-[#C79A4A]">
                  Step {currentStep} of 3
                </span>
                <span className="text-[#8E8B82]">
                  {currentStep === 1 && "Enterprise Need"}
                  {currentStep === 2 && "Turnover Scale"}
                  {currentStep === 3 && "Executive Details"}
                </span>
              </div>
              <div className="w-full h-1.5 bg-[#181A1A] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-teal-600 to-amber-500 transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* STEP 1: Select Enterprise Need */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-semibold text-[#F3EFE7]">
                    Select Your Enterprise Need
                  </h4>
                  <p className="text-xs text-[#8E8B82] font-sans">
                    Choose the primary practice area for preliminary sovereign or statutory underwriting.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {ENTERPRISE_NEEDS.map((need) => {
                    const isSelected = selectedNeed === need.id;
                    const Icon = need.icon;
                    return (
                      <button
                        key={need.id}
                        type="button"
                        onClick={() => handleSelectNeed(need.id)}
                        className={cn(
                          "w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 group",
                          isSelected
                            ? "bg-[#181A1A] border-[#C79A4A] shadow-md ring-1 ring-[#C79A4A]/40"
                            : "bg-[#111313] border-[#232727] hover:border-[#C79A4A]/50 hover:bg-[#151717]"
                        )}
                      >
                        <div
                          className={cn(
                            "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border transition-colors",
                            isSelected
                              ? "bg-[#C79A4A] text-[#080909] border-[#C79A4A]"
                              : "bg-[#161818] text-[#C79A4A] border-[#232727] group-hover:bg-[#1E2020] group-hover:text-[#D4A85B]"
                          )}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <span className="font-serif font-semibold text-sm text-[#F3EFE7] block">
                              {need.title}
                            </span>
                            <span className="self-start text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#C79A4A]/10 text-[#C79A4A] border border-[#C79A4A]/30 shrink-0">
                              {need.ceiling}
                            </span>
                          </div>
                          <p className="text-xs text-[#8E8B82] font-sans leading-relaxed">
                            {need.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <Button
                    type="button"
                    variant="primary"
                    size="lg"
                    onClick={handleNextToStep2}
                    className="w-full justify-center shadow-xs"
                  >
                    <span>Proceed to Turnover Scale</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: Select Turnover Scale */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-semibold text-[#F3EFE7]">
                    Select Annual Turnover Scale
                  </h4>
                  <p className="text-xs text-[#8E8B82] font-sans">
                    Turnover determines sovereign risk bracket, bank consortium routing, and subsidy eligibility.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {TURNOVER_SCALES.map((scale) => {
                    const isSelected = selectedScale === scale.id;
                    return (
                      <button
                        key={scale.id}
                        type="button"
                        onClick={() => handleSelectScale(scale.id)}
                        className={cn(
                          "w-full text-left p-4 rounded-xl border transition-all group",
                          isSelected
                            ? "bg-[#181A1A] border-[#C79A4A] shadow-md ring-1 ring-[#C79A4A]/40"
                            : "bg-[#111313] border-[#232727] hover:border-[#C79A4A]/50 hover:bg-[#151717]"
                        )}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-serif font-bold text-base text-[#F3EFE7]">
                              {scale.title}
                            </span>
                            <span className="text-xs text-[#2DD4BF] bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 px-2 py-0.5 rounded font-sans font-medium">
                              {scale.sub}
                            </span>
                          </div>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-[#C79A4A] shrink-0" />}
                        </div>
                        <p className="text-xs text-[#8E8B82] font-sans mt-1 leading-relaxed">
                          {scale.detail}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-3 flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={handleBack}
                    className="gap-1.5 text-xs sm:text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    size="lg"
                    onClick={handleNextToStep3}
                    className="flex-1 justify-center shadow-xs"
                  >
                    <span>Enter Executive Details</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: Executive Details & Document Upload */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-semibold text-[#F3EFE7]">
                    Executive Contact &amp; Financial Scope
                  </h4>
                  <p className="text-xs text-[#8E8B82] font-sans">
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

                {/* Optional DPR / Balance Sheet Upload Dropzone */}
                <div className="space-y-1.5 pt-1">
                  <Label className="text-xs font-semibold text-[#D1CBC1] flex items-center justify-between">
                    <span>Attach Draft DPR or Balance Sheet (Optional)</span>
                    <span className="text-[11px] font-mono text-slate-400 font-normal">PDF, XLSX up to 15MB</span>
                  </Label>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.xlsx,.xls,.docx,.doc"
                    onChange={handleFileChange}
                    className="hidden"
                    id="dpr-file-upload"
                  />

                  {uploadedFile ? (
                    <div className="p-3 rounded-xl border border-teal-300 bg-teal-50/60 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <FileText className="w-5 h-5 text-[#C79A4A] shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-[#F3EFE7] truncate">
                            {uploadedFile.name}
                          </p>
                          <p className="text-[11px] text-[#8E8B82] font-mono">
                            {uploadedFile.size} · Attached for Underwriting
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="p-1 rounded-md text-slate-400 hover:text-red-600 hover:bg-white"
                        aria-label="Remove uploaded document"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full p-4 rounded-xl border border-dashed border-slate-300 bg-[#181A1A]/50 hover:bg-slate-100/70 hover:border-slate-400 transition-colors flex flex-col items-center justify-center gap-1.5 text-center cursor-pointer"
                    >
                      <UploadCloud className="w-5 h-5 text-[#8E8B82]" />
                      <span className="text-xs font-semibold text-[#D1CBC1]">
                        Upload Provisional DPR / 3-Year Audited Balance Sheet
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Encrypted with AES-256. Strictly under bilateral NDA.
                      </span>
                    </button>
                  )}
                </div>

                <div className="pt-3 flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={handleBack}
                    className="gap-1.5 text-xs sm:text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="flex-1 justify-center shadow-xs"
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
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 2: INSTANT 30-MIN SLOT BOOKING
        ========================================================================= */}
        {activeTab === "slot" && (
          <div className="space-y-5">
            {/* Host & Platform Brief */}
            <div className="p-3.5 rounded-xl bg-slate-900 text-white flex items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 font-serif font-bold text-sm">
                  RK
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block font-bold">
                    PRACTICE PRINCIPAL
                  </span>
                  <span className="text-sm font-semibold text-white block">
                    Rahul Kumar Singh
                  </span>
                </div>
              </div>
              <div className="text-right text-xs font-mono text-[#8E8B82]">
                <div className="flex items-center gap-1.5 text-[#C79A4A] justify-end">
                  <Video className="w-3.5 h-3.5" />
                  <span>Google Meet</span>
                </div>
                <div>30 Minutes · IST</div>
              </div>
            </div>

            {/* Date Selector */}
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-[#D1CBC1] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C79A4A]" />
                <span>Select Consultation Date (Upcoming Business Days)</span>
              </Label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {upcomingDates.map((d) => (
                  <button
                    key={d.iso}
                    type="button"
                    onClick={() => setSelectedDate(d.dateStr)}
                    className={cn(
                      "p-2.5 rounded-xl border text-center transition-all text-xs",
                      selectedDate === d.dateStr
                        ? "bg-[#C79A4A] text-[#080909] border-[#C79A4A] shadow-xs font-bold"
                        : "bg-[#141616] border-[#232727] text-[#D1CBC1] hover:border-[#C79A4A]/40 hover:bg-[#181A1A]"
                    )}
                  >
                    <span className="block text-[11px] opacity-80">{d.dateStr.split(",")[0]}</span>
                    <span className="block font-bold text-sm">{d.dateStr.split(",")[1]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Selector */}
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-[#D1CBC1] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C79A4A]" />
                <span>Select Available Time Slot (Asia/Kolkata IST)</span>
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "py-2.5 px-3 rounded-xl border text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2",
                      selectedTime === time
                        ? "bg-[#C79A4A] border-[#C79A4A] text-[#080909] font-bold shadow-xs"
                        : "bg-[#141616] border-[#232727] text-[#D1CBC1] hover:border-[#C79A4A]/40 hover:bg-[#181A1A]"
                    )}
                  >
                    <span>{time}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Executive Participant Information */}
            <div className="space-y-3 pt-2 border-t border-[#232727]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <FormField>
                  <Label htmlFor="slot-name" required>
                    Full Name
                  </Label>
                  <Input
                    id="slot-name"
                    placeholder="Executive Name"
                    error={Boolean(errors.name)}
                    {...register("name")}
                  />
                  <FieldError>{errors.name?.message}</FieldError>
                </FormField>

                <FormField>
                  <Label htmlFor="slot-email" required>
                    Corporate Email
                  </Label>
                  <Input
                    id="slot-email"
                    type="email"
                    placeholder="name@company.com"
                    error={Boolean(errors.email)}
                    {...register("email")}
                  />
                  <FieldError>{errors.email?.message}</FieldError>
                </FormField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <FormField>
                  <Label htmlFor="slot-phone" required>
                    Mobile / WhatsApp
                  </Label>
                  <Input
                    id="slot-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    error={Boolean(errors.phone)}
                    {...register("phone")}
                  />
                  <FieldError>{errors.phone?.message}</FieldError>
                </FormField>

                <FormField>
                  <Label htmlFor="slot-company">Enterprise Name</Label>
                  <Input
                    id="slot-company"
                    placeholder="Company Legal Name"
                    error={Boolean(errors.company)}
                    {...register("company")}
                  />
                </FormField>
              </div>

              <FormField>
                <Label htmlFor="slot-message">Discussion Focus / Objectives</Label>
                <Input
                  id="slot-message"
                  placeholder="e.g. ₹3.5 Cr machinery expansion under CGTMSE or ISO 9001 audit timeline"
                  error={Boolean(errors.message)}
                  {...register("message")}
                />
              </FormField>
            </div>

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
                  <span>Locking Slot on Underwriting Ledger...</span>
                </>
              ) : (
                <>
                  <span>Book 30-Min Diagnostic Slot Immediately</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        )}

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
        <div className="pt-4 border-t border-[#232727] space-y-2.5">
          <div className="flex items-start gap-2 text-xs text-[#D1CBC1] font-sans">
            <ShieldCheck className="w-4 h-4 text-[#C79A4A] shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <strong>Protected by Mutual Non-Disclosure Agreement (NDA):</strong> All shared financial statements,
              balance sheets, and DPR projections are protected under statutory confidentiality covenants.
            </span>
          </div>

          <div className="flex items-start gap-2 text-xs text-[#D1CBC1] font-sans">
            <Lock className="w-4 h-4 text-[#C79A4A] shrink-0 mt-0.5" aria-hidden="true" />
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