import React from "react";
import { SectionTitle } from "../ui/text";
import { testimonies } from "@/data/testimonies.data";
import Image from "next/image";

export default function Testimony() {
  return (
    <section>
      <SectionTitle className="text-primary text-center my-16">
        What Our Customers Say
      </SectionTitle>

      <div className="flex gap-8 md:overflow-scroll">
        {testimonies.map(({ img, name, testimony }, i) => (
          <div
            key={i}
            className="flex items-center justify-stretch flex-col min-w-72 w-full h-auto"
          >
            <div className="size-40 -mb-20 relative z-[1]">
              <Image
                src={img}
                alt="name"
                width={160}
                height={160}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="bg-primary rounded-[20px] p-5 pt-[calc(1.25rem+5rem)] flex items-center justify-center gap-4 flex-col">
              <SectionTitle className="text-center text-white">
                {name}
              </SectionTitle>
              <p className="text-center text-white text-base">{testimony}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
