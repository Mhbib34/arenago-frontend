import { Star } from "lucide-react";

const TestiSection = () => {
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

  return (
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
              <p className="text-gray-700 mb-4 italic">{testimonial.comment}</p>
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
  );
};

export default TestiSection;
