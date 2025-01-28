import React from "react";

function Featurebox(){
    return(
<div className="a-box">
    <div className="a-b-img">
        <img src={props.img} alt=""/>
    </div>
    <div className="a-b-text">
        <h2>{props.title}</h2>
        <p>lorem ipsum dolor sit amet consectetur adipisicing</p>

    </div>

</div>
    )
}

export default Featurebox;