import React from "react";
import { SectionTitle } from "../ui/text";
import Image from "next/image";
// Remember to use proper data
import posts from "@/data/posts.data";
import Link from "next/link";
import { MoveRight } from "lucide-react";

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
        width={430}
        height={100}
        className="w-96 object-cover h-full brightness-75"
      />
      <div
        id="overlay"
        className="absolute bottom-4 left-4 right-4 border border-white/50 p-4 backdrop-blur-lg rounded-xl "
      >
        <h4 className="text-lg font-outfit font-semibold text-white mb-2">
          {title}
        </h4>
        <p className="text-white font-roboto text-base">{desc}</p>
        <Link
          href={"/"}
          className="text-white underline decoration-primary decoration-2 hover:decoration-4 transition ease-out font-semibold font-outfit underline-offset-4 capitalize mt-2"
        >
          Read Article
        </Link>
      </div>
    </div>
  );
};

export default function Posts() {
  return (
    <section className="mb-6" id="blog">
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

      <div className="py-4 flex justify-end">
        <Link href={"/"} className="font-outfit capitalize text-text">
          <span className="flex gap-1 underline decoration-primary decoration-2 hover:decoration-4 transition ease-out  underline-offset-4 ">
            See More Posts <MoveRight />
          </span>
        </Link>
      </div>
    </section>
  );
}
