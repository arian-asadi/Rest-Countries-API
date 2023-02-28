import { Container } from "react-bootstrap";
import FilterCards from "./components/FilterCards";
import "./index.css";
import CardList from "./components/Cards";
import { useEffect, useState } from "react";
import useFetch from "./components/fetchData";

function Countries() {
  const { data: fetchData } = useFetch();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (fetchData.length) {
      setData(fetchData);
    }
  }, [fetchData]);
  function getFilteredDataBySearch(arr) {
    setData(arr);
  }

  return (
    <div>
      <Container fluid="xl">
        <FilterCards getData={getFilteredDataBySearch} data={fetchData} />
        <CardList data={data} />
      </Container>
    </div>
  );
}

export default Countries;
