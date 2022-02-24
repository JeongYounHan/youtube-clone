import React from "react";
import { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = (props) => {
  const inputRef = useRef();
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const value = inputRef.current.value;
    props.onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>youtube clone</h1>
      <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress} />
      <button className={styles.button} type="submit" onClick={onClick}>
        Search
      </button>
    </header>
  );
};

export default SearchHeader;
