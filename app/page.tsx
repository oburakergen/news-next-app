import type { Metadata } from "next";
import { Container } from "@/components/core";
import FeedLayout from "@/components/news/FeedLayout";
export const metadata: Metadata = {
  title: "Welcome to Next.js",
  description: "...",
};

const Home = () => {
  return (
    <Container intent="flex" justify="center" className="tw-mx-auto">
      <FeedLayout />
    </Container>
  );
};

export default Home;
