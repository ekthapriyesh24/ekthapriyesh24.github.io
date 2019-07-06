import React from 'react';
import './style.Contact.css';
class Contact extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <div className="Contact">
                <div className="d-flex row justify-content-around m-3 p-2">
                    <div className="col flex-container1">
                        <span className="googlehoverp s2 m-2">Contact Me</span>
                    </div>
                </div>
                <div className="d-flex row justify-content-around m-3 p-2">
                    <div className="col flex-container1 m-2">
                        <span className="m-3">
                            <i class="fas fa-envelope xy m-2"></i>
                        </span>
                        <span className="row s3">
                            ekthapriyesh24@gmail.com
                        </span>
                    </div>
                    <div className="col flex-container1 m-2">
                        <span className="m-3">
                        <i class="fas fa-map-marker-alt xy m-2"></i>
                        </span>
                        <span className="row s3">
                            Allahabad-211012
                        </span>
                    </div>
                    <div className="col flex-container1 m-2">
                        <span className="m-3">
                        <i class="fas fa-phone-alt xy m-2"></i>
                        </span>
                        <span className="row s3">
                        +91-**********
                        </span>
                    </div>
                </div>
                <div className="jumbotron container googlehoverp">
                    <div className="d-flex row justify-content-between m-1">
                        <input placeholder="Name" type="text" className="w-25"/>
                        <input placeholder="E-mail" type="text" className="w-50"/>
                    </div>
                    <div className="form-group d-flex row justify-content-around m-1">
                        <textarea rows="4" columns="9" className="w-100 my-3" placeholder="Lets start the conversation"></textarea>
                    </div>
                    <div className="form-group d-flex row justify-content-around m-1">
                        <button type="button" className="btn btn-outline-success">Send</button>
                    </div>
                </div>
                <div className="bg-dark d-flex row justify-content-around p-1">
                    <span className="text-light m-1 s3">created with <i class="fas fa-heart he xy1"></i> by Priyesh Raj <i class="far fa-copyright xy1"></i>2019</span>
                </div>
            </div>
        );
    }
}
export default Contact;