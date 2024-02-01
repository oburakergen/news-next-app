import { Button, Flex } from "@/components/core";
import { RiEmpathizeLine } from "react-icons/ri";

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
      <Button intent="light" className="tw-px-2 tw-py-2">
        <RiEmpathizeLine className="tw-w-6 tw-h-6 tw-pr-2" />
        Kişiselleştir
      </Button>
    </Flex>
  );
};

export default FollowButton;
