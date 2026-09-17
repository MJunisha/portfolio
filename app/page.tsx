import { Header } from "@/components/Header";
import { Opening } from "@/components/Opening";
import { SelectedWork } from "@/components/SelectedWork";
import { IndependentStudies } from "@/components/IndependentStudies";
import { Advisory } from "@/components/Advisory";
import { QuoteFeed } from "@/components/QuoteFeed";
import { Footer } from "@/components/Footer";
import { FooterReveal } from "@/components/FooterReveal";
import { TestimonialSeparator } from "@/components/TestimonialSeparator";
import { testimonials, type TestimonialPosition } from "@/lib/testimonials";

function testimonialAt(position: TestimonialPosition) {
  const testimonial = testimonials.find((t) => t.position === position);
  if (!testimonial) return null;
  return <TestimonialSeparator {...testimonial} />;
}

export default function Home() {
  return (
    <>
      <Header />
      <FooterReveal footer={<Footer />}>
        <Opening />
        {testimonialAt("opening-work")}
        <SelectedWork />
        {testimonialAt("work-studies")}
        <IndependentStudies />
        {testimonialAt("studies-advisory")}
        <Advisory />
        {testimonialAt("advisory-footer")}
        <QuoteFeed />
      </FooterReveal>
    </>
  );
}
