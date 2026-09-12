import * as React from "react";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import BlogPage from "../blog/page";

export const metadata: Metadata = createPageMetadata({
  title: "Services & Strategic Insights | Agnivridhi India",
  description:
    "Comprehensive solutions for business growth, government funding schemes (CGTMSE, MUDRA, PMEGP), statutory compliance, and technology engineering.",
  path: "/insights",
});

export default function InsightsPage() {
  return <BlogPage />;
}
