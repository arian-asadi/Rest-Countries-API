import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import "./country-detail.css";
import { useEffect, useState } from "react";
function CountryDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  console.log(state);

  useEffect(() => {
    if (state.borders) {
      const borders = state.borders.join(",");
      fetch(`https://restcountries.com/v3.1/alpha?codes=${borders}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }
  });
  const arrOfBorders = data.map((item) => item.name.common);

  const names = [];
  for (const name in state.name) {
    names.push(state.name[name]);
  }
  const nativeName = names[2];
  const obj = Object.values(nativeName);

  const correncies = Object.values(state.currencies);

  const languages = Object.values(state.languages);

  return (
    <Container className="container">
      <button className="btn-back bg-theme" onClick={() => navigate("/")}>
        <FontAwesomeIcon
          className="color-theme"
          icon={faArrowLeft}
        ></FontAwesomeIcon>
        <span className="color-theme">Back</span>
      </button>
      <div className="parent-detail">
        <div className="country-img">
          <img className="flag" src={state?.flags?.png} alt="flag" />
        </div>
        <div className="each-country-detail">
          <h2 className="country-name color-theme">{state?.name?.common}</h2>
          <div className="boxes">
            <div className="first box">
              <p className="color-theme">
                <strong>Native Name: </strong>
                {obj[0].common}
              </p>
              <p className="color-theme">
                <strong>Population: </strong>
                {state?.population}
              </p>
              <p className="color-theme">
                <strong>Region: </strong>
                {state?.region}
              </p>
              <p className="color-theme">
                <strong>Sub Region: </strong>
                {state?.subregion}
              </p>
              <p className="color-theme">
                <strong>Captial: </strong>
                {state?.capital}
              </p>
            </div>
            <div className="second box">
              <p className="color-theme">
                <strong>Top Level Domain: </strong>
                {state?.tld.join(" ")}
              </p>
              <p className="color-theme">
                <strong>Currencies: </strong>
                {correncies[0].name}
              </p>
              <p className="color-theme">
                <strong>Languages: </strong>
                {languages.join(", ")}
              </p>
            </div>
          </div>
          <div className="borders">
            <span className="border-title color-theme">
              <strong>Border Countries: </strong>
            </span>
            {arrOfBorders.map((border, index) => {
              return (
                <p className="border bg-theme color-theme" key={index}>
                  {border}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CountryDetail;
