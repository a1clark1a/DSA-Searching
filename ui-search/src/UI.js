import React, { useState } from "react";
import indexOf from "./Code/LinearSearch";
import binarySearch from "./Code/BinarySearch";

const Display = ({ display, search }) => {
  console.log(display);
  return (
    <div>
      <code>
        {search}: Number of searches it took: {display}{" "}
      </code>
    </div>
  );
};

const UI = ({ dataset }) => {
  const [item, setItem] = useState("");
  const [val, setVal] = useState("");
  const [search, setSearch] = useState("Linear Search");

  const linearSearch = val => {
    const index = indexOf(dataset, val);
    if (index < 0) {
      setSearch("Linear-Search");
      return setItem("Item was not found in the dataset");
    }
    setSearch("Linear-Search");
    setItem(index + 1);
  };

  const handleBS = val => {
    console.log(val);
    dataset.sort();
    const index = binarySearch(dataset, val);
    console.log(dataset);
    if (index < 0) {
      setSearch("Binary-Search");
      return setItem("Item was not found in the dataset");
    }
    setSearch("Binary-Search");
    setItem(index + 1);
  };

  return (
    <section>
      <form>
        <label id="num" htmlFor="num">
          Enter an item number
        </label>
        <input
          type="num"
          defaultValue={0}
          onChange={e => setVal(e.target.value)}
        />
        <button type="button" onClick={() => linearSearch(val)}>
          Linear Search
        </button>
        <button type="button" onClick={() => handleBS(val)}>
          Binary Search
        </button>
      </form>
      <Display display={item} search={search} />
    </section>
  );
};

export default UI;
