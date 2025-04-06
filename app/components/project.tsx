import { CardUI } from "@/components/aceternity/card";

export const Project = () => {
  return (
    <>
      <section
        className={`flex flex-row min-w-3xl max-w-4xl items-center justify-center gap-4`}
      >
        <div className={`flex flex-col gap-5`}>
          <h1
            className={`text-[46px] leading-[18px] font-extrabold text-white`}
          >
            Project
          </h1>
         <div className={`flex flex-row gap-5 flex-wrap justify-center`}>
            <CardUI />
            <CardUI />
            <CardUI />
            <CardUI />
         </div>
        </div>
      </section>
    </>
  );
};
