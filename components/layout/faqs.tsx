"use client";
import React, { useState } from "react";
import { SectionTitle } from "../ui/text";
import Link from "next/link";
import { ChevronDown, ChevronUp, MoveRight } from "lucide-react";
import { Chevron } from "../svg";

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
            className="bg-primary-light text-text rounded-2xl p-4 h-auto max-w-[800px] w-full"
            key={id}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-[18px] font-outfit">{question}</h3>
              <span
                className="cursor-pointer transition"
                onClick={() =>
                  current === id ? setCurrent(null) : setCurrent(id)
                }
              >
                <ChevronDown
                  className={`h-6 w-6 ${
                    current === id ? "rotate-0" : "rotate-180"
                  }`}
                />
              </span>
            </div>
            <p
              className={`text-base pt-4 ${
                current == id ? "h-fit block" : "hidden"
              }`}
            >
              The purpose of this website is to provide a platform for people to
              share their thoughts and ideas on various topics. It is a place
              where you can express yourself and connect with others who share
              your interests.
            </p>
          </div>
        ))}
      </div>
      <div className="py-4 flex justify-end">
        <Link href={"/"} className="font-outfit capitalize text-text">
          <span className="flex gap-1 underline decoration-primary decoration-2 underline-offset-4 ">
            See All FAQs <MoveRight />
          </span>
        </Link>
      </div>
    </section>
  );
}
