import React from "react";
import imgPlaneta1 from '../imgPlanetas/mercurio.png'
import imgPlaneta2 from '../imgPlanetas/venus.png'
import imgPlaneta3 from '../imgPlanetas/tierra.png'
import imgPlaneta4 from '../imgPlanetas/marte.png'
import imgPlaneta5 from '../imgPlanetas/jupiter.png'
import imgPlaneta6 from '../imgPlanetas/saturno.png'
import imgPlaneta7 from '../imgPlanetas/urano.png'
import imgPlaneta8 from '../imgPlanetas/neptuno.png'

function MenuPlanetario() {

  return (
    <div className="menuPlanetario">
        <img className="imgMenuPlanetario" src={imgPlaneta1} alt="imgMenuPlanetario"/>
        <img className="imgMenuPlanetario" src={imgPlaneta2} alt="imgMenuPlanetario"/>
        <img className="imgMenuPlanetario" src={imgPlaneta3} alt="imgMenuPlanetario"/>
        <img className="imgMenuPlanetario" src={imgPlaneta4} alt="imgMenuPlanetario"/>
        <img className="imgMenuPlanetario" src={imgPlaneta5} alt="imgMenuPlanetario"/>
        <img className="imgMenuPlanetario" src={imgPlaneta6} alt="imgMenuPlanetario"/>
        <img className="imgMenuPlanetario" src={imgPlaneta7} alt="imgMenuPlanetario"/>
        <img className="imgMenuPlanetario" src={imgPlaneta8} alt="imgMenuPlanetario"/>

    </div>
  );
}
export default MenuPlanetario;
