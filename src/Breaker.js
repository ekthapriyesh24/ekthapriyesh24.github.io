import React from 'react';
class Breaker extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
        var x=this.props.mm;
        return(
            <div className="Breaker container-fluid justify-content-between d-flex row justify-content-around" style={{margin: x+" 0px "+x+" 0px"}}>
                <div className="bg-dark" style={{height: "5px",width:"30%",margin: "30px 0px 30px 0px"}}></div>
            </div>
        );
    }
}
export default Breaker;