"use client";
import Link from "next/link";
const data = [
  {
    title: "Home",
    id: 1,
    link: "/",
  },
  {
    title: "About",
    id: 2,
    link: "/about",
  },
  {
    title: "Contact",
    id: 3,
    link: "/contact",
  },
  {
    title: "Blog",
    id: 4,
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
