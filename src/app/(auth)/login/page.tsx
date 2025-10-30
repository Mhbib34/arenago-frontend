"use client";

import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";
import Input from "@/components/fragments/Input";
import Message from "../components/Message";
import { useRouter } from "next/navigation";

interface LoginErrors {
  identifier?: string;
  password?: string;
}

export default function LoginPage() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [loginForm, setLoginForm] = useState({
    identifier: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});
  const [message, setMessage] = useState({ type: "", text: "" });

  const mutation = useMutation({
    mutationFn: async (data: typeof loginForm) => {
      const res = await axiosInstance.post("/auth/login", data);
      return res.data;
    },
    onSuccess: (data) => {
      setMessage({ type: "success", text: "Login berhasil!" });
      setLoginForm({ identifier: "", password: "" });
      queryClient.invalidateQueries({ queryKey: ["users"] });
      console.log("Login success:", data);

      if (data.data.role === "super_admin") {
        router.push("/super");
      } else if (data.data.role === "tenant_admin") {
        router.push("/tenant");
      } else {
        router.push("/");
      }
    },
    //eslint-disable-next-line
    onError: (error: any) => {
      console.log(error);
      const msg = "Email, nomor telepon atau password salah.";
      setMessage({ type: "error", text: msg });
    },
  });

  const handleLoginChange = (field: keyof typeof loginForm, value: string) => {
    setLoginForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateLogin = () => {
    const newErrors: LoginErrors = {};

    if (!loginForm.identifier.trim()) {
      newErrors.identifier = "Email atau nomor telepon wajib diisi.";
    }

    if (!loginForm.password) {
      newErrors.password = "Password wajib diisi.";
    } else if (loginForm.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateLogin()) return;
    mutation.mutate(loginForm);
  };

  const handleLoginWithGoogle = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google`;
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-12 h-12 bg-linear-to-br from-primary to-[#5B2E35] rounded-xl mb-4 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Selamat Datang
            </h1>
            <p className="text-gray-600">
              Masuk ke akun Anda untuk melanjutkan
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <Message type={message.type} text={message.text} />

            <Input
              type="text"
              placeholder="Email atau nomor telepon"
              value={loginForm.identifier}
              onChange={(e) => handleLoginChange("identifier", e.target.value)}
              Icon={Mail}
              error={errors.identifier}
              disabled={mutation.isPending}
            />

            <Input
              placeholder="Password"
              value={loginForm.password}
              onChange={(e) => handleLoginChange("password", e.target.value)}
              Icon={Lock}
              error={errors.password}
              showPasswordToggle={true}
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
              disabled={mutation.isPending}
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 bg-gray-50 text-primary focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-600">Ingat saya</span>
              </label>
              <button
                type="button"
                className="text-sm text-primary hover:text-[#5B2E35] transition-colors"
              >
                Lupa password?
              </button>
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full bg-linear-to-r from-primary to-[#5B2E35] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group cursor-pointer"
            >
              {mutation.isPending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Memproses...</span>
                </>
              ) : (
                <>
                  <span>Masuk</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">atau</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <button
            type="button"
            onClick={handleLoginWithGoogle}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:shadow-sm transition mb-6 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-700">
              Masuk dengan Google
            </span>
          </button>

          <p className="text-center text-gray-600">
            Belum punya akun?{" "}
            <button className="text-primary hover:text-[#5B2E35] font-semibold transition-colors">
              Daftar sekarang
            </button>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex flex-1 bg-linear-to-br from-primary to-[#5B2E35] items-center justify-center p-12">
        <div className="max-w-lg">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-4">
              Booking Lapangan Olahraga Jadi Mudah
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Platform terpercaya untuk memesan lapangan olahraga favorit Anda
              dengan mudah dan cepat.
            </p>
            <ul className="space-y-3 text-white/90">
              {[
                "Booking real-time 24/7",
                "Pembayaran aman & mudah",
                "Berbagai pilihan lapangan",
              ].map((text) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
