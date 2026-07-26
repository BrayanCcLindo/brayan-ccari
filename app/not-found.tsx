import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold font-heading text-purple mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-black mb-3">Page not found</h2>
      <p className="text-gray-200 mb-8 max-w-sm">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-purple text-gray-50 rounded-2xl font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200"
      >
        <ArrowLeft size={18} /> Back to Home
      </Link>
    </div>
  );
}
