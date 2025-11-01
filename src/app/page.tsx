"use client";
import { useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  ChevronRight,
  Menu,
  X,
  User,
  Star,
  Shield,
  Zap,
  Award,
  CheckCircle,
  TrendingUp,
  Users,
  Phone,
  Mail,
} from "lucide-react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  // Sample data
  const popularSports = [
    { name: "Futsal", icon: "⚽", count: 45, venues: 38 },
    { name: "Basket", icon: "🏀", count: 32, venues: 25 },
    { name: "Badminton", icon: "🏸", count: 28, venues: 42 },
    { name: "Tenis", icon: "🎾", count: 18, venues: 15 },
    { name: "Voli", icon: "🏐", count: 22, venues: 18 },
  ];

  const featuredVenues = [
    {
      id: 1,
      name: "Arena Sport Center",
      location: "Jakarta Selatan",
      image: "🏟️",
      rating: 4.8,
      reviews: 124,
      price: 150000,
      sports: ["Futsal", "Basket"],
      facilities: ["Parkir", "Kantin", "Musholla", "Toilet"],
      openHours: "06:00 - 23:00",
      verified: true,
    },
    {
      id: 2,
      name: "Champion Courts",
      location: "Jakarta Pusat",
      image: "🏟️",
      rating: 4.6,
      reviews: 98,
      price: 120000,
      sports: ["Badminton", "Tenis"],
      facilities: ["Parkir", "Kantin", "AC"],
      openHours: "07:00 - 22:00",
      verified: true,
    },
    {
      id: 3,
      name: "Victory Field",
      location: "Jakarta Barat",
      image: "🏟️",
      rating: 4.9,
      reviews: 156,
      price: 180000,
      sports: ["Futsal"],
      facilities: ["Parkir", "Kantin", "Musholla", "Ruang Ganti"],
      openHours: "06:00 - 24:00",
      verified: true,
    },
    {
      id: 4,
      name: "Premium Sports Hub",
      location: "Jakarta Timur",
      image: "🏟️",
      rating: 4.7,
      reviews: 89,
      price: 200000,
      sports: ["Basket", "Voli"],
      facilities: ["Parkir", "Kantin", "AC", "Locker"],
      openHours: "08:00 - 23:00",
      verified: true,
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Booking Instan",
      description: "Proses booking cepat dalam hitungan detik tanpa ribet",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pembayaran Aman",
      description: "Sistem pembayaran terenkripsi dan terpercaya",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Lapangan Verified",
      description: "Semua lapangan telah diverifikasi dan berkualitas",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Support",
      description: "Tim support siap membantu 24/7",
    },
  ];

  const stats = [
    { label: "Lapangan Terdaftar", value: "500+" },
    { label: "Pengguna Aktif", value: "50K+" },
    { label: "Booking Sukses", value: "100K+" },
    { label: "Kota Terjangkau", value: "25+" },
  ];

  const testimonials = [
    {
      name: "Ahmad Rizki",
      role: "Pengguna Aktif",
      rating: 5,
      comment:
        "Sangat memudahkan untuk booking lapangan futsal. Prosesnya cepat dan pembayaran aman!",
      avatar: "👨",
    },
    {
      name: "Siti Nurhaliza",
      role: "Atlet Badminton",
      rating: 5,
      comment:
        "Aplikasi terbaik untuk cari lapangan badminton. Banyak pilihan dan harga transparan.",
      avatar: "👩",
    },
    {
      name: "Budi Santoso",
      role: "Team Manager",
      rating: 5,
      comment:
        "Booking untuk tim basket jadi mudah. Bisa pilih jam dan langsung konfirmasi. Recommended!",
      avatar: "👨",
    },
  ];

  const promoOffers = [
    {
      title: "Diskon 30% Pengguna Baru",
      description: "Khusus booking pertama",
      code: "NEWUSER30",
      bgColor: "from-blue-500 to-blue-600",
    },
    {
      title: "Promo Weekend",
      description: "Setiap Sabtu-Minggu",
      code: "WEEKEND20",
      bgColor: "from-purple-500 to-purple-600",
    },
    {
      title: "Cashback 50K",
      description: "Min. booking 3x",
      code: "CASHBACK50",
      bgColor: "from-green-500 to-green-600",
    },
  ];

  const handleSearch = () => {
    console.log("Searching:", { searchQuery, selectedDate, selectedLocation });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-br from-primary to-[#5B2E35] rounded-lg flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">SportBook</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-gray-700 hover:text-primafrom-primary transition-colors font-medium"
              >
                Beranda
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primafrom-primary transition-colors font-medium"
              >
                Lapangan
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primafrom-primary transition-colors font-medium"
              >
                Promo
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-primafrom-primary transition-colors font-medium"
              >
                Booking Saya
              </a>
              <a
                href="/faq"
                className="text-gray-700 hover:text-primafrom-primary transition-colors font-medium"
              >
                Bantuan
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-gray-700 hover:text-primafrom-primary transition-colors font-medium">
                Masuk
              </button>
              <button className="px-5 py-2 bg-linear-to-r from-primary to-[#5B2E35] text-white rounded-lg hover:opacity-90 transition-opacity font-medium">
                Daftar Gratis
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-gray-700 hover:text-primafrom-primary font-medium"
                >
                  Beranda
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primafrom-primary font-medium"
                >
                  Lapangan
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primafrom-primary font-medium"
                >
                  Promo
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primafrom-primary font-medium"
                >
                  Booking Saya
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-primafrom-primary font-medium"
                >
                  Bantuan
                </a>
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-medium">
                    Masuk
                  </button>
                  <button className="flex-1 px-4 py-2 bg-linear-to-r from-primary to-[#5B2E35] text-white rounded-lg font-medium">
                    Daftar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-linear-to-br from-gray-50 via-white to-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primafrom-primary/10 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-primafrom-primary" />
              <span className="text-sm font-semibold text-primafrom-primary">
                Trending #1 Booking Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Booking Lapangan Olahraga
              <span className="block text-primafrom-primary">
                Jadi Lebih Mudah
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Temukan dan pesan lapangan olahraga favorit Anda dengan cepat,
              mudah, dan aman. Lebih dari 500+ lapangan siap Anda booking!
            </p>
          </div>

          {/* Search Box */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Sport/Venue Search */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cari Lapangan
                </label>
                <Search className="absolute left-3 bottom-3 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Futsal, Basket, Badminton..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primafrom-primary focus:ring-2 focus:ring-primafrom-primary/20"
                />
              </div>

              {/* Location */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lokasi
                </label>
                <MapPin className="absolute left-3 bottom-3 text-gray-400 w-5 h-5" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primafrom-primary focus:ring-2 focus:ring-primafrom-primary/20 appearance-none bg-white"
                >
                  <option value="">Semua Lokasi</option>
                  <option value="jakarta-selatan">Jakarta Selatan</option>
                  <option value="jakarta-pusat">Jakarta Pusat</option>
                  <option value="jakarta-barat">Jakarta Barat</option>
                  <option value="jakarta-timur">Jakarta Timur</option>
                  <option value="jakarta-utara">Jakarta Utara</option>
                </select>
              </div>

              {/* Date */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal Main
                </label>
                <Calendar className="absolute left-3 bottom-3 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primafrom-primary focus:ring-2 focus:ring-primafrom-primary/20"
                />
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="w-full mt-4 py-3 bg-linear-to-r from-primary to-[#5B2E35] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
            >
              <Search className="w-5 h-5" />
              Cari Lapangan Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-linear-to-r from-primary to-[#5B2E35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kenapa Pilih SportBook?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pengalaman booking terbaik untuk Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-primafrom-primary"
              >
                <div className="w-14 h-14 bg-linear-to-br from-primary to-[#5B2E35] rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Sports */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Olahraga Populer
            </h2>
            <p className="text-lg text-gray-600">
              Pilih olahraga favorit Anda dan temukan lapangan terbaik
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {popularSports.map((sport) => (
              <button
                key={sport.name}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primafrom-primary hover:shadow-lg transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {sport.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {sport.name}
                </h3>
                <p className="text-sm text-gray-600">{sport.count} lapangan</p>
                <p className="text-xs text-gray-500 mt-1">
                  {sport.venues} venue
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Promo Spesial Bulan Ini
            </h2>
            <p className="text-lg text-gray-600">
              Dapatkan penawaran terbaik untuk booking lapangan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promoOffers.map((promo, index) => (
              <div
                key={index}
                className={`bg-linear-to-br ${promo.bgColor} rounded-xl p-6 text-white`}
              >
                <h3 className="text-2xl font-bold mb-2">{promo.title}</h3>
                <p className="text-white/90 mb-4">{promo.description}</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                  <span className="font-mono font-bold">{promo.code}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Lapangan Terpopuler
              </h2>
              <p className="text-gray-600">Dipilih oleh ribuan pengguna</p>
            </div>
            <button className="text-primafrom-primary hover:text-[#5B2E35] font-semibold flex items-center gap-1">
              Lihat Semua
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVenues.map((venue) => (
              <div
                key={venue.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-linear-to-br from-primary to-[#5B2E35] flex items-center justify-center text-6xl relative">
                  {venue.image}
                  {venue.verified && (
                    <div className="absolute top-3 right-3 bg-white rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-primafrom-primary" />
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {venue.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{venue.location}</span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{venue.rating}</span>
                      <span className="text-gray-500 text-sm">
                        ({venue.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{venue.openHours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {venue.sports.map((sport) => (
                      <span
                        key={sport}
                        className="px-2 py-1 bg-primafrom-primary/10 text-primafrom-primary text-xs rounded-full font-medium"
                      >
                        {sport}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-gray-100 pt-3 mb-4">
                    <div className="text-xs text-gray-600 mb-2">Fasilitas:</div>
                    <div className="flex flex-wrap gap-2">
                      {venue.facilities.slice(0, 3).map((facility) => (
                        <span key={facility} className="text-xs text-gray-500">
                          • {facility}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-600 block">
                        Mulai dari
                      </span>
                      <div className="text-lg font-bold text-primafrom-primary">
                        Rp {venue.price.toLocaleString("id-ID")}
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-linear-to-r from-primary to-[#5B2E35] text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kata Mereka Tentang Kami
            </h2>
            <p className="text-lg text-gray-600">
              Testimoni dari pengguna setia SportBook
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-primary to-[#5B2E35] rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-linear-to-br from-primary to-[#5B2E35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Mulai Booking Lapangan?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Bergabung dengan ribuan pengguna lainnya dan nikmati kemudahan
            booking lapangan olahraga
          </p>
          <button className="px-8 py-4 bg-white text-primafrom-primary rounded-lg font-bold text-lg hover:shadow-xl transition-all">
            Daftar Gratis Sekarang
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-linear-to-br from-primary to-[#5B2E35] rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold">SportBook</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Platform booking lapangan olahraga #1 di Indonesia. Mudah,
                cepat, dan terpercaya.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  📱
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  📘
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  🐦
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cari Lapangan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cara Booking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Promo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Partner Venue
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Bantuan</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hubungi Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Syarat & Ketentuan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kebijakan Privasi
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; 2024 SportBook. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Syarat Layanan
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
