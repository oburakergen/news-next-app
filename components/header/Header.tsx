"use client";
import { Container, Flex } from "@/components/core";
import Logo from "@/components/Logo";
import Search from "@/components/header/topbar/Search";
import RightBar from "@/components/header/topbar/RightBar";
import Navigator from "@/components/header/navigation/Navigator";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <header>
      <Container className="fluid">
        <Flex className="tw-py-4 tw-gap-4" justify="center">
          <Flex direction="col" justify="center" order="first" className="tw-w-full">
            <Logo />
          </Flex>
          {width > 768 && (
            <Flex direction="col" justify="center" order="small2" className="tw-w-full">
              <Search />
            </Flex>
          )}
          <Flex direction="row" justify="end" order="small1" className="tw-w-full">
            <RightBar />
          </Flex>
        </Flex>
      </Container>
      <Flex>
        <Flex justify="center" direction="row" className="tw-items-center tw-py-3">
          <Navigator />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
