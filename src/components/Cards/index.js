import useFetch from "../fetchData";
import SpinnerLoading from "../Spinner";
import ShowCards from "../ShowCards";
import { Row } from "react-bootstrap";
import "./cards.css";
function CardList({ data }) {
  const { loading, error } = useFetch();
  if (loading) return <SpinnerLoading variant="secondary" />;
  if (error) console.log(error);

  const listOfCards = data?.map((item, index) => {
    return <ShowCards data={item} key={index} />;
  });

  return <Row className="row">{listOfCards}</Row>;
}

export default CardList;
