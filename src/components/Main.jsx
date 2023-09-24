import { Container, Row, Col, Card, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SectionPlayer from "./SectionPlayer";
import AlbumListRandom from "./AlbumListRandom";
import { useEffect } from "react";
import { setAlbum } from "../redux/actions";
import { Link } from "react-router-dom";

const Main = () => {
  const loading = useSelector((state) => state.music.loading);
  const searchResults = useSelector((state) => state.music.searchResults);

  const dispatch = useDispatch();

  let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];
  let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];
  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  let rockRandomArtists = [];
  let popRandomArtists = [];
  let hipHopRandomArtists = [];

  const handleArtist = async (artistName) => {
    try {
      let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artistName, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "446acbbc21mshddea86ae7700867p1e29b9jsnd56234c5f0d5",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      });
      if (response.ok) {
        let data = await response.json();
        let result = await data.data;

        dispatch(setAlbum(result[0]));
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const artistGenerator = async () => {
    while (rockRandomArtists.length < 4) {
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)];
      if (!rockRandomArtists.includes(artist)) {
        rockRandomArtists.push(artist);
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let j = 0; j < rockRandomArtists.length; j++) await handleArtist(rockRandomArtists[j], "#rockSection");

    for (let k = 0; k < popRandomArtists.length; k++) await handleArtist(popRandomArtists[k], "#popSection");

    for (let l = 0; l < hipHopRandomArtists.length; l++) await handleArtist(hipHopRandomArtists[l], "#hipHopSection");
  };

  useEffect(() => {
    artistGenerator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Row className="mb-3">
          <Col md={3} className="pt-5 text-center" id="img-container"></Col>
          <Col md={12} lg={8} className="p-5">
            <Row>
              {loading ? (
                <div>Loading...</div>
              ) : searchResults && searchResults.length > 0 ? (
                <>
                  <h2 className="text-white mb-4">Search Results</h2>
                  {searchResults.map((song) => (
                    <Col sm={6} md={6} lg={3} key={song.id} className="mb-2 offset-md-0" id="trackList">
                      <Card
                        style={{ border: "none", background: "none", fontSize: "0.8rem" }}
                        className="mb-3 text-center text-white fw-bolder"
                      >
                        <Card.Body className="p-0">
                          <Card.Img variant="top" src={song.album.cover_medium} />
                          <Link
                            to={"/album/" + song.album.id}
                            style={{ textDecoration: "none" }}
                            className="text-white"
                          >
                            <Card.Text className="text-truncate mx-3 mb-1">Album: {song.album.title}</Card.Text>
                          </Link>
                          <Link
                            to={"/artist/" + song.artist.id}
                            style={{ textDecoration: "none" }}
                            className="text-white"
                          >
                            <Card.Text>Artist: {song.artist.name}</Card.Text>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                  <AlbumListRandom titleList="Rock Classic" />
                  <AlbumListRandom titleList="Pop Culture" />
                  <AlbumListRandom titleList="Hip Hop" />
                </>
              ) : (
                <>
                  <AlbumListRandom titleList="Rock Classic" />
                  <AlbumListRandom titleList="Pop Culture" />
                  <AlbumListRandom titleList="Hip Hop" />
                </>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      <SectionPlayer />
    </>
  );
};

export default Main;
