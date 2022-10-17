import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import Accordion from "react-bootstrap/Accordion";

import React, { useEffect, useState } from "react";

function Calculadora() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [old, setOld] = useState("");

  const [data, setData] = useState("");
  const [view, setView] = useState(false);

  useEffect(() => {
    console.log("actualiza");
    // const headers = { "Content-Type": "application/json" };
    fetch("/planets")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  function calcular() {
    var FechaNacimiento = `${year}-${month}-${day}`;
    var fechaNace = new Date(FechaNacimiento);
    var fechaActual = new Date();

    var edad = Math.floor((fechaActual - fechaNace) / (1000 * 60 * 60 * 24));

    setOld(edad);
  }

  return (
    <div>
      <div className="menuPlanetario">
        {data
          ? data.map((planet, k) => (
              <img
                key={k}
                className="imgMenuPlanetario"
                src={planet.photo[0]}
                alt="imgMenuPlanetario"
              />
            ))
          : ""}
      </div>

      <div className="info">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Información de uso</Accordion.Header>
            <Accordion.Body>
              Escribe en las diferentes casillas tu día, mes y año de nacimiento
              y pulsa calcular. Abajo verás tu edad y tu próximo cumpleaños en
              los diferentes planetas. Si quieres más información de un planeta
              en concreto pulsa en él.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="calculadora">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDay">
              <Form.Control
                type="dia"
                placeholder="Día"
                onChange={(e) => setDay(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setMonth(e.target.value)}
              >
                <option>Mes</option>
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="8">Agosto</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAge">
              <Form.Control
                type="anio"
                placeholder="Año"
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Button variant="dark" type="button" onClick={() => calcular()}>
            Calcular
          </Button>
        </Form>
      </div>

      {data
        ? data.map((planet) => (
            <Card className="tarjetas">
              <Card.Header>{planet.name}</Card.Header>
              <Card.Body>
                <img
                  className="imgMenuPlanetario"
                  src={planet.photo[0]}
                  alt="imgMenuPlanetario"
                />
                {old ? (
                  <Card.Title>
                    <p>Tienes {(old / planet.translation).toFixed(2)} años</p>
                  </Card.Title>
                ) : (
                  ""
                )}
                <Card.Text>{planet.history}</Card.Text>
                {view == planet.name ? (
                  <div>
                    <iframe
                      src={planet.model}
                      width="100%"
                      height="450px"
                      frameBorder="0"
                    />
                    <p>{planet.description}</p>
                  </div>
                ) : (
                  ""
                )}

                <Button
                  id={planet.name}
                  variant="primary"
                  onClick={(e) => setView(e.target.id)}
                >
                  Más información
                </Button>
              </Card.Body>
            </Card>
          ))
        : ""}
    </div>
  );
}

export default Calculadora;
