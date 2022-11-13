import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

import User from "./User";
import { SearchIcon, MicrophoneIcon, XIcon } from "@heroicons/react/solid";

export default function SearchHeader() {
  const router = useRouter();

  const searchInputRef = useRef(null);

  const searchTerm = (e) => {
    e.preventDefault();
    const searchQuery = searchInputRef.current.value;

    if (!searchQuery.trim()) {
      return;
    } else {
      router.push(`/search?term=${searchQuery.trim()}`);
    }
  };

  const clearSearchWithX = () => {
    searchInputRef.current.value = "";
  };

  const homepage = (e) => {
    e.preventDefault();
    router.push(`/`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={homepage}
          className="cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
          alt="goog_search_results"
          width="120"
          height="40"
          objectFit="contain"
        />
        <form
          className="flex border border-gray-200 rounded-full shadow-lg
        px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
        >
          <input
            className="w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
          />
          <XIcon
            onClick={clearSearchWithX}
            className="h-7 text-gray-500 cursor-pointer sm:mr-3"
          />
          <MicrophoneIcon
            className="h-6 hidden sm:inline-flex text-blue-500 pl-4
          border-l-2 border-gray-300 mr-3"
          />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
          <button onClick={searchTerm} type="submit" hidden></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
    </header>
  );
}
