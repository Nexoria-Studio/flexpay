import React from "react";
import { Heading, SectionTitle } from "../ui/text";
import { Button } from "../ui/button";

export default function Intro() {
  return (
    <section className="max-w-7xl mx-auto py-8">
      <Heading className="!text-7xl text-center w-[70%] mx-auto font-bold !leading-snug">
        Effortless Cross-Border Payments for Students
      </Heading>
      <p className="text-base text-center text-text/90 w-[60%] mx-auto py-6 px-4">
        FlexiPay simplifies paying tuition, fees, and more to institutions,
        businesses, and government agencies worldwide. Experience secure, fast,
        and reliable transactions tailored to meet the unique needs of
        international students.
      </p>
      <div className="flex justify-center gap-4 py-4 my-4">
        <Button>
          <SectionTitle>Get Started</SectionTitle>
        </Button>
        <Button variance="outline">
          <SectionTitle>Download App</SectionTitle>
        </Button>
      </div>
    </section>
  );
}
