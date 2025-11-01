const CtaSection = () => {
  return (
    <section className="py-16 md:py-20 bg-linear-to-br from-primary to-[#5B2E35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Siap Mulai Booking Lapangan?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Bergabung dengan ribuan pengguna lainnya dan nikmati kemudahan booking
          lapangan olahraga
        </p>
        <button className="px-8 py-4 bg-white text-primafrom-primary rounded-lg font-bold text-lg hover:shadow-xl transition-all">
          Daftar Gratis Sekarang
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
