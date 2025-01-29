"use client";
import React, { useState } from "react";
import { SectionTitle } from "../ui/text";
import Link from "next/link";
import { ChevronDown, ChevronUp, MoveRight } from "lucide-react";

type faq = { id: number; question: string; answer: string };

const faqs: faq[] = [
  { id: 1, question: "What is the FlexiPay App?", answer: "" },
  {
    id: 2,
    question: "What is the payment processing timeline on the FlexiPay App?",
    answer: "",
  },

  { id: 3, question: "How does the FlexiPay App work?", answer: "" },
  {
    id: 4,
    question: "How do I get started using the FlexiPay App?",
    answer: "",
  },
];

export default function FAQs() {
  const [current, setCurrent] = useState<null | number>(null);
  return (
    <section className="mb-6" id="faqs">
      <SectionTitle className="text-primary text-center my-16">
        Frequently Asked Questions
      </SectionTitle>
      <div className="flex flex-col gap-8 items-center">
        {faqs.map(({ id, answer, question }) => (
          <div
            className="bg-primary-light text-text rounded-[20px] p-4 max-w-[800px] w-full"
            key={id}
            onClick={() => setCurrent(current === id ? null : id)}
          >
            <div className="flex items-center justify-between gap-4 cursor-pointer">
              <h3 className="text-[18px] font-outfit">{question}</h3>
              <span className="cursor-pointer transition">
                <ChevronDown
                  className={`h-6 w-6 ${
                    current === id ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </div>
            <div
              className={`transition-all ease-out duration-300 ${
                current == id ? "pt-4" : "pt-0"
              }`}
              style={{
                maxHeight: current === id ? "200px" : "0px",
                opacity: current === id ? 1 : 0,
              }}
            >
              <p className="text-base">
                The purpose of this website is to provide a platform for people
                to share their thoughts and ideas on various topics. It is a
                place where you can express yourself and connect with others who
                share your interests.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="py-4 flex justify-end">
        <Link href={"/"} className="font-outfit capitalize text-text">
          <span className="flex gap-1 underline decoration-primary decoration-2 hover:decoration-4 transition ease-out  underline-offset-4">
            See All FAQs <MoveRight />
          </span>
        </Link>
      </div>
    </section>
  );
}
