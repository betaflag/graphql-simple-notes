import React from "react";
import "./SearchInput.css";

function SearchInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const newProps = { ...props, className: "search-input", type: "search" };
  return <input {...newProps} />;
}

export default SearchInput;
