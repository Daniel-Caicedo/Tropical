import React from "react";
import img15 from "../Assets/Recurso15.jpg";

import Boton from "../Buttons/boton";
import "./Card.css";

function Card(imgsrc){
  
return(

  <div className="card bg-dark h-80 w-50 ">
<img className="card-img" src={img15} alt="Card image"></img>
<Boton></Boton>
  </div>

)

} export default Card;