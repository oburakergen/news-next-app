"use client";
import { RiUserSharedLine, RiStarLine, RiHeart2Line } from "react-icons/ri";
import { Button } from "@/components/core";

const RightBar = () => {
  return (
    <div className="tw-flex tw-gap-3">
      <Button variant="circle" intent="light" size="medium" offset="full">
        <span className="sm:tw-hidden md:tw-hidden">Giriş Yap </span>
        <RiUserSharedLine className="tw-w-6 tw-h-6" />
      </Button>
      <Button variant="circle" intent="light" size="medium" offset="full">
        <RiHeart2Line className="tw-w-6 tw-h-6" />
      </Button>
      <Button variant="circle" intent="light" size="medium" offset="full">
        <RiStarLine className="tw-w-6 tw-h-6" />
      </Button>
    </div>
  );
};

export default RightBar;
