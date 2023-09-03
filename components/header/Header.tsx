"use client";
import { Container, GridContainer } from "@/components/core";
import Logo from "@/components/Logo";
import Search from "@/components/header/topbar/Search";
import RightBar from "@/components/header/topbar/RightBar";
import Navigator from "@/components/header/navigation/Navigator";

const Header = () => {
  return (
    <GridContainer
      row="row2"
      className="tw-border-b tw-border-solid tw-border-fadedGray-100 tw-shadow-fadedWhite-300 tw-shadow"
    >
      <Container intent="flex">
        <Container
          intent="flex"
          justify="between"
          className="tw-items-center tw-py-3 tw-mx-8 sm:tw-mx-4 xs:tw-mx-2 tw-h-12"
        >
          <Container
            intent="flex"
            direction="col"
            justify="center"
            order="first"
            className="tw-w-1/4 sm:tw-w-1/2 xs:tw-w-1/2 tw-h-full tw-my-auto sm:tw-mb-2"
          >
            <Logo />
          </Container>
          <Container
            intent="flex"
            direction="col"
            order="small2"
            className="tw-w-1/2 sm:tw-w-full xs:tw-w-full  tw-h-full "
          >
            <Search />
          </Container>
          <Container
            intent="flex"
            justify="end"
            direction="row"
            order="small1"
            className="tw-w-1/4 sm:tw-w-1/2 xs:tw-w-1/2 tw-h-full sm:tw-mb-2 sm:tw-justify-center xs:tw-justify-end"
          >
            <RightBar />
          </Container>
        </Container>
      </Container>
      <Container intent="flex">
        <Container intent="flex" justify="center" direction="row" className="tw-items-center tw-py-3">
          <Navigator />
        </Container>
      </Container>
    </GridContainer>
  );
};

export default Header;
