import { Container, Row, Col, ProgressBar, Button } from "react-bootstrap";

import Next from "../assets/playerbuttons/Next.png";
import Play from "../assets/playerbuttons/Play.png";
import Previous from "../assets/playerbuttons/Previous.png";
import Repeat from "../assets/playerbuttons/Repeat.png";
import Shuffle from "../assets/playerbuttons/Shuffle.png";

function SectionPlayer() {
  return (
    <Container fluid className="fixed-bottom pt-1" style={{ height: "5.5rem", backgroundColor: "#282828" }}>
      <Row className="justify-content-between">
        <Col sm={6} className=" offset-3 offset-md-4 offset-lg-6 playerControls mt-1">
          <Button variant="outline" href="#">
            <img src={Shuffle} alt="shuffle" style={{ width: "14px", marginTop: "1rem", filter: "brightness(60%)" }} />
          </Button>
          <Button variant="outline" href="#">
            <img
              src={Previous}
              alt="previous"
              style={{ width: "14px", marginTop: "1rem", filter: "brightness(60%)" }}
            />
          </Button>
          <Button variant="outline" href="#">
            <img src={Play} alt="play" style={{ width: "14px", marginTop: "1rem", filter: "brightness(60%)" }} />
          </Button>
          <Button variant="outline" href="#">
            <img src={Next} alt="next" style={{ width: "14px", marginTop: "1rem", filter: "brightness(60%)" }} />
          </Button>
          <Button variant="outline" href="#">
            <img src={Repeat} alt="repeat" style={{ width: "14px", marginTop: "1rem", filter: "brightness(60%)" }} />
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center py-3">
        <Col md={7} lg={5} className="offset-0 offset-md-0 ps-md-0 offset-lg-2">
          <ProgressBar now={0} style={{ color: "white", backgroundColor: "#414141", height: "3px" }} />
        </Col>
      </Row>
    </Container>
  );
}

export default SectionPlayer;
