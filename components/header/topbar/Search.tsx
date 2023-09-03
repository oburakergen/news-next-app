"use client";
import { RiSearchLine, RiSendPlane2Line } from "react-icons/ri";
import { SearchLayout, SearchInput, Button } from "@/components/core";

const Search = () => {
  return (
    <div className="tw-relative tw-block tw-h-full tw-w-full">
      <SearchLayout>
        <div className="tw-inline-flex tw-bg-transparent tw-my-auto">
          <RiSearchLine className="tw-w-6 tw-h-6 tw-fill-fadedGray-200 tw-px-4" />
        </div>
        <SearchInput
          type="text"
          placeholder="Ara..."
          maxLength={50}
          autoFocus={false}
          name="q"
          title="Site içinde arama yap"
          aria-label="Site içinde arama yap"
        />
        <div className="tw-inline-flex tw-bg-transparent tw-my-auto">
          <Button variant="circle" intent="light" className="tw-shadow-none">
            <RiSendPlane2Line className="tw-w-6 tw-h-6" />
          </Button>
        </div>
      </SearchLayout>
    </div>
  );
};

export default Search;
