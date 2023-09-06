"use client";
import { Container } from "@/components/core";
import Logo from "@/components/Logo";
import Search from "@/components/header/topbar/Search";
import RightBar from "@/components/header/topbar/RightBar";
import Navigator from "@/components/header/navigation/Navigator";
const Header = () => {
  return (
    <div className="tw-grid tw-grid-rows-3 sm:tw-grid-rows-4">
      <div className="tw-relative tw-row-span-2 sm:tw-row-span-3">
        <Container intent="flex">
          <Container
            intent="flex"
            justify="between"
            className="tw-items-center tw-py-3 tw-mx-8 sm:tw-mx-4 xs:tw-mx-2 tw-h-12"
          >
            <Container
              intent="none"
              direction="col"
              justify="center"
              order="first"
              className="tw-w-1/4 sm:tw-w-1/2 xs:tw-w-1/2 tw-h-full tw-my-auto sm:tw-mb-2"
            >
              <Logo />
            </Container>
            <Container
              intent="none"
              direction="col"
              order="small2"
              className="tw-w-1/2 sm:tw-w-full xs:tw-w-full  tw-h-full "
            >
              <Search />
            </Container>
            <Container
              intent="none"
              justify="end"
              direction="row"
              order="small1"
              className="tw-w-1/4 sm:tw-w-1/2 xs:tw-w-1/2 tw-h-full sm:tw-mb-2 sm:tw-justify-center xs:tw-justify-end"
            >
              <RightBar />
            </Container>
          </Container>
        </Container>
      </div>
      <div className="tw-relative tw-row-span-1 sm:tw-row-span-1">
        <Container intent="flex">
          <Container intent="flex" justify="center" direction="row" className="tw-items-center tw-py-3">
            <Navigator />
          </Container>
        </Container>
      </div>
    </div>
  );
};

export default Header;
