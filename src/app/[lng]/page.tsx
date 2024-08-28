import {
  Header,
  Home,
  Sponsors,
  Features,
  Pricing,
  FAQ,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Sponsors />
        <Features />
        <Pricing />
        <FAQ />
      </main>
    </>
  );
}
