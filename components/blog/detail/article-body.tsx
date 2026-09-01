import * as React from "react";

interface ArticleBodyProps {
  content: string;
}

function parseFormattedText(text: string): React.ReactNode[] {
  // Split by bold (**text**)
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function ArticleBody({ content }: ArticleBodyProps) {
  const blocks = content.split(/\n\n+/);

  return (
    <div className="article-body font-sans text-slate-700 text-base sm:text-lg leading-relaxed space-y-6">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Heading 2
        if (trimmed.startsWith("## ")) {
          const rawText = trimmed.replace(/^##\s+/, "").trim();
          const cleanText = rawText.replace(/\*\*/g, "");
          const id = cleanText
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");

          return (
            <h2
              key={idx}
              id={id}
              className="scroll-mt-28 font-serif text-2xl sm:text-3xl font-semibold text-slate-900 pt-6 pb-2 tracking-tight border-b border-slate-100"
            >
              {parseFormattedText(rawText)}
            </h2>
          );
        }

        // Heading 3
        if (trimmed.startsWith("### ")) {
          const rawText = trimmed.replace(/^###\s+/, "").trim();
          const cleanText = rawText.replace(/\*\*/g, "");
          const id = cleanText
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");

          return (
            <h3
              key={idx}
              id={id}
              className="scroll-mt-28 font-serif text-xl sm:text-2xl font-semibold text-slate-900 pt-4 pb-1 tracking-tight"
            >
              {parseFormattedText(rawText)}
            </h3>
          );
        }

        // Unordered List (- item or * item)
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const lines = trimmed.split("\n").filter((l) => l.trim().startsWith("- ") || l.trim().startsWith("* "));
          return (
            <ul key={idx} className="my-4 space-y-3 pl-1 list-none">
              {lines.map((line, lineIdx) => {
                const itemText = line.replace(/^[-*]\s+/, "").trim();
                return (
                  <li key={lineIdx} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-2.5"
                    />
                    <span className="flex-1">{parseFormattedText(itemText)}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        // Numbered List (1. item)
        if (/^\d+\.\s/.test(trimmed)) {
          const lines = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l.trim()));
          return (
            <ol key={idx} className="my-4 space-y-3.5 pl-1 list-none">
              {lines.map((line, lineIdx) => {
                const match = line.match(/^(\d+)\.\s+(.*)$/);
                const num = match ? match[1] : `${lineIdx + 1}`;
                const itemText = match ? match[2] : line;
                return (
                  <li key={lineIdx} className="flex items-start gap-3.5 text-slate-700 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="w-6 h-6 rounded-md bg-teal-50 text-teal-800 border border-teal-200/80 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5"
                    >
                      {num}
                    </span>
                    <span className="flex-1">{parseFormattedText(itemText)}</span>
                  </li>
                );
              })}
            </ol>
          );
        }

        // Blockquote (> quote)
        if (trimmed.startsWith(">")) {
          const quoteText = trimmed.replace(/^>\s*/gm, "").trim();
          return (
            <blockquote
              key={idx}
              className="my-6 pl-5 border-l-4 border-gold-500 bg-slate-50/70 py-4 pr-4 rounded-r-xl italic text-slate-800 font-serif text-lg leading-relaxed"
            >
              {parseFormattedText(quoteText)}
            </blockquote>
          );
        }

        // Standard Paragraph
        return (
          <p key={idx} className="my-4 leading-relaxed text-slate-700">
            {parseFormattedText(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
