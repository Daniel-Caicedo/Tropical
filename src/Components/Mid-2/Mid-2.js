import React from "react";
import img7 from "../Assets/Recurso7.jpg";
import img8 from "../Assets/Recurso8.jpg";
import img9 from "../Assets/Recurso9.jpg";
import Boton from "../Buttons/boton";
import "./Mid-2.css";

function Mid_2 (){

    return(

        <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-sm-auto">
          <img src={img7} className="o-img7 "></img>
          </div>
          <div class="col-sm-auto">
          <img src={img9} className="o-img9  "></img>
          </div>
          <div class="col-sm-auto">
          <img src={img8} className="o-img8"></img>
          </div>
          <div class="col-lg-auto ">
          <p className="parrafo-grid">Lentes de sol “CAT” en carey, un must pata este verano</p>
          <Boton></Boton>
          </div>
        </div>
      </div>
     
    )

} export default Mid_2;