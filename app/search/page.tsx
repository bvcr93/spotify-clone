import getSongsByTitle from "@/actions/getSongsByTitle";
import React from "react";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import SearchContent from "./components/SearchContent";

interface SearchPageProps {
  searchParams: { title: string };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const songs = await getSongsByTitle(searchParams.title);
  return (
    <div
      className="
      bg-neutral-900 
      rounded-lg 
      h-full 
      w-full 
      overflow-hidden 
      overflow-y-auto
    "
    >
      <Header>
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput  />
        </div>
      </Header>
      <SearchContent songs={songs}/>
    </div>
  );
}
