import { TextEffect } from "@/components/motion-primitives/text-effect";
import { Header } from "./components/header";
import { About } from "./components/about";
import Aurora from "@/components/reactbits/aurora";

export default function Home() {
  return (
    <div className={`w-full`}>
      <Aurora />
      <main className={`flex flex-col gap-10 justify-center h-auto min-w-2xl max-w-3xl mx-auto`}>
        <Header />
        <About />
      </main>
    </div>
  );
}
