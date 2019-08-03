import React from 'react';
import './style.Education.css';
import ig1 from './chic1.jpg';
class Education extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <div className="jumbotron">
                <div className="my-4">
                    <span className="s2 googlehoverp my-2 audio">Education</span>
                </div>
                <div id="demo" className="carousel slide yatra" data-ride="carousel">
                    <ul className="carousel-indicators">
                      <li data-target="#demo" data-slide-to="0" className="active"></li>
                      <li data-target="#demo" data-slide-to="1"></li>
                      <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={ig1} alt="Los Angeles" />
                        <div className="carousel-caption">
                            <h3>ICSE</h3>
                            <p>96.8%</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ig1} alt="Chicago" width="1200" height="700" />
                        <div className="carousel-caption">
                            <h3>CBSE</h3>
                            <p>93%</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ig1} alt="New York" width="1200" height="700" />
                        <div className="carousel-caption">
                            <h3>JEE Mains</h3>
                            <p>AIR 9775</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
            </div>
        );
    }
}
export default Education;