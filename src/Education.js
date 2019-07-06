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
            <div className="container-fluid jumbotron my-3 mx-2">
                <div className="m-4">
                    <span className="s2 googlehoverp m-2">Education</span>
                </div>
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul class="carousel-indicators">
                      <li data-target="#demo" data-slide-to="0" class="active"></li>
                      <li data-target="#demo" data-slide-to="1"></li>
                      <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={ig1} alt="Los Angeles" />
                        <div class="carousel-caption">
                            <h3>ICSE</h3>
                            <p>96.8%</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={ig1} alt="Chicago" width="1200" height="700" />
                        <div class="carousel-caption">
                            <h3>CBSE</h3>
                            <p>93%</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={ig1} alt="New York" width="1200" height="700" />
                        <div class="carousel-caption">
                            <h3>JEE Mains</h3>
                            <p>AIR 9775</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
            </div>
        );
    }
}
export default Education;