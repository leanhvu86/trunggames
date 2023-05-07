import React, {isValidElement} from 'react';
import './login.css';
import validator from 'validator'
import configData from '../../config.json';
import {addToCart} from "../../constants/cartActions";
import {connect} from "react-redux";
import {login} from "../../constants/userActions";
import {Link} from "react-router-dom";
import Recaptcha from "./Recaptcha";

class AuthenticateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            username: "",
            phoneNumber: "",
            fullName: "",
            error: "",
            loginForm: true,
            forgetForm: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeForm = this.changeForm.bind(this);
        this.changeFormForget = this.changeFormForget.bind(this);
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
        if (this.state.loginForm) {
            this.setState({error: ''});
            fetch(
                configData.SERVER_URL + "/auth/signin",
                {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEyMyIsImlhdCI6MTY4MTY1OTMzNiwiZXhwIjoxNjgxNzQ1NzM2fQ.zxN9upN4w3YsCyd7z5tH5nmCWq3NwSo5idLH6P0dRyYlz_TzEvPG4bEem0qjJo-cWWmXfdLIvjSY2Xa3DvFrnA'
                    },
                    body: JSON.stringify({
                        "username": this.state.username,
                        "password": this.state.password
                    })
                }
            )
                .then((res) => res.json())
                .then((json) => {
                    // this.setState({root: root});
                    console.log(json)
                    if (json.status === 200) {
                        alert("Login successfully!")
                        this.props.login(json.data);
                        window.location.href = '/';
                    } else
                        this.setState({error: 'Wrong username or Password'})
                });
        } else {
            if (validator.isEmail(this.state.email)) {
                fetch(
                    configData.SERVER_URL + "/auth/signup",
                    {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEyMyIsImlhdCI6MTY4MTY1OTMzNiwiZXhwIjoxNjgxNzQ1NzM2fQ.zxN9upN4w3YsCyd7z5tH5nmCWq3NwSo5idLH6P0dRyYlz_TzEvPG4bEem0qjJo-cWWmXfdLIvjSY2Xa3DvFrnA'
                        },
                        body: JSON.stringify({
                            "username": this.state.username,
                            "password": '',
                            "email": this.state.email,
                            "phoneNumber": this.state.phoneNumber,
                            "fullName": this.state.fullName,
                            "address": "a",
                            "role": ["user"]
                        })
                    }
                )
                    .then((res) => res.json())
                    .then((json) => {
                        // this.props.login(json.data);
                        alert("Register successfully!");
                        this.changeForm();

                    }, (error) => {
                        if (error) {
                            this.setState({error: 'Can not sign up. Please contact to administrator!'})
                        }
                    });
            } else {
                this.setState({error: 'Invalid email'})
            }
        }
    }

    isValidEmail(email) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
    }

    changeForm() {
        this.setState({
            loginForm: !this.state.loginForm,
            forgetForm: false,
        });
    }

    changeFormForget() {
        this.setState({
            forgetForm: !this.state.forgetForm,
            loginForm: true
        });
    }

    renderForm() {
        return (
            <div className=" form"
                 style={{
                     paddingTop: '10%',
                     justifyContent: 'center',
                     textAlign: 'center',
                     display: 'block',
                     width: '100%'
                 }}>
                <Link to="/">
                    <img src={require("./service-image/first_logo-removebg-preview.png")}
                         style={{width: '150px', height: 'auto'}} alt=""/>
                </Link>

                <form className="needs-validation" onSubmit={this.handleSubmit}>
                    <br/>
                    <div className="form-group">

                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            aria-describedby="emailHelp"
                            required
                            placeholder="Enter username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    {!this.state.loginForm ?
                        <div className="row">
                            <div className="col">
                                <div className="form-group">

                                    <input
                                        type="text"
                                        name="fullName"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter fullname"
                                        value={this.state.fullName}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-group">

                                    <input
                                        type="number"
                                        name="phoneNumber"
                                        className="form-control"
                                        id="exampleInputPhone1"
                                        aria-describedby="emailHelp"
                                        required
                                        placeholder="Enter Phone"
                                        value={this.state.phoneNumber}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>

                        </div>
                        : null
                    }
                    {!this.state.loginForm ?
                        <div className="form-group">

                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div> : null
                    }
                    {!this.state.forgetForm ?
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
                        </div>
                        : null}

                    <div className="row">
                        <span className="error-text"> {this.state.error}</span>

                    </div>
                    <button type="submit" className="btn btn-primary float-right">
                        Submit
                    </button>
                    <a
                        className=" float-right shop-now" style={{
                        color: '#888888',
                        fontSize: '15px',
                        cursor: 'pointer',
                        padding: ' 8px 20px'
                    }}
                        onClick={this.changeForm}
                    >
                        {this.state.loginForm ? 'Sign Up' : 'Sign In'}
                    </a>
                    <a
                        className=" float-right shop-now" style={{
                        color: '#888888',
                        fontSize: '15px',
                        cursor: 'pointer',
                        padding: ' 8px 20px'
                    }}
                        onClick={this.changeFormForget}
                    >
                        {this.state.forgetForm ? '' : 'ForgetPassword'}
                    </a>
                    <br/>
                    <br/>
                </form>
            </div>

        )
    }

    render() {
        return (
            <div className="row authen-form">
                {window.innerWidth < 1000 ?
                    <div className="row form-authen">
                        {this.renderForm()}
                        <Recaptcha/>
                    </div>
                    :
                    <div className="row form-authen">
                        <div className="col-7">

                        </div>
                        <div className="col-5">
                            {this.renderForm()}
                            <Recaptcha/>
                        </div>
                    </div>
                }

                <div className="row">
                    <h6 style={{paddingLeft: '25%', width: '400px'}}>Copy right &#169; 2023 Trung Games</h6>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.currency
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        login: (user) => {
            dispatch(login(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateForm)
