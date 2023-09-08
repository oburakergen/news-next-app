import { Article, Feed, FeedItem } from "@/components/core";
import { ArticleImage } from "@/components/core/panel/ArticleImage";
import Image from "next/image";

const FeedLayout = () => {
  return (
    <Feed className="feed">
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
          <header>asdasd</header>
          <section>asdasd</section>
        </Article>
      </FeedItem>
      <FeedItem>
        <Article>asdasdasdasd</Article>
      </FeedItem>
      <FeedItem>
        <Article>asdasdasdasd</Article>
      </FeedItem>
      <FeedItem>
        <Article>asdasdasdasd</Article>
      </FeedItem>
      <FeedItem>
        <Article>asdasdasdasd</Article>
      </FeedItem>
    </Feed>
  );
};

export default FeedLayout;
