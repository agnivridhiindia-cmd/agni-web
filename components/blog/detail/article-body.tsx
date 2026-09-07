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
        <strong key={index} className="font-semibold text-[#0F0A1A]">
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
    <div className="article-body font-sans text-[#475569] text-base sm:text-lg leading-relaxed space-y-6">
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
              className="scroll-mt-28 font-serif text-2xl sm:text-3xl font-semibold text-[#0F0A1A] pt-6 pb-2 tracking-tight border-b border-purple-100"
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
              className="scroll-mt-28 font-serif text-xl sm:text-2xl font-semibold text-[#0F0A1A] pt-4 pb-1 tracking-tight"
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
                  <li key={lineIdx} className="flex items-start gap-3 text-[#475569] leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#581C87] shrink-0 mt-2.5"
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
                  <li key={lineIdx} className="flex items-start gap-3.5 text-[#475569] leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="w-6 h-6 rounded-md bg-[#581C87]/10 text-[#7C3AED] border border-purple-200 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5"
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
              className="my-6 pl-5 border-l-4 border-[#581C87] bg-white py-4 pr-4 rounded-r-xl italic text-[#0F0A1A] font-serif text-lg leading-relaxed"
            >
              {parseFormattedText(quoteText)}
            </blockquote>
          );
        }

        // Standard Paragraph
        return (
          <p key={idx} className="my-4 leading-relaxed text-[#475569]">
            {parseFormattedText(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
