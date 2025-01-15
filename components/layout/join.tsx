import React from "react";
import { Heading, SectionTitle } from "../ui/text";
import { IphoneMockup } from "../svg";
import Apple from "../svg/apple";
import Play from "../svg/google-play";

function DownloadButton({
  icon,
  name,
}: {
  icon: React.ReactElement | "";
  name: string;
}) {
  return (
    <button className="bg-black rounded-xl flex gap-4 items-center px-4 py-2">
      {icon}
      <div className="block text-start">
        <p className="text-white text-sm mb-2">Download on</p>
        <p className="uppercase text-white text-sm font-semibold">{name}</p>
      </div>
    </button>
  );
}

export default function Join() {
  return (
    <section className="relative bg-custom-gradient flex w-full rounded-[20px] text-white py-24 px-12 overflow-hidden my-6">
      <div id="text" className="lg:w-2/3 ">
        <div className="space-y-4 mb-8">
          <SectionTitle className="text-xl">
            Ready to Simplify Your Payments?
          </SectionTitle>
          <Heading className="text-5xl font-semibold capitalize leading-normal">
            Join thousands of satisfied customers worldwide
          </Heading>
        </div>
        <div id="app-buttons" className="flex gap-4">
          <DownloadButton icon={<Play width={33} />} name="GOOGLE PLAY" />
          <DownloadButton
            icon={<Apple width={30} color="white" />}
            name="APP STORE"
          />
        </div>
      </div>
      <div id="img" className="lg:w-1/3 absolute right-12 top-1/3">
        <IphoneMockup />
      </div>
    </section>
  );
}
