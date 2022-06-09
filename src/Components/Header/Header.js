import React from "react";
import Image1 from "../Image/Image1";
import Image2 from "../Image/Image2";
import "./Header.css";
import vid from "../Assets/Vid.mp4";
import Boton from "../Buttons/boton";
import Card from "../Card/Card.js";
import Card4 from "../Card/Card4";



function Header (){

    return(
<div className="Cont-Tot">
<div className="img-1">
<Image1></Image1>
</div>
<div className="video-player">
    <video src={vid} className="video" controls></video>
</div>
<div className="conte-head">
<div className="div-carta-4"><Card4></Card4></div>
<div className="conte-image">
<Image2>
        
</Image2>
</div>
</div>




</div>

    )

} export default Header;