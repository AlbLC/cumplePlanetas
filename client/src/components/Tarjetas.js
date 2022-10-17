import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgPlaneta1 from '../imgPlanetas/mercurio.png'

function Tarjetas() {
  return (
    <Card className='tarjetas'>
      <Card.Header>Mercurio</Card.Header>
      <Card.Body>
      <img className="imgMenuPlanetario" src={imgPlaneta1} alt="imgMenuPlanetario"/>
        <Card.Title>Tienes 150 años mercurianos</Card.Title>
        <Card.Text>
        Mercurio es el planeta más pequeño de nuestro sistema solar. Simplemente, es un poco más grande que la Luna de la Tierra. Es el planeta más cercano al Sol, pero no es realmente el más cálido. Venus es el más cálido.
        </Card.Text>
        <Button variant="primary">Más información</Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjetas;