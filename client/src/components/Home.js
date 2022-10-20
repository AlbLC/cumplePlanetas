import React from "react";
import {
  Form,
  Button,
  Navbar,
  Container,
  Carousel,
  NavLink,
} from "react-bootstrap";

function Home() {
  return (
    <div>
      <Container className="home">
        <Button size="lg" className="buttonHome" variant="none">
          <NavLink href="/Planets" variant="info">
            Planets
          </NavLink>{" "}
        </Button>
        <Button size="lg" className="buttonHome" variant="">
          Coke{" "}
        </Button>
        <Button size="lg" className="buttonHome" variant="">
          Lydia{" "}
        </Button>
        <Button size="lg" className="buttonHome" variant="">
          Alberto{" "}
        </Button>
      </Container>
    </div>
  );
}

export default Home;
