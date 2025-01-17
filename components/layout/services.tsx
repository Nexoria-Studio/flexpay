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
    <div className="relative aspect-[41/53] w-full h-auto rounded-[30px] overflow-hidden">
      <Image
        src={img}
        alt={title}
        width={430}
        height={100}
        className="w-96 object-cover h-full brightness-75"
      />
      <div
        id="overlay"
        className="absolute bottom-4 left-4 right-4 border border-white p-4 backdrop-blur-lg rounded-xl"
      >
        <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
        <p className="text-white font-inter">{desc}</p>
        <Button variant="default" className="mt-2 w-full">
          <SectionTitle>make payment</SectionTitle>
        </Button>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <section className="mb-6">
      <SectionTitle className="text-primary text-center my-16">
        Our services
      </SectionTitle>
      <div className="flex gap-8">
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
