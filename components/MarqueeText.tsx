"use client";

export function MarqueeText({ text }: { text: string }) {
  return (
    <div className="overflow-hidden whitespace-nowrap py-3 bg-white rounded-full border border-gray-600 my-8">
      <p className="inline-block animate-marquee font-medium text-gray-200 font-basic text-sm tracking-wide">
        {text} &nbsp;&nbsp;·&nbsp;&nbsp; {text} &nbsp;&nbsp;·&nbsp;&nbsp; {text}
      </p>
    </div>
  );
}
