import React, { Fragment } from "react";

interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Fragment>
      <input type="text" className="search-input" />
    </Fragment>
  );
};
