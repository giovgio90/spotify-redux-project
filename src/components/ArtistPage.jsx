import { useDispatch, useSelector } from "react-redux";
import { setAlbum, setArtistPage } from "../redux/actions";
import { Button, Card, Col, Container, NavLink, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionPlayer from "./SectionPlayer";

const ArtistPage = () => {
  const artistPage = useSelector((state) => state.artistPage.content);
  const searchResults = useSelector((state) => state.music.searchResults);

  const [randomIndices, setRandomIndices] = useState([]);

  const dispatch = useDispatch();
  const params = useParams();

  const artistFetch = async () => {
    const resp = await fetch("https://deezerdevs-deezer.p.rapidapi.com/artist/" + params.id, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "446acbbc21mshddea86ae7700867p1e29b9jsnd56234c5f0d5",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });

    if (resp.ok) {
      const data = await resp.json();
      dispatch(setArtistPage(data));
    }
  };

  const handleArtist = async (artistName) => {
    try {
      let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artistPage.name, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "446acbbc21mshddea86ae7700867p1e29b9jsnd56234c5f0d5",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }); // gets the information
      if (response.ok) {
        let data = await response.json();
        let result = await data.data;
        console.log(result);
        dispatch(setAlbum(result));
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    artistFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Genera una lista di indici casuali unici
    const randomIndicesList = [];
    while (randomIndicesList.length < searchResults.length) {
      const randomIndex = Math.floor(Math.random() * searchResults.length);
      if (!randomIndicesList.includes(randomIndex)) {
        randomIndicesList.push(randomIndex);
      }
    }
    setRandomIndices(randomIndicesList);
  }, [searchResults]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} md={9} className="offset-md-3 mainPage">
            <Row className="mb-3">
              <Col sm={9} lg={11} className="mainLinks d-none d-md-flex">
                <NavLink to="#" className="nav-link">
                  TRENDING
                </NavLink>
                <NavLink to="#" className="nav-link">
                  PODCAST
                </NavLink>
                <NavLink to="#" className="nav-link">
                  MOODS AND GENRES
                </NavLink>
                <NavLink to="#" className="nav-link">
                  NEW RELEASES
                </NavLink>
                <NavLink to="#" className="nav-link">
                  DISCOVER
                </NavLink>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="text-center mt-lg-5">
          <Col md={3} className="pt-5 text-center" id="img-container"></Col>
          <Col md={12} lg={8}>
            <h1 className="text-white">{artistPage.name}</h1>
            <p className="text-white mb-4">{artistPage.nb_fan} Followers</p>
            <Button variant="success" className="text-white rounded-pill border-white me-1" style={{ width: "120px" }}>
              Play
            </Button>
            <Button variant="dark" className="text-white rounded-pill border-white ms-1" style={{ width: "120px" }}>
              Follow
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={3} className="pt-5 text-center" id="img-container"></Col>
          <Col md={12} lg={8}>
            <Row>
              <h2 className="text-white mb-lg-5">Tracks</h2>
              {randomIndices.map((randomIndex, i) => (
                <Col sm={6} md={6} lg={3} key={i} className="mb-2 offset-md-0" id="trackList">
                  <Card
                    style={{ border: "none", background: "none", fontSize: "0.8rem" }}
                    className="mb-3 text-center text-white fw-bolder"
                  >
                    <Card.Img variant="top" src={searchResults[randomIndex].album.cover_medium} />
                    <Card.Body className="p-0">
                      <Card.Text className="text-truncate mx-3 mb-1">
                        Title: {searchResults[randomIndex].title_short}
                      </Card.Text>
                      <Card.Text className="text-truncate">Artist: {searchResults[randomIndex].artist.name}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <SectionPlayer />
    </>
  );
};

export default ArtistPage;
