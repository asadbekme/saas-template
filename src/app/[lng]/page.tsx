import {
  Header,
  Home,
  Sponsors,
  Features,
  Pricing,
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
      </main>
    </>
  );
}
