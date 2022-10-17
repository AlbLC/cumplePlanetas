import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

function Info() {
    const [open, setOpen] = useState(false);

    return (
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
    );
  }

export default Info;