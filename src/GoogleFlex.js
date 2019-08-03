import React from 'react';
import './style.GoogleFlex.css';
function GoogleFlex(props)
{
    var x=props.names;
    var z=props.size;
    var py=props.py;
    var my=props.my;
    var px=props.px;
    var googlehoveropt=props.googlehoveropt
    var y=x.split("");
        return(
            <div className="flex-container1 audio">
                { 
                        y.map((n,index)=>
                        (
                        <h1 className={'a'+(index%4)+" "+googlehoveropt+" "+my+" "+py+" "+px+" "+z} key={index}>{n}</h1>
                        )
                        )
                 }
            </div>
        );
}
export default GoogleFlex;