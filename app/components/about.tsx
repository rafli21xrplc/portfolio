import { TextEffect } from "@/components/motion-primitives/text-effect";

export const About = () => {
  return (
    <>
      <section
        className={`flex flex-row min-w-3xl max-w-4xl items-center justify-center gap-4`}
      >
        <div className={`flex flex-col gap-5`}>
          <h1
            className={`text-[46px] leading-[18px] font-extrabold text-white`}
          >
            About
          </h1>
          <TextEffect per="char" preset="fade">
            With a strong educational background in IT and a focus on Fullstack
            and Mobile Development, my career is driven by a commitment to
            delivering high-quality digital solutions. I have a solid
            understanding of key programming concepts such as MVC architecture
            and SOLID principles, which allow me to create scalable,
            maintainable, and efficient applications. My success is reflected in
            the effectiveness, performance, and user satisfaction of the
            platforms I develop, showcasing my dedication to innovation and
            quality. As a Fullstack and Mobile Developer, I am highly
            collaborative and thrive in team environments, where I contribute my
            technical expertise while continuously learning to deliver impactful
            solutions.
          </TextEffect>
        </div>
      </section>
    </>
  );
};
