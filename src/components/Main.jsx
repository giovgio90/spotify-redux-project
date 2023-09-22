import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux"; // Rimuovi l'import di useDispatch
import SectionPlayer from "./SectionPlayer";
import { useEffect } from "react";

const Main = () => {
  const loading = useSelector((state) => state.music.loading);
  const searchResults = useSelector((state) => state.music.searchResults); // Ottieni i risultati dalla store
  const searchQuery = useSelector((state) => state.music.searchQuery);

  useEffect(() => {
    // La chiamata API è già gestita dal NavBar, quindi non è necessario fare nulla qui
  }, [searchQuery]);

  return (
    <>
      <Container fluid>
        <Row className="mb-3">
          <Col md={3} className="pt-5 text-center" id="img-container"></Col>
          <Col md={8} className="p-5">
            <Row>
              <Col md={10} className="mb-5" id="trackList">
                {loading ? (
                  <div>Loading...</div>
                ) : searchResults && searchResults.length > 0 ? (
                  searchResults.map((song) => (
                    <Card key={song.id} className="mb-3">
                      <h3>{song.title}</h3>
                    </Card>
                  ))
                ) : (
                  <div>Nessun risultato trovato.</div>
                )}
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
