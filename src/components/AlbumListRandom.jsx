import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AlbumListRandom = (props) => {
  let mainAlbum = useSelector((state) => state.music.content);

  if (props.titleList === "Rock Classic") {
    mainAlbum = mainAlbum.slice(0, 4);
  } else if (props.titleList === "Pop Culture") {
    mainAlbum = mainAlbum.slice(4, 8);
  } else if (props.titleList === "Hip Hop") {
    mainAlbum = mainAlbum.slice(8, 12);
  }

  return (
    <Container>
      <h2 className="mt-3 mb-4 text-white text-start">{props.titleList}</h2>
      <Row>
        {mainAlbum.map((album) => (
          <Col sm={12} md={6} lg={3} key={`id-${album.id}`}>
            <Card
              style={{ border: "none", background: "none", fontSize: "0.8rem" }}
              className="mb-3 text-center text-white fw-bolder"
            >
              <Link to={"/album/" + album.album.id} style={{ textDecoration: "none" }} className="text-white">
                <Card.Img variant="top" src={album.album.cover_medium} />
              </Link>

              <Card.Body className="pt-1">
                <Link to={"/album/" + album.album.id} style={{ textDecoration: "none" }} className="text-white">
                  <Card.Text className="text-truncate mb-1">Album: {album.album.title}</Card.Text>
                </Link>
                <Link to={"/artist/" + album.artist.id} style={{ textDecoration: "none" }} className="text-white">
                  <Card.Text>Artist: {album.artist.name}</Card.Text>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AlbumListRandom;
