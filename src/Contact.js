import React from 'react';
import './style.Contact.css';
class Contact extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
        name: '',
        email: '',
        message: '',
        mailSent: false,
        error: null
        }          
    }
    handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
    }
    render(){
        return(
            <div className="Contact container-fluid">
                <div className="d-flex row justify-content-around my-3">
                    <div className="col flex-container1">
                        <span className="googlehoverp s2 audio">Contact Me</span>
                    </div>
                </div>
                <div className="d-flex row justify-content-around my-3">
                    <div className="col flex-container1">
                        <span className="">
                            <i className="fas fa-envelope xy m-3"></i>
                        </span>
                        <span className="row s3 arna">
                            ekthapriyesh24@gmail.com
                        </span>
                    </div>
                    <div className="col flex-container1">
                        <span className="">
                        <i className="fas fa-map-marker-alt xy m-3"></i>
                        </span>
                        <span className="row s3 arna">
                            Allahabad-211012
                        </span>
                    </div>
                    <div className="col flex-container1">
                        <span className="">
                        <i className="fas fa-phone-alt xy m-3"></i>
                        </span>
                        <span className="row s3 arna">
                        +91-**********
                        </span>
                    </div>
                </div>
                <form action="#" className="jumbotron bg-light container googlehoverp">
                    <div className="d-flex row justify-content-between m-1">
                        <input placeholder="Your Name" id="name" type="text" value={this.state.name} className="w-25" onChange={e => this.setState({ name: e.target.value })}
/>
                        <input placeholder="Your e-mail" id="email" type="email" value={this.state.email} name="email" className="w-50" onChange={e => this.setState({ email: e.target.value })}
/>
                    </div>
                    <div className="form-group d-flex row justify-content-around m-1">
                        <textarea rows="4" columns="9" className="w-100 my-3" id="message" placeholder="Let's start the conversation" value={this.state.message} onChange={e => this.setState({ message: e.target.value })}
></textarea>
                    </div>
                    <div className="form-group d-flex row justify-content-around m-1">
                        <button className="btn btn-outline-success ham" data-toggle="modal" data-target="#thank" type="submit" value="submit" onClick={e => this.handleFormSubmit(e)}>Send</button>
                        <div class="modal fade" id="thank" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel b612">Thank You!</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body bst s3">
                                 Do expect a reply soon
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary ham" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                         </div>
                        </div>
                    </div>
                </form>
                <div className="bg-dark d-flex row justify-content-around p-1">
                    <span className="text-light s3 bst">created with <i className="fas fa-heart he xy1"></i> by Priyesh Raj <i className="far fa-copyright xy1"></i>2019</span>
                </div>
            </div>
        );
    }
}
export default Contact;