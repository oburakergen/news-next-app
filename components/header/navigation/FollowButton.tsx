import { Button, Flex } from "@/components/core";
import Link from "next/link";

const followButtonCss = `
tw-border 
tw-border-gray-300
tw-border-solid 
tw-shadow-lg
tw-shadow-blue-100
tw-cursor-pointer 
tw-gap-2 
tw-rounded-md
`;

const FollowButton = () => {
  return (
    <Flex direction="row" justify="center" className={`${followButtonCss} tw-hidden lg:tw-block xl:tw-block`}>
      <Button intent="light" className="tw-px-2 tw-py-2 !tw-text-black tw-font-bold">
        Keşfet
      </Button>
      <Button intent="light" className="tw-px-2 tw-py-2">
        Takip
      </Button>
    </Flex>
  );
};

export default FollowButton;
