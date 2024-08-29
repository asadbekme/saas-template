import {
  Header,
  Home,
  Sponsors,
  Features,
  Pricing,
  FAQ,
  Sale,
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
        <Sale />
      </main>
    </>
  );
}
