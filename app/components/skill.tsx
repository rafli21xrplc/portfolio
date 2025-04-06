import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import Image from "next/image";

export const Skill = () => {
  return (
    <>
      <section
        className={`flex flex-row min-w-3xl max-w-4xl items-center justify-center gap-4`}
      >
        <div className={`flex flex-col gap-5`}>
          <h1
            className={`text-[46px] leading-[18px] font-extrabold text-white`}
          >
            Skill
          </h1>
        <InfiniteSlider gap={0} reverse>
          <Image
            src="/assets/test.png"
            width={120}
            height={120}
            alt="Prada logo"
          />
          <Image
            src="/assets/test.png"
            width={120}
            height={120}
            alt="Prada logo"
          />
          <Image
            src="/assets/test.png"
            width={120}
            height={120}
            alt="Prada logo"
          />
          <Image
            src="/assets/test.png"
            width={120}
            height={120}
            alt="Prada logo"
          />
          <Image
            src="/assets/test.png"
            width={120}
            height={120}
            alt="Prada logo"
          />
          <Image
            src="/assets/test.png"
            width={120}
            height={120}
            alt="Prada logo"
          />
        </InfiniteSlider>
        </div>
      </section>
    </>
  );
};
