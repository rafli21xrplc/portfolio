import AnimatedList from "@/components/reactbits/animateList";


const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
];

export const Experience = () => {
  return (
    <>
      <section
        className={`flex flex-row min-w-3xl max-w-4xl items-center justify-center gap-4`}
      >
        <div className={`flex flex-col gap-5 w-full`}>
          <h1
            className={`text-[46px] leading-[18px] font-extrabold text-white`}
          >
            Work Experience
          </h1>
          <AnimatedList
            items={items}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients={true}
            enableArrowNavigation={true}
            displayScrollbar={true}
          />
        </div>
      </section>
    </>
  );
};
