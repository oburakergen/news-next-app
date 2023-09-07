import type { Metadata } from "next";
import { Container, Feed, FeedItem } from "@/components/core";
export const metadata: Metadata = {
  title: "Welcome to Next.js",
  description: "...",
};

const Home = () => {
  return (
    <Container intent="flex" justify="center" className="tw-mx-auto">
      <Feed>
        <FeedItem intent="1x">1</FeedItem>
        <FeedItem intent="1x">1</FeedItem>
        <FeedItem intent="1x">1</FeedItem>
        <FeedItem intent="1x">1</FeedItem>
        <FeedItem intent="1x">1</FeedItem>
      </Feed>
    </Container>
  );
};

export default Home;
