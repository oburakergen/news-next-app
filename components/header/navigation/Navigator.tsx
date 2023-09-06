"use client";
import Link from "next/link";
const data = [
  {
    title: "News",
    id: 1,
    link: "/",
  },
  {
    title: "Sports",
    id: 2,
    link: "/about",
  },
  {
    title: "Play",
    id: 3,
    link: "/contact",
  },
  {
    title: "Money",
    id: 4,
    link: "/blog",
  },
  {
    title: "Entertainment",
    id: 5,
    link: "/blog",
  },
  {
    title: "Tech",
    id: 6,
    link: "/blog",
  },
  {
    title: "Travel",
    id: 7,
    link: "/blog",
  },
  {
    title: "Style",
    id: 8,
    link: "/blog",
  },
  {
    title: "Features",
    id: 9,
    link: "/blog",
  },
];

const Navigator = () => {
  const listItems = data.map((item) => (
    <Link href={item.link} key={item.id}>
      {item.title}
    </Link>
  ));

  return <div className="tw-flex tw-flex-wrap tw-relative tw-gap-3">{listItems}</div>;
};

export default Navigator;
