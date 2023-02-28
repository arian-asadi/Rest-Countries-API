import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./search-Input.css";

export default function SearchInput({ handleChange, inputValue }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="parent-form ms-2 bg-theme">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="submit-btn">
          <FontAwesomeIcon
            className="search-icon color-theme"
            icon={faSearch}
          ></FontAwesomeIcon>
        </button>
        <input
          className="color-theme"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for a country"
        />
      </form>
    </section>
  );
}

