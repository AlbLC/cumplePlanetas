import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link, animateScroll as scroll } from "react-scroll";
import Accordion from "react-bootstrap/Accordion";

import React, { useEffect, useState } from "react";

function Calculadora() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [old, setOld] = useState("");

  const [data, setData] = useState("");
  const [view, setView] = useState(false);
  const [messageFecha, setMessageFecha] = useState("");

  useEffect(() => {
    fetch("/planets")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  //! MONTH

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  //! Verifica los datos de los días correctos

  function calcular() {
    var day30 =
      (month == 4 || month == 6 || month == 4 || month == 9 || month == 11) &&
      day > 0 &&
      day <= 30;
    var day31 =
      (month == 1 ||
        month == 3 ||
        month == 5 ||
        month == 7 ||
        month == 8 ||
        month == 8) &&
      day > 0 &&
      day <= 31;
    var noBisiesto = month == 2 && day > 0 && day <= 28;
    var bisiesto =
      (year % 100 != 0 && year % 4 == 0) ||
      (year % 400 == 0 && month == 2 && day > 0 && day <= 29);

    if (bisiesto || noBisiesto || day31 || day30) {
      diferencia();
      setMessageFecha(false);
    } else {
      setMessageFecha(true);
    }
  }

  //! Diferencia en días [FechaNacimiento - fechaActual]
  function diferencia() {
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
      {/* Insertar DD/MM/YY */}

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

                {meses
                  ? meses.map((mes, i) => {
                      return (
                        <option key={i} value={i + 1}>
                          {mes}
                        </option>
                      );
                    })
                  : ""}
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
          {messageFecha ? <p>Fechas incorrectas</p> : ""}
        </Form>
      </div>
      {data
        ? data.map((planet, i) => (
            <Card key={i} id={planet.name} className="tarjetas">
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
                    <div>
                      <iframe
                        src={planet.model}
                        width="100%"
                        height="450px"
                        frameBorder="0"
                      />
                      <p>{planet.description}</p>
                    </div>
                    <Button
                      id={planet.name}
                      variant="primary"
                      onClick={(e) => setView(false)}
                    >
                      Menos información
                    </Button>
                  </div>
                ) : (
                  ""
                )}
                {view != planet.name ? (
                  <Button
                    id={planet.name}
                    variant="primary"
                    onClick={(e) => setView(e.target.id)}
                  >
                    Más información
                  </Button>
                ) : (
                  ""
                )}
              </Card.Body>
            </Card>
          ))
        : ""}
    </div>
  );
}

export default Calculadora;
