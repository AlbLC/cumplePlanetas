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

  //!DAYS crear options
  const days = () => {
    var arrayDay = [];
    for (let l = 1; l <= 31; l++) {
      arrayDay.push(l);
    }

    return arrayDay;
  };

  //! MONTH crear options

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

  //!YEARS crear options
  const years = () => {
    var fechaNow = new Date();
    var yearNow = fechaNow.getFullYear();
    var arrayYear = [];
    for (let k = yearNow; k > yearNow - 120; k--) {
      arrayYear.push(k);
    }

    return arrayYear;
  };

  //! Verifica los datos de los días correctos

  function calcular() {
    //* dd [1-28]
    const d28 = day > 0 && day <= 28;
    //* dd [1-29]
    const d29 = day > 0 && day <= 29;
    //* dd [1-30]
    const d30 = day > 0 && day <= 30;
    //* dd [1-31]
    const d31 = day > 0 && day <= 31;
    //* meses con 30 dias y dd[1-30]
    const m30 = (month == 4 || month == 6 || month == 9 || month == 11) && d30;
    //* meses q no son 30 dias y no es mm [2] y dd [1-31]
    const m31 = !m30 && month != 2 && d31;
    //* mm [2] y dd[1-28]
    const noBisiesto = month == 2 && d28;
    //* bisiesto1: yy no multiplo 100 y si de 4
    const noMult100Si4 = year % 100 != 0 && year % 4 == 0;
    //* bisiesto2:  yy multiplo 400, mm [2] y dd[0-29]
    const multi400 = year % 400 == 0 && month == 2 && d29;
    //* bisiesto1 o bisiesto2
    const bisiesto = noMult100Si4 || multi400;

    if (bisiesto || noBisiesto || m31 || m30) {
      diferencia();
      setMessageFecha(false);
    } else {
      setMessageFecha(true);
      setOld();
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

  function calYear(translation) {
    return (old / translation).toFixed(2);
  }
  
  function calDays(translation) {
    var fechaNow = new Date();
    var yearNow = fechaNow.getFullYear();
    var years = (old / translation).toFixed(2);
    var cont = 0;
    for (let i = year; i < yearNow; i++) {
      var bisiesto = (i % 100 != 0 && i % 4 == 0) || i % 400 == 0;
      if (bisiesto) {
        cont++;
        console.log(i + " es bisiesto");
      }
    }
    console.log(cont);
    return (years - parseInt(years)) * 365;
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
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setDay(e.target.value)}
              >
                <option>Día</option>
                {days()
                  ? days().map((day, i) => {
                      return (
                        <option key={i} value={day}>
                          {day}
                        </option>
                      );
                    })
                  : ""}
              </Form.Select>
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
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setYear(e.target.value)}
              >
                <option>Año</option>
                {years()
                  ? years().map((year, i) => {
                      return (
                        <option key={i} value={year}>
                          {year}
                        </option>
                      );
                    })
                  : ""}
              </Form.Select>
            </Form.Group>
            {messageFecha ? <p id="p-invalid">Fechas incorrectas</p> : ""}
          </Row>
          <Button variant="dark" type="button" onClick={() => calcular()}>
            Calcular
          </Button>
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
                    <p> {parseInt(calYear(planet.translation))}</p>
                    <p> {calDays(planet.translation)}</p>

                    <p>
                      Tienes {(old / planet.translation).toFixed(2)} años{" "}
                      {(
                        ((old / planet.translation).toFixed(2) -
                          parseInt(old / planet.translation).toFixed(0)) *
                        365
                      ).toFixed(0)}{" "}
                      dias{" "}
                      {(
                        ((
                          ((old / planet.translation).toFixed(2) -
                            parseInt(old / planet.translation).toFixed(0)) *
                          365
                        ).toFixed(2) -
                          parseInt(
                            ((old / planet.translation).toFixed(2) -
                              parseInt(old / planet.translation).toFixed(0)) *
                              365
                          ).toFixed(0)) *
                        24
                      ).toFixed(0)}{" "}
                      horas{" "}
                      {(
                        ((
                          ((
                            ((old / planet.translation).toFixed(2) -
                              parseInt(old / planet.translation).toFixed(0)) *
                            365
                          ).toFixed(2) -
                            parseInt(
                              ((old / planet.translation).toFixed(2) -
                                parseInt(old / planet.translation).toFixed(0)) *
                                365
                            ).toFixed(0)) *
                          24
                        ).toFixed(2) -
                          parseInt(
                            ((
                              ((old / planet.translation).toFixed(2) -
                                parseInt(old / planet.translation).toFixed(0)) *
                              365
                            ).toFixed(2) -
                              parseInt(
                                ((old / planet.translation).toFixed(2) -
                                  parseInt(old / planet.translation).toFixed(
                                    0
                                  )) *
                                  365
                              ).toFixed(0)) *
                              24
                          ).toFixed(0)) *
                        60
                      ).toFixed(0)}{" "}
                      min{" "}
                    </p>
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
