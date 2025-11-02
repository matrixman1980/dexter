import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductOverview from '@/components/ProductOverview';
import WhyHotels from '@/components/WhyHotels';
import Technology from '@/components/Technology';
import Design from '@/components/Design';
import UseCases from '@/components/UseCases';
import Comparison from '@/components/Comparison';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Navigation />
      <Hero />
      <ProductOverview />
      <WhyHotels />
      <Technology />
      <Design />
      <UseCases />
      <Comparison />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
