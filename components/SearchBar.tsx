"use client";

import { useState } from "react";

import { SearchManufacturer } from "@/components";

export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState<string>("");

  const handleSearch = () => {};

  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          setManufacturer={setManufacturer}
          manufacturer={manufacturer}
        />
      </div>
    </form>
  );
}
