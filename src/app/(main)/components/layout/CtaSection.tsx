import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-20 bg-linear-to-br from-primary to-[#5B2E35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ubah Lapanganmu Jadi Sumber Penghasilan!
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Gabung sebagai{" "}
          <span className="font-semibold">penyedia lapangan</span>
          dan biarkan ribuan pemain menemukan, memesan, dan berolahraga di
          tempatmu. Mudah, cepat, dan gratis!
        </p>
        <Link
          href="/tenant-register"
          className="px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
        >
          Daftar Sebagai Penyedia Lapangan
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
