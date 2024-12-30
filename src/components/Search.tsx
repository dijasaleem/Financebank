import { FunctionComponent } from "react";
import "./Search.css";

export type SearchType = {
  className?: string;
};

const Search: FunctionComponent<SearchType> = ({ className = "" }) => {
  return (
    <div className={`search ${className}`}>
      <a className="search-here">Search here</a>
      <img className="search-icon" alt="" src="/search.svg" />
    </div>
  );
};

export default Search;
