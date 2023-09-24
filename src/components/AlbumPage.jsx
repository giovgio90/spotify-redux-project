import { useEffect } from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setAlbumPage } from "../redux/actions";
import SectionPlayer from "./SectionPlayer";

const AlbumPage = (props) => {
  const params = useParams();

  const albumPage = useSelector((state) => state.albumPage.content);
  const dispatch = useDispatch();

  const albumFetch = async () => {
    const resp = await fetch("https://deezerdevs-deezer.p.rapidapi.com/album/" + params.id, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "446acbbc21mshddea86ae7700867p1e29b9jsnd56234c5f0d5",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });

    if (resp.ok) {
      const data = await resp.json();
      if (data) {
        dispatch(setAlbumPage(data));
        console.log(data);
      } else {
        console.error("Dati dell'album non validi:", data);
      }
    } else {
      console.error("Errore nella richiesta dell'album. Stato della risposta:", resp.status);
    }
  };

  useEffect(() => {
    albumFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="mb-0 mb-lg-5">
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
          <Col md={2} className="pt-5 text-center" id="img-container"></Col>
          <Col md={12} lg={4} className="d-flex flex-column align-items-center justify-content-center">
            {albumPage && albumPage.cover_medium && (
              <div className="mb-5 mb-lg-auto">
                <img src={albumPage.cover_medium} alt="" />
                <h4 className="text-white mt-1 mb-auto text-center">{albumPage.title}</h4>
                <Link to={"/artist/" + albumPage.artist.id} style={{ textDecoration: "none" }} className="text-white">
                  <p className="text-center text-white">{albumPage.artist.name}</p>
                </Link>
              </div>
            )}
          </Col>
          <Col md={12} lg={5}>
            {albumPage &&
              albumPage.tracks &&
              albumPage.tracks.data &&
              albumPage.tracks.data.map((track, i) => (
                <div className="d-flex justify-content-between" key={`id-${i}`}>
                  <p className="text-white">{track.title}</p>
                  <span className="text-white">{(track.duration / 60).toFixed(2)}</span>
                </div>
              ))}
          </Col>
        </Row>
      </Container>

      <SectionPlayer />
    </>
  );
};
export default AlbumPage;
