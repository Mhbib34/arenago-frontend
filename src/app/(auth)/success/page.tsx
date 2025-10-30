"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

export default function AuthSuccessPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    // Show checkmark after brief delay
    setTimeout(() => setShowCheck(true), 300);

    // Redirect after animation
    const redirectTimeout = setTimeout(() => {
      const role = params.get("role");

      if (role === "super_admin") router.push("/super");
      else if (role === "tenant_admin") router.push("/tenant");
      else router.push("/");
    }, 1500);

    return () => clearTimeout(redirectTimeout);
  }, [params, router]);

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="text-center space-y-4">
        {/* Success Icon */}
        <div
          className={`inline-block transition-all duration-500 ${
            showCheck ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <div className="w-20 h-20 bg-linear-to-br from-primary to-[#5B2E35] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2.5} />
          </div>
        </div>

        {/* Text */}
        <div
          className={`transition-all duration-500 delay-200 ${
            showCheck ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Login Berhasil
          </h2>
          <p className="text-gray-600">Mengarahkan ke dashboard...</p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 pt-2">
          <div
            className="w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
