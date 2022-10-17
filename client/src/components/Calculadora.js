import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import React, { useEffect, useState } from 'react';

function Calculadora() {


  return (
    <div className='calculadora'>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDay">
          <Form.Control type="dia" placeholder="Día" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">

          <Form.Select aria-label="Default select example">
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
          <Form.Control type="anio" placeholder="Año" />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Calcular
      </Button>

    </Form>
    </div>
  );
}

export default Calculadora;