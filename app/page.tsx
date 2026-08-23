import { Header } from "@/components/Header";
import { Opening } from "@/components/Opening";
import { SelectedWork } from "@/components/SelectedWork";
import { IndependentStudies } from "@/components/IndependentStudies";
import { CuriousBuilds } from "@/components/CuriousBuilds";
import { Writing } from "@/components/Writing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Opening />
        <SelectedWork />
        <IndependentStudies />
        <CuriousBuilds />
        <Writing />
      </main>
      <Footer />
    </>
  );
}
