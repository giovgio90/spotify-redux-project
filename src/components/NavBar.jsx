import { Navbar, Nav, Button, FormControl, Col, Row, Container } from "react-bootstrap";
import LogoSpotify from "../assets/logo/Spotify_Logo.png";
import { HouseDoor, Book } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { searchMusic } from "../redux/actions/index";

const NavBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.music.searchQuery); // Utilizza state.music.searchQuery

  const handleSearch = () => {
    // Invia l'azione searchMusic con il valore di searchQuery
    dispatch(searchMusic(searchQuery));
  };

  const handleChange = (e) => {
    dispatch({ type: "SEARCH_MUSIC", payload: e.target.value });
  };

  return (
    <Container>
      <Row>
        <Col sm={2}>
          <Navbar
            expand="md"
            bg="navbar"
            variant="white"
            fixed="left"
            id="sidebar"
            className="justify-content-between p-3"
          >
            <div className="nav-container">
              <Navbar.Brand href="index.html">
                <img src={LogoSpotify} alt="Spotify_Logo" width="140" height="42" className="my-3" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
              <Navbar.Collapse id="navbarNavAltMarkup">
                <Nav className="navbar">
                  <ul className="mt-3">
                    <li>
                      <Nav.Link href="index.html">
                        <HouseDoor className="fas fa-home fa-lg" style={{ fontSize: "1.5rem" }} />
                        &nbsp; <span style={{ fontSize: "1.1rem" }}>Home</span>
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link href="#">
                        <Book className="fas fa-book-open fa-lg" style={{ fontSize: "1.5rem" }} />
                        &nbsp; <span style={{ fontSize: "1.1rem" }}>Your Library</span>
                      </Nav.Link>
                    </li>
                    <li>
                      <div className="input-group mt-3">
                        <FormControl
                          type="text"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                          value={searchQuery}
                          onChange={handleChange}
                        />

                        <Button variant="outline-secondary" className="py-auto" size="sm" onClick={handleSearch}>
                          GO
                        </Button>
                      </div>
                    </li>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </div>
            <div className="nav-btn">
              <Button className="signup-btn" type="button">
                Sign Up
              </Button>
              <Button className="login-btn" type="button">
                Login
              </Button>
            </div>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
