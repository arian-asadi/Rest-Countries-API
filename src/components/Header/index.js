import { useState } from "react";
import "./header.css";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function Header({ themeFunc }) {
  const navigate = useNavigate();
  const [iconTheme, setIconTheme] = useState(faMoon);
  const [textTheme, setTextTheme] = useState("dark");
  function handleThemeClick() {
    if (iconTheme === faMoon) {
      function toLightMode() {
        setIconTheme(faSun);
        setTextTheme("light");
        themeFunc(textTheme);
      }
      toLightMode();
    } else {
      function toDarkMode() {
        setIconTheme(faMoon);
        setTextTheme("dark");
        themeFunc(textTheme);
      }
      toDarkMode();
    }
  }

  return (
    <Navbar className="header bg-theme">
      <Container>
        <Navbar.Brand
          className="web-name m-2 ms-3 color-theme"
          onClick={() => navigate("/")}
        >
          Where is the World?
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className="theme-changer" onClick={handleThemeClick}>
              <FontAwesomeIcon
                className="color-theme"
                icon={iconTheme}
              ></FontAwesomeIcon>
              <span className="color-theme me-3">
                {textTheme === "dark" ? "Dark Mode" : "Light Mode"}
              </span>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
