"use client";
import { useState } from "react";
import { Mail, Lock, User, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import Input from "@/components/fragments/Input";
import ButtonGoogleAuth from "../components/ButtonGoogleAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";
import Divider from "../components/Divider";
import SubmitButton from "../components/SubmitButton";
import AuthRedirectText from "../components/AuthRedirectText";
import { motion } from "framer-motion";
import Form from "../components/Form";

interface RegisterErrors {
  full_name?: string;
  email?: string;
  phone?: string;
  password?: string;
}

export default function RegisterPage() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [message, setMessage] = useState({ type: "", text: "" });

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await axiosInstance.post("/auth/register", data);
      return res.data;
    },
    onSuccess: (data) => {
      setMessage({ type: "success", text: "Login berhasil!" });
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        password: "",
      });
      queryClient.invalidateQueries({ queryKey: ["users"] });
      console.log("Register success:", data);

      router.push("/login");
    },
    //eslint-disable-next-line
    onError: (error: any) => {
      console.log(error);
      const msg = "Email, nomor telepon atau password salah.";
      setMessage({ type: "error", text: msg });
    },
  });

  const handleRegisterChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateRegister = () => {
    const newErrors: RegisterErrors = {};

    if (!formData.full_name.trim()) {
      newErrors.full_name = "Nama lengkap wajib diisi.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon wajib diisi.";
    }

    if (!formData.password) {
      newErrors.password = "Password wajib diisi.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateRegister()) return;
    mutation.mutate(formData);
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="min-h-screen flex bg-white">
        {/* Left Side - Image/Illustration */}
        <div className="hidden lg:flex flex-1 bg-linear-to-br from-primary to-[#5B2E35] items-center justify-center p-12">
          <div className="max-w-lg">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">
                Mulai Perjalanan Anda
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Bergabunglah dengan ribuan pengguna yang sudah mempercayai
                platform kami untuk booking lapangan olahraga.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Proses pendaftaran cepat & mudah</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Akses ke semua fasilitas</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Notifikasi booking otomatis</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Logo/Brand */}
            <div className="mb-8">
              <div className="w-12 h-12 bg-linear-to-br from-primary to-[#5B2E35] rounded-xl mb-4 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Buat Akun Baru
              </h1>
              <p className="text-gray-600">
                Daftar untuk mulai booking lapangan
              </p>
            </div>

            {/* Register Form */}
            <Form message={message} handleSubmit={handleSubmit}>
              {/* Name Input */}
              <Input
                type="text"
                placeholder="Nama Lengkap"
                value={formData.full_name}
                onChange={(e) =>
                  handleRegisterChange("full_name", e.target.value)
                }
                Icon={User}
                error={errors.full_name}
                disabled={mutation.isPending}
              />

              {/* Email Input */}
              <Input
                type="email"
                placeholder="youremail@example.com"
                value={formData.email}
                onChange={(e) => handleRegisterChange("email", e.target.value)}
                Icon={Mail}
                error={errors.email}
                disabled={mutation.isPending}
              />

              {/* Phone Input */}
              <Input
                type="text"
                placeholder="+6281234567890"
                value={formData.phone}
                onChange={(e) => handleRegisterChange("phone", e.target.value)}
                Icon={Phone}
                error={errors.phone}
                disabled={mutation.isPending}
              />

              {/* Password Input */}
              <Input
                placeholder="********"
                value={formData.password}
                onChange={(e) =>
                  handleRegisterChange("password", e.target.value)
                }
                Icon={Lock}
                error={errors.password}
                showPasswordToggle={true}
                showPassword={showPassword}
                onTogglePassword={() => setShowPassword(!showPassword)}
                disabled={mutation.isPending}
              />

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-4 h-4 mt-1 rounded border-gray-300 bg-gray-50 text-primary focus:ring-primary focus:ring-offset-0"
                />
                <span className="ml-2 text-sm text-gray-600">
                  Saya menyetujui{" "}
                  <button className="text-primary hover:text-[#5B2E35] font-semibold transition-colors">
                    syarat dan ketentuan
                  </button>{" "}
                  serta{" "}
                  <button className="text-primary hover:text-[#5B2E35] font-semibold transition-colors">
                    kebijakan privasi
                  </button>
                </span>
              </div>

              {/* Submit Button */}
              <SubmitButton mutation={mutation} mainText="Daftar sekarang" />
            </Form>

            {/* Divider */}
            <Divider />

            {/* Google Auth Button */}
            <ButtonGoogleAuth />

            {/* Login Link */}
            <AuthRedirectText
              text="Sudah punya akun?"
              linkText="Masuk disini"
              href="/login"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
