import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <header className="container">
      <div className="py-3 flex justify-between items-center">
        <h2>Home page</h2>
        <ModeToggle />
      </div>
    </header>
  );
}
