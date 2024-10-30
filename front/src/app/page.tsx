import { Hero } from "./components/hero";
import { Header } from "./components/header";
import { ItemsContainer } from "./components/items-container";
import { getBento } from "@/lib/get-bento";

export default async function Home() {
  const bento = await getBento();
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-[100dvh] font-[family-name:var(--font-geist-sans)]">
      <Header bento={bento} />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <ItemsContainer />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
