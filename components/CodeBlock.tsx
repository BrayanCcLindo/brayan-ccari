"use client";

import { useRef, useState } from "react";
import { Copy, Check } from "lucide-react";

export function CodeBlock({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    const text = ref.current?.textContent ?? "";
    navigator.clipboard.writeText(text.trimEnd());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative group my-6">
      <pre
        ref={ref}
        {...props}
        className="rounded-xl bg-white border border-gray-600 p-5 overflow-x-auto text-sm leading-relaxed font-mono text-black"
      >
        {children}
      </pre>
      <button
        onClick={handleCopy}
        type="button"
        aria-label="Copy code"
        className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-600 text-gray-200 text-xs font-medium opacity-0 group-hover:opacity-100 hover:bg-purple hover:text-white transition-all duration-200"
      >
        {copied ? (
          <><Check size={13} /> Copied</>
        ) : (
          <><Copy size={13} /> Copy</>
        )}
      </button>
    </div>
  );
}
