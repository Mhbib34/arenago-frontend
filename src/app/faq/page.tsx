"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  Search,
  Phone,
  Mail,
  Clock,
  CreditCard,
  Calendar,
  Users,
  HelpCircle,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const HelpPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = [
    "Semua",
    "Booking",
    "Pembayaran",
    "Akun",
    "Lapangan",
    "Lainnya",
  ];

  const faqs: FAQItem[] = [
    {
      category: "Booking",
      question: "Bagaimana cara melakukan booking lapangan?",
      answer:
        'Pilih jenis lapangan dan lokasi yang diinginkan, lalu pilih tanggal dan waktu yang tersedia. Setelah itu, klik tombol "Booking Sekarang" dan lanjutkan ke pembayaran.',
    },
    {
      category: "Booking",
      question: "Berapa lama waktu minimal booking?",
      answer:
        "Waktu minimal booking adalah 1 jam. Anda dapat memesan untuk durasi lebih lama sesuai ketersediaan.",
    },
    {
      category: "Booking",
      question: "Apakah saya bisa membatalkan booking?",
      answer:
        "Ya, Anda dapat membatalkan booking maksimal 24 jam sebelum waktu booking. Pembatalan akan diproses dan dana akan dikembalikan dalam 3-5 hari kerja.",
    },
    {
      category: "Pembayaran",
      question: "Metode pembayaran apa saja yang tersedia?",
      answer:
        "Kami menerima berbagai metode pembayaran termasuk transfer bank, e-wallet (GoPay, OVO, Dana), dan kartu kredit/debit.",
    },
    {
      category: "Pembayaran",
      question: "Apakah pembayaran aman?",
      answer:
        "Ya, semua transaksi pembayaran menggunakan gateway pembayaran yang terenkripsi dan aman sesuai standar industri.",
    },
    {
      category: "Pembayaran",
      question: "Bagaimana jika pembayaran saya gagal?",
      answer:
        "Jika pembayaran gagal, booking Anda tidak akan dikonfirmasi. Silakan coba lagi atau gunakan metode pembayaran lain. Dana tidak akan terpotong jika pembayaran gagal.",
    },
    {
      category: "Akun",
      question: "Bagaimana cara membuat akun?",
      answer:
        'Klik tombol "Daftar" di halaman utama, masukkan email, nomor telepon, dan buat password. Verifikasi email Anda untuk mengaktifkan akun.',
    },
    {
      category: "Akun",
      question: "Lupa password, bagaimana cara reset?",
      answer:
        'Klik "Lupa Password" di halaman login, masukkan email Anda, dan ikuti instruksi yang dikirimkan ke email untuk reset password.',
    },
    {
      category: "Lapangan",
      question: "Jenis lapangan apa saja yang tersedia?",
      answer:
        "Kami menyediakan berbagai jenis lapangan olahraga seperti futsal, badminton, basket, tenis, dan voli dengan berbagai ukuran dan fasilitas.",
    },
    {
      category: "Lapangan",
      question: "Apakah fasilitas tersedia di setiap lapangan?",
      answer:
        "Fasilitas bervariasi tergantung lokasi. Umumnya tersedia ruang ganti, toilet, parkir, dan kantin. Detail fasilitas dapat dilihat di halaman lapangan.",
    },
    {
      category: "Lainnya",
      question: "Bagaimana cara menghubungi customer service?",
      answer:
        "Anda dapat menghubungi kami melalui email, telepon, atau chat di aplikasi. Tim kami siap membantu Anda setiap hari dari pukul 08:00 - 22:00 WIB.",
    },
    {
      category: "Lainnya",
      question: "Apakah ada program membership?",
      answer:
        "Ya, kami memiliki program membership yang memberikan berbagai benefit seperti diskon booking, prioritas booking, dan poin reward.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "Semua" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle
            className="w-16 h-16 mx-auto mb-4"
            style={{ color: "#75070C" }}
          />
          <h1 className="text-4xl font-bold mb-4">Pusat Bantuan</h1>
          <p className="text-gray-300 text-lg">
            Temukan jawaban untuk pertanyaan Anda
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-2 flex items-center">
          <Search className="w-5 h-5 text-gray-400 ml-3" />
          <input
            type="text"
            placeholder="Cari pertanyaan atau topik..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 outline-none text-gray-700"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeCategory === category
                  ? "text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              style={{
                backgroundColor:
                  activeCategory === category ? "#75070C" : undefined,
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <div className="flex-1">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600 mr-3">
                    {faq.category}
                  </span>
                  <span className="text-gray-800 font-medium">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform shrink-0 ml-4 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                  style={{ color: "#75070C" }}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Tidak ada hasil yang ditemukan
            </p>
            <p className="text-gray-400 mt-2">
              Coba kata kunci lain atau hubungi customer service
            </p>
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Panduan Cepat</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Calendar className="w-10 h-10 mb-4" style={{ color: "#75070C" }} />
            <h3 className="font-semibold text-gray-800 mb-2">Cara Booking</h3>
            <p className="text-gray-600 text-sm">
              Pelajari langkah-langkah booking lapangan dengan mudah
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <CreditCard
              className="w-10 h-10 mb-4"
              style={{ color: "#75070C" }}
            />
            <h3 className="font-semibold text-gray-800 mb-2">
              Metode Pembayaran
            </h3>
            <p className="text-gray-600 text-sm">
              Lihat berbagai opsi pembayaran yang tersedia
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <Users className="w-10 h-10 mb-4" style={{ color: "#75070C" }} />
            <h3 className="font-semibold text-gray-800 mb-2">Kelola Akun</h3>
            <p className="text-gray-600 text-sm">
              Atur profil dan preferensi booking Anda
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Masih Butuh Bantuan?
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Tim customer service kami siap membantu Anda
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="text-center p-6 rounded-lg"
              style={{ backgroundColor: "#5B2E35" }}
            >
              <Phone className="w-8 h-8 mx-auto mb-3 text-white" />
              <h3 className="font-semibold text-white mb-2">Telepon</h3>
              <p className="text-gray-200 text-sm">+62 821-xxxx-xxxx</p>
            </div>
            <div
              className="text-center p-6 rounded-lg"
              style={{ backgroundColor: "#5B2E35" }}
            >
              <Mail className="w-8 h-8 mx-auto mb-3 text-white" />
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-200 text-sm">support@booking.com</p>
            </div>
            <div
              className="text-center p-6 rounded-lg"
              style={{ backgroundColor: "#5B2E35" }}
            >
              <Clock className="w-8 h-8 mx-auto mb-3 text-white" />
              <h3 className="font-semibold text-white mb-2">Jam Operasional</h3>
              <p className="text-gray-200 text-sm">08:00 - 22:00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
