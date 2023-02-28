import "./filter-by-continent.css";
function FilterByContinent({ handleSelect, optionValue }) {
  const continentArray = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const continentItem = continentArray.map((continent, index) => {
    return (
      <option value={continent} className="each-continent" key={index}>
        {continent}
      </option>
    );
  });

  return (
    <select
      className="bg-theme color-theme me-2"
      onChange={handleSelect}
      value={optionValue}
    >
      <option value="">Filter by Region</option>
      {continentItem}
    </select>
  );
}

export default FilterByContinent;
