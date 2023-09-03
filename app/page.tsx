import type { Metadata } from "next";
import { GridContainer } from "@/components/core";
export const metadata: Metadata = {
  title: "Welcome to Next.js",
  description: "...",
};

const Home = () => {
  return (
    <GridContainer className="tw-justify-center tw-content-center tw-flex-wrap">
      <div>
        <h1>Next.js</h1>
        <p>Next.js is a React framework for production.</p>
      </div>
    </GridContainer>
  );
};

export default Home;
