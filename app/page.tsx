import { Header } from "@/components/Header";
import { Opening } from "@/components/Opening";
import { SelectedWork } from "@/components/SelectedWork";
import { IndependentStudies } from "@/components/IndependentStudies";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Opening />
        <SelectedWork />
        <IndependentStudies />
      </main>
      <Footer />
    </>
  );
}
