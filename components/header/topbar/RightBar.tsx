"use client";
import { RiUserSharedLine, RiStarLine, RiHeart2Line, RiSearchLine } from "react-icons/ri";
import { Button, Flex } from "@/components/core";
import { useRouter } from 'next/navigation'
import { type MouseEventHandler } from "react";

const RightBar = () => {
  const router = useRouter()
  const handleRoute: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    return router.push('/search')
  }

  return (
    <Flex className="tw-gap-3 tw-bg-gray-100">
      <Button variant="circle" intent="light" size="default" offset="full">
        <span className="tw-hidden lg:tw-block xl:tw-block">Giriş Yap </span>
        <RiUserSharedLine className="tw-w-6 tw-h-6" />
      </Button>
      <Button variant="circle" intent="light" size="default" offset="full">
        <RiHeart2Line className="tw-w-6 tw-h-6" />
      </Button>
      <Button variant="circle" intent="light" size="default" offset="full">
        <RiStarLine className="tw-w-6 tw-h-6" />
      </Button>
      <Button
        className="tw-block lg:tw-hidden xl:tw-hidden"
        variant="circle"
        intent="light"
        size="default"
        offset="full"
        onClick={handleRoute}
      >
        <RiSearchLine className="tw-w-6 tw-h-6" />
      </Button>
    </Flex>
  );
};

export default RightBar;
