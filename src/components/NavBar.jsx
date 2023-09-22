import { Container, Row, Col, Navbar, Nav, Button, FormControl } from "react-bootstrap";
import LogoSpotify from "../assets/logo/Spotify_Logo.png";
import { HouseDoor, Book } from "react-bootstrap-icons";
import { useState } from "react";
import { useDispatch } from "react-redux"; // Aggiungi l'import di useDispatch
import { searchMusicSuccess } from "../redux/actions";

const NavBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); // Aggiungi l'import di useDispatch

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${inputValue}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "446acbbc21mshddea86ae7700867p1e29b9jsnd56234c5f0d5",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const songs = data.data;
        dispatch(searchMusicSuccess(songs)); // Dispatch dell'azione per aggiornare lo stato Redux
      } else {
        console.error("Errore nella ricerca delle canzoni. Stato della risposta:", response.status);
      }
    } catch (error) {
      console.error("Errore nella ricerca delle canzoni:", error);
    } finally {
      setLoading(false);
    }
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
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyUp={(e) => {
                            if (e.key === "Enter") {
                              handleSearch();
                            }
                          }}
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
              {/* <Link to="/cookie-policy" className="link">
                Cookie Policy
              </Link>{" "}
              |{" "}
              <Link to="/privacy" className="link">
                Privacy
              </Link> */}
            </div>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
