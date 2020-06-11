import React from "react";
import { SearchInput } from "./SearchInput";

interface HeaderProps {
  changeText: (term: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ changeText }) => {
  return (
    <div>
      <div className="logo">
        <h1 className="logo-text">GIFY-R</h1>
      </div>
      <div className="search-container">
        <SearchInput changeText={changeText} />
      </div>
    </div>
  );
};
