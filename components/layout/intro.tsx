import React from "react";
import { Heading, SectionTitle } from "../ui/text";
import { Button } from "../ui/button";
import { IphoneMockup, GlobeConnection, TechStars } from "../svg";
import { downloads } from "@/data/downloads.data";
import Image from "next/image";
import cn from "@/utils/cn";

export default function Intro() {
  return (
    <section className="max-w-7xl mx-auto py-8">
      <Heading className="lg:text-7xl md:text-5xl text-4xl text-center md:w-[70%] w-full mx-auto font-bold !leading-snug">
        Effortless Cross-Border Payments for Students
      </Heading>
      <p className="text-center text-text/90 md:w-[60%] w-full mx-auto py-6 md:px-4">
        FlexiPay simplifies paying tuition, fees, and more to institutions,
        businesses, and government agencies worldwide. Experience secure, fast,
        and reliable transactions tailored to meet the unique needs of
        international students.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4 pt-4 mt-2 mb-4">
        <Button className="w-[180px]">
          <SectionTitle>Get Started</SectionTitle>
        </Button>
        <Button variant="outline" className="w-[180px]">
          <SectionTitle>Download App</SectionTitle>
        </Button>
      </div>

      <IntroImage />
    </section>
  );
}

function IntroImage() {
  return (
    <div className="w-full relative">
      <div className="w-full overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-20 w-1/3">
          <IphoneMockup className="w-full h-auto" />
        </div>
        <div className="-mt-[17%]">
          <GlobeConnection className="w-full h-auto" />
        </div>
      </div>

      <div className="absolute top-24 left-0 flex items-start justify-start flex-col gap-9 z-[2]">
        <div className="bg-primary-light rounded-[18px] p-4 downloads-shadow border border-white/50 flex items-start justify-start gap-4 flex-col">
          <div className="flex items-start justify-center gap-2.5">
            <div className="flex items-start justify-center">
              {downloads.images.map((img, i) => (
                <div
                  key={i}
                  className={cn(
                    "size-12 bg-neutral-100 rounded-full border-2 border-primary",
                    {
                      "-ml-6": i > 0,
                    }
                  )}
                >
                  <Image
                    src={img}
                    alt="Download Users"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-start justify-start flex-col">
              <SectionTitle className="!text-2xl !font-bold !tracking-tight">
                {downloads.count}
              </SectionTitle>
              <small className="text-text capitalize font-montserrat">
                downloads
              </small>
            </div>
          </div>
          <small className="font-montserrat text-text leading-[1]">
            Used in countries all over the world
          </small>
        </div>

        <div className="bg-[#fdfdfd] rounded-[18px] py-2.5 px-5 border-2 border-primary/10 downloads-shadow flex items-center justify-center gap-2">
          <p className="text-sm font-montserrat">Backed by</p>
          <div className="w-60">
            <TechStars className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 fade" />
    </div>
  );
}
