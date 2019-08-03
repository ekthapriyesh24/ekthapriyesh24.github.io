import React from 'react';
import './style.Load.css';
function Circle(props)
{
    return(
    <div className={props.c} style={{background:props.color,animationDelay:props.d,zIndex:props.z}}>
    </div>
    );    
}
function Load()
{
    return(
        <div className="back">
            <div id="cont">
                <Circle c="circle" color="rgb(219,68,55)" d="0s" z="0" />
                <Circle c="circle" color="rgb(9, 66, 158)" d="0.5s" z="1" />
                <Circle c="circle" color="rgb(244,160,0)" d="1s" z="2"  />
                <Circle c="circle" color="rgb(15,157,88)" d="1.5s" z="3"  />
            </div>
        </div>
    );
}
export default Load;