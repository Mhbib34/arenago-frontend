"use client";

import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";
import Input from "@/components/fragments/Input";
import Message from "../components/Message";
import { useRouter } from "next/navigation";
import ButtonGoogleAuth from "../components/ButtonGoogleAuth";
import Divider from "../components/Divider";
import SubmitButton from "../components/SubmitButton";
import AuthRedirectText from "../components/AuthRedirectText";
import { motion } from "framer-motion";
import Form from "../components/Form";

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

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
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
            <Form message={message} handleSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Email atau nomor telepon"
                value={loginForm.identifier}
                onChange={(e) =>
                  handleLoginChange("identifier", e.target.value)
                }
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

              {/* Submit Button */}
              <SubmitButton mutation={mutation} mainText="Masuk" />
            </Form>
            {/* Divider */}
            <Divider />

            {/* Google Auth Button */}
            <ButtonGoogleAuth />

            <AuthRedirectText
              text="Belum punya akun?"
              linkText="Daftar sekarang"
              href="/register"
            />
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
    </motion.div>
  );
}
