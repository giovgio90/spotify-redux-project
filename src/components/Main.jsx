import { Container, Row, Col, Card, Button } from "react-bootstrap";
import SectionPlayer from "../components/SectionPlayer";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike } from "../redux/actions/index";

const Main = () => {
  const searchResults = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();

  const handleLike = (songId) => {
    dispatch(toggleLike(songId));
  };

  return (
    <>
      <Container fluid>
        <Row className="mb-3">{/* ... */}</Row>
        <Row>
          <Col md={3} className="pt-5 text-center" id="img-container"></Col>
          <Col md={8} className="p-5">
            <Row>
              <Col md={10} className="mb-5" id="trackList">
                {searchResults &&
                  searchResults.map((song) => (
                    <Card key={song.id} className="mb-3">
                      <Card.Body>
                        <Card.Title>{song.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Artista: {song.artist.name}</Card.Subtitle>
                        <Button onClick={() => handleLike(song.id)}>Mi Piace</Button>
                      </Card.Body>
                    </Card>
                  ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <SectionPlayer />
    </>
  );
};

export default Main;
