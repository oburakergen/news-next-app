"use client";
import { RiSearchLine, RiSendPlane2Line } from "react-icons/ri";
import { SearchInput, Button, Flex } from "@/components/core";

const Search = () => {
  return (
    <Flex className="tw-bg-white tw-shadow tw-rounded-3xl tw-shadow-fadedGray-300 tw-text-fadedBlack-500 search-area">
      <div className="tw-inline-flex tw-bg-transparent tw-my-auto">
        <RiSearchLine className="tw-w-6 tw-h-6 tw-fill-fadedGray-200 tw-px-4" />
      </div>
      <SearchInput
        type="search"
        placeholder="Ara..."
        maxLength={50}
        autoFocus={false}
        name="q"
        title="Site içinde arama yap"
        aria-label="Site içinde arama yap"
      />
      <div className="tw-inline-flex tw-bg-transparent tw-my-auto">
        <Button variant="circle" intent="link" size="medium">
          <RiSendPlane2Line className="tw-w-6 tw-h-6" />
        </Button>
      </div>
    </Flex>
  );
};

export default Search;
