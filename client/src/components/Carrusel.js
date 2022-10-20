import Carousel from 'react-bootstrap/Carousel';
import imgCarrusel1 from '../imgPlanetas/imgCarrusel1.jpg'
import imgCarrusel2 from '../imgPlanetas/imgCarrusel2.jpg'
import imgCarrusel3 from '../imgPlanetas/imgCarrusel3.jpg'


function Carrusel() {
  return (
    
    <div className='carrusel'>
    <Carousel variant="dark">
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
  );
}

export default Carrusel;