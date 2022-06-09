import React from "react";
import Image3 from "../Image/Image3";
import "./Mid-3.css";
import img11 from "../Assets/Recurso11.jpg";
import img12 from "../Assets/Recurso12.jpg";

import img14 from "../Assets/Recurso14.jpg";
import Card3 from "../Card/Card3";

function Mid_3 (){

    return(
<div className="o-conte-mid-3">
<div className="o-conte-img-mid-3">
    <Image3></Image3>
</div>

<div class="row d-flex justify-content-md-center">

<div class="col-lg-auto">
          <img src={img11} className="o-img11"></img>
          </div>
          <div class="col-lg-auto ">
         <img src={img12} className="o-imagen12"></img>
          </div>

</div>

<div className="div-text"><p className="text">    Linos y twills de algodón en colores moka y terrosos contrastan con tonalidades vibrantes como el azafrán.</p></div>
<div class="row d-flex justify-content-md-center">

<div class="col-lg-auto">
         <Card3></Card3>
          </div>
          <div class="col-sm-auto ">
         <img src={img14} className="o-imagen14"></img>
          </div>

</div>

<div className="o-white-mid-3"></div>
</div>

    )

} export default Mid_3;
