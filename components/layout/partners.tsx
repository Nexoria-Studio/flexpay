import React from "react";
import { partners } from "@/data/partners.data";

export default function Partners() {
  return (
    <section className="relative z-[5]">
      <div className="bg-primary/10 py-5 px-12 flex items-center justify-between rounded-2xl">
        {partners.map((Icon, i) => (
          <Icon key={i} className="w-32 h-auto" />
        ))}
      </div>
    </section>
  );
}
