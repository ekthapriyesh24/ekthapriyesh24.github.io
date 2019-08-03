import React from 'react';
import './style.Projects.css';
import Cal from './cal.jpeg';
import Syn from './syn.png';
function DoIt(props)
{
    return(
        <div id={props.id} className="row show googlehoverp collapse multi-collapse my-3 py-2">
        <div className="col flex-container1 ham">
            <span className="s3">{props.text}</span>
        </div>
        <a className="col a flex-container1 m-2" href={props.hr} style={{textDecoration:"none"}}>
            <div className="col a flex-container1 m-2">
                <span className="text-dark s3 lib flex-container1 ham">Github</span>
                <i className="s3 flex-container1 fab fa-github gi"></i>
            </div>
        </a>
        <img className="col" src={props.sr} width={props.w} height={props.h} alt="alt"></img>
    </div>
    );
}
class Projects extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
    return (
        <div className="container-fluid">
            <div className="my-5">
            <span className="s2 googlehoverp audio">Projects</span>
            </div>
            <div className="d-flex justify-content-around my-3 py-2 ham">
                    <button className="btn btn-outline-warning my-3 py-2" data-toggle="collapse" href=".multi-collapse" aria-expanded="false" aria-controls="hihi1 hihi2">All</button>
                    <button className="btn btn-outline-danger my-3 py-2" data-toggle="collapse" href="#hihi1" aria-expanded="false" aria-controls="hihi1">Android</button>
                    <button className="btn btn-outline-primary my-3 py-2" data-toggle="collapse" href="#hihi2" aria-expanded="false" aria-controls="hihi2">Web</button>
            </div>
            <DoIt id="hihi1" text="A stack based Android calculator" hr="https://www.github.com/ekthapriyesh24/calculator" sr={Cal} w="200" h="300"/>
            <DoIt id="hihi2" text="A web application that fetches synonyms of a particular word" hr="https://www.github.com/ekthapriyesh24/synonyms" sr={Syn} w="400" h="400"/>
        </div>
    );
    }
}
export default Projects;