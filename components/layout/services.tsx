import React from "react";
import { SectionTitle } from "../ui/text";
import Image from "next/image";
import { Button } from "../ui/button";
import services from "@/data/services.data";

type CardProps = {
  title: string;
  desc: string;
  img: string;
};

const ServiceCard = ({ title, desc, img }: CardProps) => {
  return (
    <div className="relative aspect-[41/53] w-full min-w-[300px] h-auto rounded-[20px] overflow-hidden">
      <Image
        src={img}
        alt={title}
        width={430}
        height={100}
        className="w-96 object-cover h-full brightness-[.6]"
      />
      <div
        id="overlay"
        className="absolute bottom-4 left-4 right-4 border border-white/20 p-4 backdrop-blur-2xl rounded-[20px]"
      >
        <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
        <p className="text-white font-roboto md:text-base text-sm">{desc}</p>
        <Button variant="default" className="mt-2 w-full">
          <SectionTitle>make payment</SectionTitle>
        </Button>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <section className="mb-6 overflow-hidden" id="services">
      <SectionTitle className="text-primary text-center my-16">
        Our services
      </SectionTitle>
      <div className="flex gap-8 md:overflow-scroll">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            desc={service.description}
            img={service.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
