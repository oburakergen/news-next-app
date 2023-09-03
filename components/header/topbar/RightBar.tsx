"use client";
import { RiUserSharedLine, RiStarLine, RiHeart2Line } from "react-icons/ri";
import { Button } from "@/components/core";

const RightBar = () => {
  return (
    <div className="tw-flex tw-gap-3">
      <Button variant="circle" intent="link">
        Giriş Yap <RiUserSharedLine className="tw-w-6 tw-h-6" />
      </Button>
      <Button variant="circle" intent="link">
        <RiHeart2Line className="tw-w-6 tw-h-6" />
      </Button>
      <Button variant="circle" intent="link">
        <RiStarLine className="tw-w-6 tw-h-6" />
      </Button>
    </div>
  );
};

export default RightBar;
