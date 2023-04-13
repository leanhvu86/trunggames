import React from 'react';
import './login.css';


class AuthenticateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loginForm: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeForm = this.changeForm.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault(event);
        console.log(this.state);
    }

    handleSubmitRegister(event) {
        event.preventDefault(event);
        console.log(this.state);
    }

    changeForm() {
        this.setState({
            loginForm: !this.state.loginForm
        });
    }


    renderRegisterStep() {
        return (
            <div className="advertisement">
                <span> 1.&nbsp; Register with email to receive a verification mail.</span>
                <br/>
                <span>2.&nbsp; Click on verification link in the registered email.</span>
                <br/>
                <span>3.&nbsp; Complete the sign up form.</span>
                <br/>
                <span>4.&nbsp; You are all set, start enjoy shopping in Trung Games</span>
            </div>
        )
    }

    render() {
        return (
            <div className="row authen-form">
                <div className=" row form-authen">

                    <div className="col-7">

                    </div>
                    <div className="col-5">
                        <div className="form"
                             style={{paddingTop: '10%', justifyContent: 'center', textAlign: 'center'}}>
                            <img src={require("./service-image/first_logo-removebg-preview.png")}
                                 style={{width: '150px', height: 'auto'}} alt=""/>
                            <form
                                className="needs-validation"
                                noValidate
                                onSubmit={this.handleSubmit}
                            >
                                <br/>
                                <div className="form-group">

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        required
                                        placeholder="Enter email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                {this.state.loginForm ?
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            required
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        />
                                    </div>:<br/>
                                }

                                <button type="submit" className="btn btn-primary float-right">
                                    Submit
                                </button>
                                <a
                                    className=" float-right shop-now" style={{color: '#888888',fontSize:'15px', cursor: 'pointer',padding:' 8px 20px'}}
                                    onClick={this.changeForm}
                                >
                                    {this.state.loginForm ? 'Sign Up': 'Sign In'}
                                </a>
                                <br/>
                                <br/>
                                <br/>
                                {this.state.loginForm ? '' : this.renderRegisterStep()}
                            </form>

                        </div>

                    </div>
                </div>
                <div className="row">
                    <h6 style={{paddingLeft: '25%', width: '400px'}}>Copy right &#169; 2023 Trung Games</h6>
                </div>

            </div>
        )
    }
}

export default (AuthenticateForm);
