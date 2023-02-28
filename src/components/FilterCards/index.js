import FilterByContinent from "../FilterByContinent";
import SearchBar from "../SearchInput";
import "./filter-cards.css";
import { useEffect, useState } from "react";
function FilterCards({ getData, data }) {
  const [text, setText] = useState("");
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    const filterData = data
      .filter((item) => {
        if (!selectValue) {
          return true;
        } else if (item.region.includes(selectValue)) {
          return true;
        }
        return false;
      })
      .filter((item) => {
        if (
          item.name.common.toLowerCase().includes(text.trim().toLowerCase())
        ) {
          return true;
        }
        return false;
      });
    getData(filterData);
  }, [text, selectValue]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSelect(e) {
    setSelectValue(e.target.value);
  }

  return (
    <div className="parent">
      <SearchBar handleChange={handleChange} inputValue={text} />
      <FilterByContinent
        handleSelect={handleSelect}
        optionValue={selectValue}
      />
    </div>
  );
}

export default FilterCards;
