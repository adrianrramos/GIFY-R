import React from "react";
import { SearchInput } from "./SearchInput";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div>
      <div className="logo">
        <h1 className="logo-text">GIFY-R</h1>
      </div>
      <div className="search-container">
        <SearchInput />
      </div>
    </div>
  );
};
