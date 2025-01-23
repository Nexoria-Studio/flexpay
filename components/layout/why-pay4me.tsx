import { whyPay4me } from "@/data/why-pay4me.data";
import { Heading, SectionTitle } from "../ui/text";
import cn from "@/utils/cn";

export default function WhyPay4Me() {
  return (
    <section className="mb-6" id="about">
      <SectionTitle className="text-center text-primary mb-16">
        Why choose FlexiPay?
      </SectionTitle>

      <div className="w-full flex flex-col gap-12">
        {whyPay4me.map(({ desc, Illustration, title }, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center justify-center flex-col lg:flex-row gap-4 lg:gap-20 xl:gap-32 relative",
              {
                "lg:flex-row-reverse": i % 2 == 1,
              }
            )}
          >
            <Illustration className="w-full lg:w-1/2 h-auto relative z-[5]" />
            <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8 relative z-[5]">
              <Heading className="text-6xl font-bold">{title}</Heading>
              <p>{desc}</p>
            </div>

            <div
              className={cn(
                "absolute top-0 right-0 w-full h-auto lg:h-full lg:w-auto aspect-square bg-gradient rounded-full translate-x-1/2 -translate-y-1/4 z-[3]",
                {
                  "left-0 right-auto -translate-x-1/2": i % 2 == 1,
                }
              )}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
