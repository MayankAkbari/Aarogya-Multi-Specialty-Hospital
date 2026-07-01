import HeroSection from '@/components/home/HeroSection';
import QuickServicesGrid from '@/components/home/QuickServicesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import SpecialtiesSlider from '@/components/home/SpecialtiesSlider';
import DoctorShowcase from '@/components/home/DoctorShowcase';
import StatsCounters from '@/components/home/StatsCounters';
import FacilitiesShowcase from '@/components/home/FacilitiesShowcase';
import PackageComparison from '@/components/home/PackageComparison';
import TestimonialSection from '@/components/home/TestimonialSection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <QuickServicesGrid />
      <WhyChooseUs />
      <SpecialtiesSlider />
      <StatsCounters />
      <DoctorShowcase />
      <FacilitiesShowcase />
      <PackageComparison />
      <TestimonialSection />
    </div>
  );
}
