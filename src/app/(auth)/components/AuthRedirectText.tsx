// src/app/(auth)/components/AuthRedirectText.tsx
import Link from "next/link";

interface AuthRedirectTextProps {
  text: string;
  linkText: string;
  href: string;
}

export default function AuthRedirectText({
  text,
  linkText,
  href,
}: AuthRedirectTextProps) {
  return (
    <p className="text-center text-gray-600">
      {text}{" "}
      <Link
        href={href}
        className="text-primary hover:text-[#5B2E35] font-semibold transition-colors"
      >
        {linkText}
      </Link>
    </p>
  );
}
