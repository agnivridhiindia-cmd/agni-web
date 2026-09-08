"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { IconButton } from "@/components/ui/icon-button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Badge, Eyebrow } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { GlassSurface } from "@/components/ui/glass-surface";
import { Divider } from "@/components/ui/divider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormField, FieldDescription, FieldError } from "@/components/ui/form-field";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Avatar, ImageWrapper } from "@/components/ui/avatar";
import { Spinner } from "@/components/ui/spinner";
import { Skeleton } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CtaArrow } from "@/components/ui/cta-arrow";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { StatDisplay } from "@/components/shared/stat-display";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import { MotionShowcase } from "@/components/design-system/motion-showcase";
import {
  Sparkles,
  ArrowRight,
  Shield,
  Settings,
  TrendingUp,
  Landmark,
} from "lucide-react";

export default function DesignSystemShowcasePage() {
  const [selectVal, setSelectVal] = React.useState("funding");
  const [checkboxChecked, setCheckboxChecked] = React.useState(true);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 bg-noise py-12">
        <Container width="wide" className="space-y-16">
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Eyebrow>Developer Verification Harness</Eyebrow>
                <Badge variant="primary">Phase 4</Badge>
              </div>
              <h1 className="type-display text-slate-900">
                Core UI Component System
              </h1>
              <p className="type-body text-slate-600 max-w-reading mt-2">
                This internal route validates states, accessibility semantics, design tokens, and
                keyboard interaction for all Agnivridhi primitives using neutral sample data.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline">Client & Server Isolated</Badge>
              <Badge variant="success">WCAG Accessible</Badge>
            </div>
          </div>

          {/* 1. BUTTONS & ACTIONS */}
          <section className="space-y-6">
            <SectionHeading
              eyebrow="Action Foundation"
              title="Button Variants & States"
              description="Buttons adhere to the Teal/Gold palette, controlled radius (8px), and visible focus rings."
            />

            <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-6 shadow-subtle">
              <div>
                <h4 className="type-caption text-slate-400 uppercase tracking-wider mb-3">Variants</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary">Primary Teal</Button>
                  <Button variant="accent">Accent Gold</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link Variant</Button>
                </div>
              </div>

              <Divider />

              <div>
                <h4 className="type-caption text-slate-400 uppercase tracking-wider mb-3">States (Primary)</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary">Default State</Button>
                  <Button variant="primary" disabled>Disabled State</Button>
                  <Button variant="primary" loading>Loading State</Button>
                  <Button variant="primary" leftIcon={<Sparkles className="h-4 w-4" />}>
                    Left Icon
                  </Button>
                  <Button variant="primary" rightIcon={<CtaArrow />}>
                    Right CTA
                  </Button>
                </div>
              </div>

              <Divider />

              <div>
                <h4 className="type-caption text-slate-400 uppercase tracking-wider mb-3">Sizes</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small (sm)</Button>
                  <Button size="default">Default (md)</Button>
                  <Button size="lg">Large (lg)</Button>
                  <Button size="xl">Hero (xl)</Button>
                </div>
              </div>

              <Divider />

              <div>
                <h4 className="type-caption text-slate-400 uppercase tracking-wider mb-3">
                  LinkButton & Magnetic Button (Opt-in)
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  <LinkButton href="/about" variant="outline">
                    Semantic Internal Link
                  </LinkButton>
                  <LinkButton href="https://example.com" variant="secondary" showExternalIcon>
                    External Link
                  </LinkButton>
                  <MagneticButton>
                    <Button variant="accent" rightIcon={<ArrowRight className="h-4 w-4" />}>
                      Magnetic Hover (Opt-in)
                    </Button>
                  </MagneticButton>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                        <IconButton
                          aria-label="Settings Action"
                          icon={<Settings className="h-4 w-4" />}
                          variant="outline"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>Settings Action Tooltip</TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          </section>

          {/* 2. BADGES & LABELS */}
          <section className="space-y-6">
            <SectionHeading
              eyebrow="Taxonomy & Feedback"
              title="Badges & Eyebrows"
              description="Restrained pill tags for metadata and statuses, and editorial overlines for typography."
            />
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-subtle space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary Teal</Badge>
                <Badge variant="accent">Accent Gold</Badge>
                <Badge variant="muted">Muted Slate</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
              <div className="flex items-center gap-6 pt-2">
                <Eyebrow>Default Eyebrow</Eyebrow>
                <Eyebrow accent>Accent Eyebrow (Gold)</Eyebrow>
              </div>
            </div>
          </section>

          {/* 3. CARD SYSTEM & GLASS SURFACE */}
          <section className="space-y-6">
            <SectionHeading
              eyebrow="Surface Architecture"
              title="Card Variants & Glass Surfaces"
              description="Composable cards and selective translucent glass without AI-style universal blur."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="default">
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>Clean structural card with quiet border and subtle shadow.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="type-body-sm text-slate-600">
                    Standard surface for listings, tables, and content containers.
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="type-caption text-slate-400">Variant: default</span>
                </CardFooter>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Elevated Card</CardTitle>
                  <CardDescription>Hover-responsive lift with multi-layered depth.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="type-body-sm text-slate-600">
                    Used for interactive service items and portfolio stories.
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="type-caption text-slate-400">Variant: elevated</span>
                </CardFooter>
              </Card>

              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>Subtle Card</CardTitle>
                  <CardDescription>Low-contrast background tint for secondary groups.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="type-body-sm text-slate-600">
                    Subtle contrast with zero drop shadow.
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="type-caption text-slate-400">Variant: subtle</span>
                </CardFooter>
              </Card>

              <Card variant="featured">
                <CardHeader>
                  <CardTitle>Featured Card</CardTitle>
                  <CardDescription>Top brand gradient line for flagship offerings.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="type-body-sm text-slate-600">
                    Prestige moment highlighting flagship initiatives.
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="type-caption text-slate-400">Variant: featured</span>
                </CardFooter>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <GlassSurface intensity="default" interactive className="p-6">
                <h4 className="type-h4 mb-1">GlassSurface (Default)</h4>
                <p className="type-body-sm text-slate-600">
                  Light translucent backdrop blur with fallback for older browsers.
                </p>
              </GlassSurface>

              <GlassSurface intensity="subtle" className="p-6">
                <h4 className="type-h4 mb-1">GlassSurface (Subtle)</h4>
                <p className="type-body-sm text-slate-600">
                  Gentle blur for floating indicators and toolbars.
                </p>
              </GlassSurface>

              <GlassSurface intensity="dark" className="p-6">
                <h4 className="type-h4 text-white mb-1">GlassSurface (Dark)</h4>
                <p className="type-body-sm text-slate-300">
                  High-contrast dark translucent panel for modal overlays.
                </p>
              </GlassSurface>
            </div>
          </section>

          {/* 4. FORM SYSTEM & INPUTS */}
          <section className="space-y-6">
            <SectionHeading
              eyebrow="Data Entry"
              title="Input System & Form Controls"
              description="Accessible input, textarea, select, and checkbox primitives ready for React Hook Form."
            />

            <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-subtle grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField>
                <Label htmlFor="demo-name" required>Full Name</Label>
                <Input id="demo-name" placeholder="e.g. Rajesh Sharma" />
                <FieldDescription>Please enter your legal full name.</FieldDescription>
              </FormField>

              <FormField>
                <Label htmlFor="demo-email">Business Email</Label>
                <Input id="demo-email" type="email" placeholder="name@company.com" />
              </FormField>

              <FormField>
                <Label htmlFor="demo-error">Field with Error State</Label>
                <Input id="demo-error" defaultValue="invalid-format@" error="Invalid email address provided" />
                <FieldError>Please provide a valid business email address.</FieldError>
              </FormField>

              <FormField>
                <Label htmlFor="demo-disabled">Disabled Input</Label>
                <Input id="demo-disabled" disabled defaultValue="read-only-value" />
                <FieldDescription>This field cannot be edited.</FieldDescription>
              </FormField>

              <FormField>
                <Label>Select Category</Label>
                <Select value={selectVal} onValueChange={setSelectVal}>
                  <SelectTrigger aria-label="Select Category">
                    <SelectValue placeholder="Choose a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Business Areas</SelectLabel>
                      <SelectItem value="funding">Government Funding (CGTMSE, MUDRA)</SelectItem>
                      <SelectItem value="compliance">Compliance (ISO, MSME, GST)</SelectItem>
                      <SelectItem value="digital">Digital Transformation</SelectItem>
                      <SelectItem value="it">Custom IT Solutions</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormField>

              <div className="flex items-center space-x-3 pt-6">
                <Checkbox
                  id="demo-check"
                  checked={checkboxChecked}
                  onCheckedChange={(checked) => setCheckboxChecked(Boolean(checked))}
                />
                <Label htmlFor="demo-check" className="cursor-pointer">
                  I agree to statutory data compliance and terms
                </Label>
              </div>

              <div className="md:col-span-2">
                <FormField>
                  <Label htmlFor="demo-textarea">Inquiry Message</Label>
                  <Textarea
                    id="demo-textarea"
                    placeholder="Briefly describe your enterprise requirements..."
                  />
                </FormField>
              </div>
            </div>
          </section>

          {/* 5. INTERACTIVE OVERLAYS: TABS, ACCORDION & DIALOG */}
          <section className="space-y-6">
            <SectionHeading
              eyebrow="Interactive Disclosure"
              title="Tabs, Accordion & Dialog Modal"
              description="Accessible Radix-backed primitives customized to Agnivridhi visual standards."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tabs */}
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-subtle space-y-4">
                <h3 className="type-h4 text-slate-900">Tabs Component</h3>
                <Tabs defaultValue="tab-funding">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="tab-funding">Funding</TabsTrigger>
                    <TabsTrigger value="tab-compliance">Compliance</TabsTrigger>
                    <TabsTrigger value="tab-digital">Digital</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab-funding" className="p-4 rounded-md bg-slate-50 border border-slate-200/60">
                    <h5 className="font-serif font-semibold text-slate-900 mb-1">Government Funding</h5>
                    <p className="type-body-sm text-slate-600">
                      Sample content demonstrating accessible tab switching with refined active indicator.
                    </p>
                  </TabsContent>
                  <TabsContent value="tab-compliance" className="p-4 rounded-md bg-slate-50 border border-slate-200/60">
                    <h5 className="font-serif font-semibold text-slate-900 mb-1">Statutory Compliance</h5>
                    <p className="type-body-sm text-slate-600">
                      ISO accreditation, MSME Udyam, and regulatory tax advisory services.
                    </p>
                  </TabsContent>
                  <TabsContent value="tab-digital" className="p-4 rounded-md bg-slate-50 border border-slate-200/60">
                    <h5 className="font-serif font-semibold text-slate-900 mb-1">Digital Engineering</h5>
                    <p className="type-body-sm text-slate-600">
                      Modern Next.js platforms and performance marketing infrastructure.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Accordion & Dialog */}
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-subtle space-y-6">
                <div>
                  <h3 className="type-h4 text-slate-900 mb-2">Accordion Component</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is the CGTMSE eligibility criteria?</AccordionTrigger>
                      <AccordionContent>
                        Micro and Small Enterprises engaged in manufacturing or service activities are eligible
                        for collateral-free debt financing.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How long does ISO certification take?</AccordionTrigger>
                      <AccordionContent>
                        Typically 20 to 30 business days depending on existing process documentation and audit scheduling.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <Divider />

                <div>
                  <h3 className="type-h4 text-slate-900 mb-3">Dialog (Modal Window)</h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="primary">Launch Interactive Modal</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Consultation Request</DialogTitle>
                        <DialogDescription>
                          This modal demonstrates focus-trapping, backdrop blur overlay, and keyboard Escape listener.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4 space-y-3">
                        <FormField>
                          <Label htmlFor="modal-sample">Enterprise Industry</Label>
                          <Input id="modal-sample" placeholder="e.g. Precision Engineering" />
                        </FormField>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button variant="primary">Confirm Action</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </section>

          {/* 6. PRESENTATIONAL SHARED COMPONENTS */}
          <section className="space-y-6">
            <SectionHeading
              eyebrow="Metric Presentation"
              title="Stat Display & Feedback Alerts"
              description="Reusable presentation metrics with zero hardcoded business numbers, plus status alerts."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatDisplay
                label="Sample Metric 1"
                prefix="ÃƒÂ¢ - Å¡Ã‚Â¹"
                value="50"
                suffix=" Cr+"
                supportingText="Sample parameter passed via props"
                icon={<Landmark className="h-4 w-4" />}
                variant="default"
              />
              <StatDisplay
                label="Sample Metric 2"
                value="250"
                suffix="+"
                supportingText="Elevated variant with accent frame"
                icon={<TrendingUp className="h-4 w-4" />}
                variant="accent"
              />
              <StatDisplay
                label="Sample Metric 3"
                value="10"
                suffix=" Yrs"
                supportingText="Subtle background variant"
                icon={<Shield className="h-4 w-4" />}
                variant="subtle"
              />
              <StatDisplay
                label="Sample Metric 4"
                value="99.4"
                suffix="%"
                supportingText="Glass surface variant"
                icon={<Sparkles className="h-4 w-4" />}
                variant="glass"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <Alert variant="info">
                <AlertTitle>Information Notice</AlertTitle>
                <AlertDescription>
                  This is a quiet informational notice component adhering to neutral slate tokens.
                </AlertDescription>
              </Alert>
              <Alert variant="success">
                <AlertTitle>Application Approved</AlertTitle>
                <AlertDescription>
                  Statutory registration documents have passed preliminary jurisdictional audit.
                </AlertDescription>
              </Alert>
              <Alert variant="warning">
                <AlertTitle>Action Required</AlertTitle>
                <AlertDescription>
                  Additional balance sheet schedules required for credit assessment.
                </AlertDescription>
              </Alert>
              <Alert variant="error">
                <AlertTitle>Verification Error</AlertTitle>
                <AlertDescription>
                  PAN and Aadhaar data mismatch detected during statutory verification.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* 7. MEDIA, SKELETONS, & MOTION */}
          <section className="space-y-6">
            <SectionHeading
              eyebrow="Media & Animation"
              title="Avatar, Loading Skeletons & Motion"
              description="Graceful image fallbacks, accessible spinners, and reduced-motion compliant reveals."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Avatar & Fallback */}
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-subtle space-y-4">
                <h4 className="type-h4">Avatar & Image Fallback</h4>
                <div className="flex items-center gap-4">
                  <Avatar size="sm" initials="AK" />
                  <Avatar size="default" initials="RS" />
                  <Avatar size="lg" initials="AG" />
                  <Avatar size="square" initials="VI" />
                </div>
                <div className="pt-2">
                  <ImageWrapper
                    aspectRatio="landscape"
                    radius="md"
                    alt="Sample Image Container with Graceful Fallback"
                    className="h-32"
                  />
                </div>
              </div>

              {/* Progress & Skeletons */}
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-subtle space-y-4">
                <h4 className="type-h4">Loading Primitives</h4>
                <div className="flex items-center gap-4">
                  <Spinner size="sm" />
                  <Spinner size="default" />
                  <Spinner size="lg" variant="accent" />
                </div>
                <div className="space-y-2 pt-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-8 w-1/3 mt-3" />
                </div>
              </div>

              {/* Empty State */}
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-subtle flex items-center justify-center">
                <EmptyState
                  title="No Records Found"
                  description="Sample presentational fallback when a search query or filter returns zero records."
                  action={<Button variant="outline" size="sm">Reset Filter</Button>}
                  className="w-full border-0 p-2"
                />
              </div>
            </div>

            {/* Motion Reveal Demonstration */}
            <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-subtle space-y-6">
              <FadeIn>
                <div className="p-4 rounded-md bg-teal-50/50 border border-teal-200/60">
                  <h4 className="type-h4 text-teal-950 mb-1">FadeIn Motion Wrapper</h4>
                  <p className="type-body-sm text-teal-800">
                    Smooth directional entrance respecting the userÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s operating system reduced-motion preference.
                  </p>
                </div>
              </FadeIn>

              <div>
                <h4 className="type-h4 mb-3">Framer Motion Stagger Container</h4>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <StaggerItem className="p-4 rounded-md bg-slate-50 border border-slate-200 text-center">
                    <span className="type-caption text-teal-700 font-bold">Item 1</span>
                    <p className="type-body-sm text-slate-600 mt-1">Subtle staggered entrance</p>
                  </StaggerItem>
                  <StaggerItem className="p-4 rounded-md bg-slate-50 border border-slate-200 text-center">
                    <span className="type-caption text-teal-700 font-bold">Item 2</span>
                    <p className="type-body-sm text-slate-600 mt-1">Zero layout shift</p>
                  </StaggerItem>
                  <StaggerItem className="p-4 rounded-md bg-slate-50 border border-slate-200 text-center">
                    <span className="type-caption text-teal-700 font-bold">Item 3</span>
                    <p className="type-body-sm text-slate-600 mt-1">prefers-reduced-motion safe</p>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </div>
          </section>

          {/* Section 7: Motion, Transitions & Interaction System (Phase 6) */}
          <MotionShowcase />
        </Container>
      </div>
    </TooltipProvider>
  );
}
