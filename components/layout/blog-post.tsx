import React from "react";
import { SectionTitle } from "../ui/text";
import Image from "next/image";
// Remember to use proper data
import posts from "@/data/posts.data";
import Link from "next/link";

type CardProps = {
  title: string;
  desc: string;
  img: string;
};

const PostCard = ({ title, desc, img }: CardProps) => {
  return (
    <div className="relative aspect-[41/53] w-full h-auto rounded-[20px] overflow-hidden">
      <Image
        src={img}
        alt={title}
        width={100}
        height={100}
        className="w-96 object-cover h-full brightness-75"
      />
      <div
        id="overlay"
        className="absolute bottom-4 left-4 right-4 border border-white/50 p-4 backdrop-blur-lg rounded-xl flex flex-col gap-4"
      >
        <h4 className="text-lg font-outfit font-semibold text-white mb-2">
          {title}
        </h4>
        <p className="text-white font-outfit text-base">{desc}</p>
        <Link
          href={"/"}
          className="text-white underline decoration-primary decoration-2 font-semibold underline-offset-4 capitalize"
        >
          Read Article
        </Link>
      </div>
    </div>
  );
};

export default function Posts() {
  return (
    <section className="mb-6">
      <SectionTitle className="text-primary text-center my-16">
        Blog posts
      </SectionTitle>
      <div className="flex gap-8">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            desc={post.description}
            img={post.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
