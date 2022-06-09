import { render } from "@testing-library/react";
import React from "react";
import "./Mid-1.css";
import img3 from "../Assets/Recurso3.jpg";
import img4 from "../Assets/Recurso4.jpg";
import img5 from "../Assets/Recurso5.jpg";
import img6 from "../Assets/Recurso6.jpg";
import Card2 from "../Card/Card2";

function Mid_1 (){

return(
<div className="cont-princi">

<div class="container">

<div class="row d-flex justify-content-md-center">
          <div class="col-lg-auto">
          <img src={img4} className="o-img3  "></img>
          </div>
          <div class="col-lg-auto ">
          <Card2></Card2>
          </div>
         
          <div class="col-lg-auto">
          <img src={img5} className="o-img5 "></img>
          </div>
          
          </div>

         

</div>
<div className="o-brown-foot">
    <img className="imagen-fondo" src={img6}></img>
</div>
</div>

)

} export default Mid_1;