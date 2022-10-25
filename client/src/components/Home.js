
import React, { } from "react";
import { Form, Button, NavDropdown, Navbar, Nav, Container, Carousel, NavLink } from "react-bootstrap";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import imgCarrusel1 from '../imgPlanetas/imgCarrusel1.jpg'
import imgCarrusel2 from '../imgPlanetas/imgCarrusel2.jpg'
import imgCarrusel3 from '../imgPlanetas/imgCarrusel3.jpg'


import github from '../imglogo/github.png'
import banner from '../imglogo/banner.png'



function Home() {

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

            {/* BANNER */}
            <a href='/Planets' className="banner">
                <img className="imgbanner" src={banner} alt="banner" />
            </a>

            <Container className="homeCarruselBotones">


                {/* CARRUSEL DE FOTOS */}
                <div className='carrusel'>
                    <Carousel variant="light">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgCarrusel1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>Tu edad planetaria</h5>
                                <p>Averigua la edad que tienes en cada planeta.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgCarrusel2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5>Apunta en el calendario tu cumpleaños</h5>
                                <p>Tienes la opción de apuntar en el calendario que te avise de tus múltiples cumpleaños.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imgCarrusel3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5>Información de los planetas</h5>
                                <p>
                                    Aquí vas a encontrar toda la información detallada de los planetas y su historia.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                {/* BOTONES PORTFOLIOS */}

                <div className="portfolios">

                    <a href='https://nanazardiy.com/' className="button-48 buttonHome">
                        <span>Lydia Vega Martín</span>
                        {/* <img className="imglinke" src={linkedin} alt="Second slide" /> */}
                    </a>

                    <a href='' className="button-48  buttonHome">
                        <span>Jorge Sánchez Cuesta </span>
                        {/* <img className="imglinke" src={linkedin} alt="Second slide" /> */}
                    </a>

                    <a href='https://albertolara.netlify.app/' className="button-48 buttonHome">
                        <span>Alberto Lara Cano</span>
                        {/* <img className="imglinke" src={linkedin} alt="Second slide" /> */}
                    </a>
                </div>



            </Container>

            <div className="botonCalcu">

                <a href='/Planets' className="button-81">
                    <span>¡Comienza a calcular tu edad planetaria!</span>
                </a>

            </div>


            {/* FOOTER */}

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
    )
}

export default Home;


