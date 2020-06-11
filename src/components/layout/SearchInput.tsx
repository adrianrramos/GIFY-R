import React, { Fragment, useState } from "react";

interface SearchInputProps {
  changeText: (term: any) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ changeText }) => {
  const [term, setTerm] = useState<string | undefined>();

  const onSearchChange = (e?: any) => {
    setTerm(e.target.value);
    changeText(term);
  };

  return (
    <Fragment>
      <input
        type="text"
        className="search-input"
        onChange={e => onSearchChange(e)}
        value={term}
      />
    </Fragment>
  );
};
