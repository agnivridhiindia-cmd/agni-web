import type { Metadata } from "next";
 
// The design system page is an internal component/style-guide showcase for
// the dev team ÃƒÂ¢Ã¢â€šÂ¬ - Â not customer-facing content. Keep it out of search results
// and off the sitemap (it's already excluded from app/sitemap.ts).
export const metadata: Metadata = {
  title: "Design System (Internal)",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};
 
export default function DesignSystemLayout({ children }: { children: React.ReactNode }) {
  return children;
}
 