import React from "react";
import img3 from "../Assets/Recurso3.jpg";

import Boton from "../Buttons/boton";
import "./Card.css";

function Card2(imgsrc){
  
return(

  <div className="card bg-dark h-100 w-80 ">
<img className="card-img" src={img3} alt="Card image"></img>
<Boton></Boton>
  </div>

)

} export default Card2;