import { TextEffect } from "@/components/motion-primitives/text-effect";

export default function Home() {
  return (
    <div className={`w-full h-screen flex justify-center items-center`}>
      <TextEffect per="char" preset="fade">
        PORTFOLIO
      </TextEffect>
    </div>
  );
}