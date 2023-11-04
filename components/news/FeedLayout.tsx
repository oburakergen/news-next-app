"use client";
import { Article, Feed, FeedItem } from "@/components/core";
import { ArticleImage } from "@/components/core/panel/ArticleImage";
import Image from "next/image";
import Link from "next/link";

const FeedLayout = () => {
  console.log();
  return (
    <Feed className="tw-bg-white">
      <FeedItem>
        <Article intent="image" color="white">
          <ArticleImage>
            <Image
              src="https://via.placeholder.com/300x150"
              alt="placeholder"
              className="tw-w-full"
              fill={true}
              quality={80}
            />
          </ArticleImage>
          <header className="tw-row-span-2 tw-pt-4">
            <Link href="/news/1">Test 1s daks dpkasşl dşasdk şaskdşl aksda sd asd asdasdasd asd a</Link>
          </header>
          <section className="tw-row-span-1">asdasd</section>
        </Article>
      </FeedItem>
    </Feed>
  );
};

export default FeedLayout;
