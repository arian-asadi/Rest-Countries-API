import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./show-card.css";
export default function ShowCards({ data }) {
  return (
    <Card className="card " style={{ width: "18rem" }}>
      <NavLink to={`/country/${data.name.common}`} state={data}>
        <Card.Img className="img-flag" variant="top" src={data.flags.png} />
        <Card.Body className="bg-theme body-card">
          <Card.Title className="country-name color-theme">
            {data.name.common}
          </Card.Title>
          <div className="parent-details">
            <Card.Text className="details color-theme">
              Population: {data.population}
            </Card.Text>
            <Card.Text className="details color-theme">
              Region: {data.region}
            </Card.Text>
            <Card.Text className="details color-theme">
              Capital: {data.capital}
            </Card.Text>
          </div>
        </Card.Body>
      </NavLink>
    </Card>
  );
}
