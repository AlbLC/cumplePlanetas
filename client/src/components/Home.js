import React, { } from "react";
import { Form, Button,Navbar,Container,Carousel, NavLink } from "react-bootstrap";



function Home () {
    
    

  
return(

<div>

                <Container className="home">
                   
                    <Button size="lg" className="buttonHome" variant=""><NavLink href="/Planets"  variant="info">Planets</NavLink>{' '}</Button>
                    <Button size="lg" className="buttonHome" variant="">Coke{' '}</Button>
                    <Button size="lg" className="buttonHome" variant=""><NavLink href="https://nanazardiy.com/"  variant="info">Lydia</NavLink>{' '}</Button>
                    <Button size="lg" className="buttonHome" variant=""><NavLink href="https://albertolara.netlify.app/"  variant="info">Alberto</NavLink>{' '}</Button>
                
                
                </Container>
            
       
                
            

    </div>
)
}
  
export default Home;