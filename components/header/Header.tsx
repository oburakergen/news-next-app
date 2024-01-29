"use client";
import { Container, Flex } from "@/components/core";
import Logo from "@/components/Logo";
import Search from "@/components/header/topbar/Search";
import RightBar from "@/components/header/topbar/RightBar";
import Navigator from "@/components/header/navigation/Navigator";

const Header = () => {
  return (
    <header className="tw-flex tw-flex-col">
      <Container className="fluid">
        <Flex
          justify="between"
          className="tw-items-center tw-py-3 tw-mx-8 md:tw-mx-4 sm:tw-mx-4 xs:tw-mx-2 tw-relative tw-w-full tw-h-full"
        >
          <Flex
            intent="flex"
            direction="col"
            justify="center"
            order="first"
            className="tw-w-1/4 sm:tw-w-1/2 xs:tw-w-1/2 tw-h-full tw-my-auto sm:tw-mb-2"
          >
            <Logo />
          </Flex>
          <Flex intent="flex" direction="col" order="small2" className="tw-w-1/2 sm:tw-w-full xs:tw-w-full  tw-h-full ">
            <Search />
          </Flex>
          <Flex
            intent="flex"
            justify="end"
            direction="row"
            order="small1"
            className="tw-w-1/4 sm:tw-w-1/2 xs:tw-w-1/2 tw-h-full sm:tw-mb-2 sm:tw-justify-center xs:tw-justify-end"
          >
            <RightBar />
          </Flex>
        </Flex>
      </Container>
      <Flex intent="flex">
        <Flex intent="flex" justify="center" direction="row" className="tw-items-center tw-py-3">
          <Navigator />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
