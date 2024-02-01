"use client";
import { Container, Flex } from "@/components/core";
import Logo from "@/components/Logo";
import Search from "@/components/header/topbar/Search";
import RightBar from "@/components/header/topbar/RightBar";
import Navigator from "@/components/header/navigation/Navigator";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import FollowButton from "@/components/header/navigation/FollowButton";
import CustomizeButton from "@/components/header/navigation/CustomizeButton";

const Header = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <header className="tw-px-4 xs:tw-px-0 sm:tw-px-0 lg:tw-px-8 xl:tw-px-8 tw-overflow-hidden">
      <Container intent="fluid">
        <Flex className="tw-py-4 tw-gap-4 xs:tw-gap-2 tw-bg-gray-100" justify="between">
          <Flex direction="col" justify="center" order="first" className="tw-w-full tw-max-w-max">
            <Logo />
          </Flex>
          {domLoaded && width > 768 && (
            <Flex direction="col" justify="center" order="small2" className="tw-w-full tw-max-w-[50rem]">
              <Search />
            </Flex>
          )}
          <Flex direction="row" justify="end" order="small1" className="tw-w-full tw-max-w-max">
            <RightBar />
          </Flex>
        </Flex>
        <Flex justify="between" direction="row" className="tw-items-center tw-py-3 tw-px-8 tw-gap-4">
          <FollowButton />
          <Navigator />
          <CustomizeButton />
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
