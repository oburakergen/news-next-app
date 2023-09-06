import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Welcome to Next.js",
  description: "...",
};

const Home = () => {
  return (
    <div>
      <h1>Next.js</h1>
      <p>Next.js is a React framework for production.</p>
    </div>
  );
};

export default Home;
