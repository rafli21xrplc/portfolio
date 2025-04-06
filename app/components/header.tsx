import { TextEffect } from "@/components/motion-primitives/text-effect";
import Image from "next/image";

export const Header = () => {
  return (
    <section
      className={`flex flex-row min-w-3xl max-w-4xl items-center justify-center gap-4`}
    >
      <div className={`flex flex-col gap-10 basis-2xl`}>
        <h1 className={`text-[46px] leading-[18px] font-extrabold text-white`}>
          Hi, I{`'`}m Surya 👋
        </h1>
        <TextEffect per="char" preset="fade">
          Fullstack & Mobile Developer Needed for Scalable App Development.
          building high quality website and app as well as collaboration. lets
          create impactful digital solutions.
        </TextEffect>
      </div>
      <div className={``}>
        <Image
          src="/assets/profile.png"
          width={150}
          height={150}
          alt="Picture of the author"
          className={`rounded-full`}
        />
      </div>
    </section>
  );
};
