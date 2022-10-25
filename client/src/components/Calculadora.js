import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Form, Button, NavDropdown, Navbar, Nav, Container, Carousel, NavLink } from "react-bootstrap";

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


import github from '../imglogo/github.png'

import { Link, animateScroll as scroll } from "react-scroll";
import Accordion from "react-bootstrap/Accordion";

import React, { useEffect, useState } from "react";

import banner from '../imglogo/banner.png'

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

    
    <div className="containerTodo">


{/* MENÚ NAVBAR */}
      <Navbar className="barraMenu" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Repositorio</Nav.Link>
              <Nav.Link href="#pricing">Documentación</Nav.Link>
              <NavDropdown title="Porfolios" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Alberto Lara</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Jorge Sánchez
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Lydia Vega</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


{/* BANNER CABECERA */}
      <a href='/Planets' className="banner">
        <img className="imgbanner" src={banner} alt="banner" />
      </a>


{/* MENÚ PLANETAS */}
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


{/* BOTÓN INFORMACIÓN DESPLEGABLE */}
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


{/* CALCULADORA */}
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
          <button className="button-81" type="button" onClick={() => calcular()}>
            Calcular tu edad en cada planeta
          </button>
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
                  <button className="button-81"
                    id={planet.name}
                    variant="primary"
                    onClick={(e) => setView(false)}
                  >
                    Menos información
                  </button>
                </div>
              ) : (
                ""
              )}
              {view != planet.name ? (
                <button className="button-81"
                  id={planet.name}
                  variant="primary"
                  onClick={(e) => setView(e.target.id)}
                >
                  Más información
                </button>
              ) : (
                ""
              )}
            </Card.Body>
          </Card>
        ))
        : ""}

<MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='p-4 border-bottom'>

                    <div>
                        <a href='https://github.com/AlbLC/cumplePlanetas' className='me-4 text-reset'>
                            <span>Descarga, clona o lee la documentación del repositorio</span>
                            <img className="imgithub" src={github} alt="Second slide" />
                        </a>

                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    Tempus in planetarum
                                </h6>
                                <p id="parrafofooter">
                                    Este proyecto de Full stack está disponible en su repositorio. Puedes descargarlo, leer la documentación y hacer pruebas con él. Puedes ver los portfolios de los integrantes que lo han creado. Gracias por hacer un buen uso de él y esperamos que te diviertas.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Tecnologías utilizadas</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Javascript
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        MongoDB
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Atlas
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Mongoose
                                    </a>
                                </p>

                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'> </h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Express
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Node
                                    </a>
                                </p>

                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'> </h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        CSS
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Bootstrap
                                    </a>
                                </p>

                            </MDBCol>


                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: '#E8E7E2' }}>
                    © 2022 Copyright :
                    <a className='text-reset fw-bold' href='https://tempusinplanetarum.com/'>
                        tempusinplanetarum.com
                    </a>
                </div>
            </MDBFooter>


    </div>
  );
}

export default Calculadora;
