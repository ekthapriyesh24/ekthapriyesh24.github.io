import React from 'react';
import './style.Skills.css';
import Untitled from './Untitled.png';
import Cpp from './cpp.png';
import Webdev from './webdev.png';
import Pyt from './pyt.png';
function Skills()
{
    return (
        <div className="container-fluid jumbotron">
        <div className="jumbotron">
            <span className="s1 googlehoverp my-2 audio">Programming Skills</span>
        </div>
        <div className="pie d-flex justify-content-around bg-light">
            <div className="skin">
                <div id="spinoff" className="spd spd1"></div>
                <div id="spinoff1" className="spd spd1">
                <img src={Untitled} className="rounded-circle" height="130" width="130" alt="alt"></img>
                </div>
            </div>
            <div className="skin">
                <div id="spinoff2" className="spd spd1"></div>
                <div id="spinoff3" className="spd spd1">
                <img src={Cpp} className="rounded-circle" height="130" width="130" alt="alt"></img>
                </div>
            </div>
            <div className="skin">
                <div id="spinoff4" className="spd spd1"></div>
                <div id="spinoff5" className="spd spd1">
                <img src={Webdev} className="rounded-circle" height="130" width="130" alt="alt"></img>
                </div>
            </div>
            <div className="skin">
                <div id="spinoff6" className="spd spd1"></div>
                <div id="spinoff7" className="spd spd1">
                <img src={Pyt} className="rounded-circle" height="130" width="130" alt="alt"></img>
                </div>
            </div>
        </div>
        <div>
        <div className="bar jumbotron bg-light ham">
            <div className="row">
                <div className="col">
                    <span>C++</span>
                    <div className="progress" style={{height: "20px"}}>
                    <div className="progress-bar" style={{width:"60%",height:"20px",backgroundColor:"rgb(219,68,55)",color:"white"}}>60%</div>
                    </div>
                </div>
                <div className="col">
                    <span>Git</span>
                    <div className="progress" style={{height: "20px"}}>
                    <div className="progress-bar" style={{width:"75%",height:"20px",backgroundColor:"rgb(9, 66, 158)",color:"white"}}>75%</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>Web Dev.</span>
                    <div className="progress" style={{height: "20px"}}>
                    <div className="progress-bar bg-warning" style={{width:"40%",height:"20px",backgroundColor:"rgb(244,160,0)",color:"white"}}>40%</div>
                    </div>
                </div>
                <div className="col">
                    <span>Python</span>
                    <div className="progress" style={{height: "20px"}}>
                    <div className="progress-bar bg-success" style={{width:"30%",height:"20px",backgroundColor:"rgb(15,157,88)",color:"white"}}>30%</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
export default Skills;