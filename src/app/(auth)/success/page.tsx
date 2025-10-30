"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthSuccessPage() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const role = params.get("role");

    if (role === "super_admin") router.push("/super");
    else if (role === "tenant_admin") router.push("/tenant");
    else router.push("/");
  }, [params, router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-gray-600 text-lg">Sedang mengarahkan...</p>
    </div>
  );
}
