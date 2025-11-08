"use client";
import Header from "./(main)/components/layout/Header";
import HeroSection from "./(main)/components/layout/HeroSection";
import FeaturesSection from "./(main)/components/layout/FeaturesSection";
import StatsSection from "./(main)/components/layout/StatsSection";
import PopularSportSection from "./(main)/components/layout/PopularSportSection";
import PromoSection from "./(main)/components/layout/PromoSection";
import FeaturedVenuesSection from "./(main)/components/layout/FeaturedVenuesSection";
import TestiSection from "./(main)/components/layout/TestiSection";
import CtaSection from "./(main)/components/layout/CtaSection";
import Footer from "./(main)/components/layout/Footer";
import { useShallow } from "zustand/shallow";
import { useAuthStore } from "@/store/auth-store";
import LoadingPage from "@/components/fragments/LoadingPage";
import TenantPromotionModal from "@/components/modal/TenantModalPromotion";

export default function HomePage() {
  const { loading } = useAuthStore(
    useShallow((state) => {
      return {
        loading: state.loading,
      };
    })
  );

  if (loading) return <LoadingPage />;

  return (
    <div className="min-h-screen bg-white">
      <TenantPromotionModal />

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Popular Sports */}
      <PopularSportSection />

      {/* Promo Section */}
      <PromoSection />

      {/* Featured Venues */}
      <FeaturedVenuesSection />

      {/* Testimonials */}
      <TestiSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
