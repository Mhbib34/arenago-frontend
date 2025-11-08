"use client";
import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Filter,
  Search,
  X,
  CheckCircle,
  XCircle,
  AlertCircle,
  Download,
  Eye,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

interface Booking {
  id: string;
  fieldName: string;
  fieldType: string;
  location: string;
  date: string;
  time: string;
  duration: number;
  price: number;
  status: "upcoming" | "completed" | "cancelled";
  bookingDate: string;
  paymentMethod: string;
}

const BookingHistoryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "upcoming" | "completed" | "cancelled"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const bookings: Booking[] = [
    {
      id: "BKG001",
      fieldName: "Lapangan Futsal A",
      fieldType: "Futsal",
      location: "Sport Center Medan, Jl. Gatot Subroto",
      date: "2025-11-05",
      time: "16:00 - 18:00",
      duration: 2,
      price: 200000,
      status: "upcoming",
      bookingDate: "2025-10-28",
      paymentMethod: "GoPay",
    },
    {
      id: "BKG002",
      fieldName: "Lapangan Badminton 3",
      fieldType: "Badminton",
      location: "Arena Badminton Pro, Jl. SM Raja",
      date: "2025-11-08",
      time: "09:00 - 10:00",
      duration: 1,
      price: 80000,
      status: "upcoming",
      bookingDate: "2025-10-29",
      paymentMethod: "OVO",
    },
    {
      id: "BKG003",
      fieldName: "Lapangan Basket Indoor",
      fieldType: "Basket",
      location: "Hall Olahraga Setia Budi",
      date: "2025-10-25",
      time: "18:00 - 20:00",
      duration: 2,
      price: 250000,
      status: "completed",
      bookingDate: "2025-10-20",
      paymentMethod: "Transfer Bank",
    },
    {
      id: "BKG004",
      fieldName: "Lapangan Futsal B",
      fieldType: "Futsal",
      location: "Sport Center Medan, Jl. Gatot Subroto",
      date: "2025-10-20",
      time: "19:00 - 21:00",
      duration: 2,
      price: 200000,
      status: "completed",
      bookingDate: "2025-10-15",
      paymentMethod: "Dana",
    },
    {
      id: "BKG005",
      fieldName: "Lapangan Voli Pantai",
      fieldType: "Voli",
      location: "Belawan Beach Sport",
      date: "2025-10-18",
      time: "15:00 - 16:00",
      duration: 1,
      price: 150000,
      status: "cancelled",
      bookingDate: "2025-10-12",
      paymentMethod: "GoPay",
    },
    {
      id: "BKG006",
      fieldName: "Lapangan Tenis Court 2",
      fieldType: "Tenis",
      location: "Medan Tennis Club, Jl. Sisingamangaraja",
      date: "2025-10-15",
      time: "07:00 - 09:00",
      duration: 2,
      price: 180000,
      status: "completed",
      bookingDate: "2025-10-10",
      paymentMethod: "Kartu Kredit",
    },
  ];

  const filteredBookings = bookings.filter((booking) => {
    const matchesTab = activeTab === "all" || booking.status === activeTab;
    const matchesSearch =
      booking.fieldName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.fieldType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white">
            <AlertCircle className="w-3 h-3" />
            Akan Datang
          </span>
        );
      case "completed":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
            <CheckCircle className="w-3 h-3" />
            Selesai
          </span>
        );
      case "cancelled":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
            <XCircle className="w-3 h-3" />
            Dibatalkan
          </span>
        );
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const tabCounts = {
    all: bookings.length,
    upcoming: bookings.filter((b) => b.status === "upcoming").length,
    completed: bookings.filter((b) => b.status === "completed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white pb-8 ">
        <div className="mx-auto md:px-8 px-4 pt-4 pb-16">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/"
                    className="text-lg font-medium text-white/70 hover:text-white"
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-lg font-medium text-white">
                  Riwayat Booking
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="mx-auto md:px-8 px-4">
          <h1 className="text-3xl font-bold mb-2 text-center">
            Riwayat Booking
          </h1>
          <p className="text-gray-300 text-center">
            Kelola dan lihat semua riwayat booking Anda
          </p>
        </div>
      </div>

      <div className=" mx-auto md:px-8 px-4 py-8">
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex items-center bg-gray-50 rounded-lg px-4 py-2">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Cari lapangan atau lokasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-700"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="ml-2">
                <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6 overflow-x-auto">
          <div className="flex border-b border-gray-200">
            {[
              { key: "all", label: "Semua" },
              { key: "upcoming", label: "Akan Datang" },
              { key: "completed", label: "Selesai" },
              { key: "cancelled", label: "Dibatalkan" },
            ].map((tab) => (
              <button
                key={tab.key}
                //eslint-disable-next-line
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-1 min-w-max px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? "border-b-2 text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                style={{
                  borderBottomColor:
                    activeTab === tab.key ? "#75070C" : "transparent",
                }}
              >
                {tab.label}
                <span className="ml-2 px-2 py-1 rounded-full text-xs bg-gray-100">
                  {tabCounts[tab.key as keyof typeof tabCounts]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Booking Cards */}
        <div className="space-y-4">
          {filteredBookings.length === 0 ? (
            <div className="bg-white rounded-lg p-12 text-center">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Tidak ada booking
              </h3>
              <p className="text-gray-500">
                Belum ada riwayat booking yang sesuai dengan pencarian Anda
              </p>
            </div>
          ) : (
            filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {booking.fieldName}
                          </h3>
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                            {booking.fieldType}
                          </span>
                        </div>
                        {getStatusBadge(booking.status)}
                      </div>

                      <div className="space-y-2 mt-4">
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="w-4 h-4 mr-2 shrink-0 text-primary" />
                          <span>{booking.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Calendar className="w-4 h-4 mr-2 shrink-0 text-primary" />
                          <span>{formatDate(booking.date)}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Clock className="w-4 h-4 mr-2 shrink-0 text-primary" />
                          <span>
                            {booking.time} ({booking.duration} jam)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="md:text-right">
                      <p className="text-sm text-gray-500 mb-1">
                        Total Pembayaran
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {formatCurrency(booking.price)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        via {booking.paymentMethod}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedBooking(booking)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-primary text-white cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      Lihat Detail
                    </button>

                    {booking.status === "upcoming" && (
                      <button
                        className="flex items-center
                      cursor-pointer gap-2 px-4 py-2 rounded-lg border text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors border-[#5B2E35]"
                      >
                        Batalkan Booking
                      </button>
                    )}

                    {(booking.status === "completed" ||
                      booking.status === "cancelled") && (
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                        <Download className="w-4 h-4" />
                        Invoice
                      </button>
                    )}

                    {booking.status === "completed" && (
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                        Booking Lagi
                      </button>
                    )}
                  </div>
                </div>

                <div className="bg-gray-50 px-6 py-3 text-xs text-gray-500 border-t border-gray-100">
                  ID Booking: {booking.id} • Dibuat pada{" "}
                  {formatDate(booking.bookingDate)}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedBooking && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedBooking(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Detail Booking
              </h2>
              <button
                onClick={() => setSelectedBooking(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6">
                {getStatusBadge(selectedBooking.status)}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-3">
                    Informasi Lapangan
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <p className="text-lg font-bold text-gray-900">
                      {selectedBooking.fieldName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {selectedBooking.fieldType}
                    </p>
                    <p className="text-sm text-gray-600">
                      {selectedBooking.location}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-3">
                    Jadwal Booking
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Tanggal</span>
                      <span className="text-sm font-medium text-gray-900">
                        {formatDate(selectedBooking.date)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Waktu</span>
                      <span className="text-sm font-medium text-gray-900">
                        {selectedBooking.time}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Durasi</span>
                      <span className="text-sm font-medium text-gray-900">
                        {selectedBooking.duration} jam
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-3">
                    Pembayaran
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Metode Pembayaran
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {selectedBooking.paymentMethod}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Harga per jam
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {formatCurrency(
                          selectedBooking.price / selectedBooking.duration
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="text-sm font-semibold text-gray-900">
                        Total
                      </span>
                      <span className="text-lg font-bold text-primary">
                        {formatCurrency(selectedBooking.price)}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-3">
                    Informasi Lainnya
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">ID Booking</span>
                      <span className="text-sm font-medium text-gray-900">
                        {selectedBooking.id}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Tanggal Booking
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {formatDate(selectedBooking.bookingDate)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  className="flex-1 px-4 py-3 rounded-lg text-white font-medium transition-colors"
                  style={{ backgroundColor: "#75070C" }}
                >
                  <Download className="w-4 h-4 inline mr-2" />
                  Download Invoice
                </button>
                {selectedBooking.status === "upcoming" && (
                  <button
                    className="flex-1 px-4 py-3 rounded-lg border font-medium transition-colors hover:bg-gray-50"
                    style={{ borderColor: "#5B2E35", color: "#5B2E35" }}
                  >
                    Batalkan Booking
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingHistoryPage;
