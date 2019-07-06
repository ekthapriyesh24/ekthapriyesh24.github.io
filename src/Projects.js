import React from 'react';
import './style.Projects.css';
import Cal from './cal.jpeg';
import Syn from './syn.png';
function DoIt(props)
{
    return(
        <div className="d-flex row justify-content-around m-3 p-2 googlehoverp">
        <div className="col flex-container1">
            <span className="s3">{props.text}</span>
        </div>
        <a className="col a flex-container1 m-2" href={props.hr} style={{textDecoration:"none"}}>
            <div className="col a flex-container1 m-2">
                <span className="text-dark s3 lib flex-container1">Github</span>
                <i className="s3 flex-container1 fab fa-github gi"></i>
            </div>
        </a>
        <img className="col" src={props.sr} width={props.w} height={props.h} alt="alt"></img>
    </div>
    );
}
function Button(props)
{
    return(
        <div>
            <button type="button" onClick={props.onClick} className={props.clas}>{props.text}</button>
        </div>
    );
}
class Projects extends React.Component
{
    constructor(props)
    {
        super(props);
        this.upd = this.upd.bind(this);
        this.upd1 = this.upd1.bind(this);
        this.upd2 = this.upd2.bind(this);
        this.state={show:true,show1:true};
    }
    upd()
    {
        this.setState((state,props)=> ({show:true,show1:true}));
    }
    upd1()
    {
        this.setState((state,props)=> ({show:false,show1:true}));
    }
    upd2()
    {
        this.setState((state,props)=> ({show:true,show1:false}));
    }
    render(){
    return (
        <div className="container-fluid">
            <div className="m-5">
            <span className="s2 googlehoverp">Projects</span>
            </div>
            <div className="d-flex justify-content-around m-2">
                    <Button onClick={this.upd} text="All" clas="btn btn-outline-warning"/>
                    <Button onClick={this.upd1} text="Web" clas="btn btn-outline-danger"/>
                    <Button onClick={this.upd2} text="Android" clas="btn btn-outline-primary"/>
            </div>
            {this.state.show?<DoIt text="A stack based Android calculator" hr="https://www.github.com/ekthapriyesh24/calculator" sr={Cal} w="200" h="300"/>:null}
            {this.state.show1?<DoIt text="A web application that fetches synonyms of a particular word" hr="https://www.github.com/ekthapriyesh24/synonyms" sr={Syn} w="400" h="400"/>:null}
        </div>
    );
    }
}
export default Projects;