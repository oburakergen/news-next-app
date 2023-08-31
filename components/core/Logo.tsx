// create a logo component

import Image from "next/image";

const Logo = () => {
  return (
    <div className="tw-cursor-pointer tw-w-fit">
      <a href={process.env.SITE_URL}>
        <Image src="https://picsum.photos/200/150" alt="logo" className="tw-w-20 tw-h-20" />
      </a>
    </div>
  );
};

export default Logo;
