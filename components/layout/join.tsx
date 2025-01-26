import React from "react";
import { Heading, SectionTitle } from "../ui/text";
import { IphoneMockup } from "../svg";
import Apple from "../svg/apple";
import Play from "../svg/google-play";
import cn from "@/utils/cn";

function DownloadButton({
  icon,
  name,
}: {
  icon: React.ReactElement | "";
  name: string;
}) {
  return (
    <button className="bg-black rounded-xl flex gap-4 items-center px-4 py-2 w-[180px]">
      {icon}
      <div className="block text-start ">
        <p className="text-white text-sm mb-2">Download on</p>
        <p className="uppercase text-white text-sm font-semibold">{name}</p>
      </div>
    </button>
  );
}

export default function Join() {
  return (
    <section>
      <div className="relative bg-custom-gradient flex w-full rounded-[20px] text-white py-24 px-6 md:px-12 overflow-hidden my-6">
        <div id="text" className="w-full lg:w-2/3 ">
          <div className="space-y-4 mb-8">
            <SectionTitle className="md:text-left text-center md:text-xl text-lg">
              Ready to Simplify Your Payments?
            </SectionTitle>
            <Heading className="lg:text-5xl md:text-4xl text-3xl text-center md:text-left font-semibold capitalize leading-normal">
              Join thousands of satisfied customers worldwide
            </Heading>
          </div>
          <div id="app-buttons" className="flex flex-col md:flex-row items-center gap-4">
            <DownloadButton icon={<Play width={33} />} name="GOOGLE PLAY" />
            <DownloadButton
              icon={<Apple width={30} color="white" />}
              name="APP STORE"
            />
          </div>
        </div>
        <div
          id="img"
          className="hidden lg:block lg:w-1/3 absolute right-12 top-1/3"
        >
          <IphoneMockup />
        </div>
      </div>
    </section>
  );
}
