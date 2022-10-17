import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import imgPlaneta1 from '../imgPlanetas/mercurio.png'
import imgPlaneta2 from '../imgPlanetas/venus.png'
import imgPlaneta3 from '../imgPlanetas/tierra.png'
import imgPlaneta4 from '../imgPlanetas/marte.png'
import imgPlaneta5 from '../imgPlanetas/jupiter.png'
import imgPlaneta6 from '../imgPlanetas/saturno.png'
import imgPlaneta7 from '../imgPlanetas/urano.png'
import imgPlaneta8 from '../imgPlanetas/neptuno.png'
import Accordion from 'react-bootstrap/Accordion';



import React, { useEffect, useState } from 'react';

function Calculadora() {

  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [old, setOld] = useState("")

  useEffect(()=>{
    
console.log("actualiza")
const headers = { 'Content-Type': 'application/json' }
    fetch("/",{headers}).then((response) => response.json()).then((response) => {
        console.log(response);
        

      });
  },[])

  function calcular() {


    var FechaNacimiento = `${year}-${month}-${day}`
    var fechaNace = new Date(FechaNacimiento);
    var fechaActual = new Date()



    var edad = Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365));

    setOld(edad)
  }


  return (
    <div>
      <div className="menuPlanetario">
        <img className="imgMenuPlanetario" src={imgPlaneta1} alt="imgMenuPlanetario" />
        <img className="imgMenuPlanetario" src={imgPlaneta2} alt="imgMenuPlanetario" />
        <img className="imgMenuPlanetario" src={imgPlaneta3} alt="imgMenuPlanetario" />
        <img className="imgMenuPlanetario" src={imgPlaneta4} alt="imgMenuPlanetario" />
        <img className="imgMenuPlanetario" src={imgPlaneta5} alt="imgMenuPlanetario" />
        <img className="imgMenuPlanetario" src={imgPlaneta6} alt="imgMenuPlanetario" />
        <img className="imgMenuPlanetario" src={imgPlaneta7} alt="imgMenuPlanetario" />
        <img className="imgMenuPlanetario" src={imgPlaneta8} alt="imgMenuPlanetario" />

      </div>
      <div className='info'>
        <Accordion defaultActiveKey="0">

          <Accordion.Item eventKey="1">
            <Accordion.Header>Información de uso</Accordion.Header>
            <Accordion.Body>
              Escribe en las diferentes casillas tu día, mes y año de nacimiento y pulsa calcular. Abajo verás tu edad y tu próximo cumpleaños en los diferentes planetas. Si quieres más información de un planeta en concreto pulsa en él.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className='calculadora'>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDay">
              <Form.Control type="dia" placeholder="Día" onChange={(e) => setDay(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">

              <Form.Select aria-label="Default select example" onChange={(e) => setMonth(e.target.value)}>

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
              <Form.Control type="anio" placeholder="Año" onChange={(e) => setYear(e.target.value)} />
            </Form.Group>
          </Row>
          <Button variant="dark" type="button" onClick={() => calcular()} >
            Calcular
          </Button>

        </Form>
        {old ? <p>{old} Años</p> : ""}
      </div>
      <Card className='tarjetas'>
        <Card.Header>Mercurio</Card.Header>
        <Card.Body>
          <img className="imgMenuPlanetario" src={imgPlaneta1} alt="imgMenuPlanetario" />
          <Card.Title>Tienes 150 años mercurianos</Card.Title>
          <Card.Text>
            Mercurio es el planeta más pequeño de nuestro sistema solar. Simplemente, es un poco más grande que la Luna de la Tierra. Es el planeta más cercano al Sol, pero no es realmente el más cálido. Venus es el más cálido.
          </Card.Text>
          <Button variant="primary">Más información</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Calculadora;