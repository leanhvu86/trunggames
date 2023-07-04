import React from 'react';
import './login.css';
import validator from 'validator';
import configData from '../../config.json';
import {connect} from 'react-redux';
import {login, logout} from '../../constants/userActions';
import {Link} from 'react-router-dom';
import LocaleOptions from '../ui-common/Locale';
import {FormattedMessage} from 'react-intl';
import {toast} from 'react-toastify';
import {checkLoadData} from "../../constants/cartActions";
import ProgressBar from "../ui-common/ProgressBar";

const testData = [
    {bgcolor: "#66f6e0", completed: 10},
    {bgcolor: "#00c7ad", completed: 50},
    {bgcolor: "#00695c", completed: 100},
];

class AuthenticateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            nickname: '',
            phoneNumber: '',
            fullName: '',
            error: '',
            completed: 0,
            bgcolor: "",
            loginForm: true,
            forgetForm: false,
            pendingRequest: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleOutFocus = this.handleOutFocus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeForm = this.changeForm.bind(this);
        this.changeFormForget = this.changeFormForget.bind(this);
        this.props.logout(0);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleOutFocus(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === 'phoneNumber') this.validateEmailPhone(value, '');
        if (name === 'email') this.validateEmailPhone('', value);
    }

    validateEmailPhone(phoneNumber, email) {
        fetch(configData.SERVER_URL + '/auth/validate-phone-email', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                email: email,
                phoneNumber: phoneNumber,
            })
        })
            .then((res) => res.json())
            .then(
                (json) => {
                    if (json.status === 200) {
                        this.setState({
                            error: this.props.language === 'en' ? json.data : json.data,
                            pendingRequest: json.data !== ''
                        });

                    } else {
                        // this.setState({
                        //     error: this.props.language === 'en' ? 'Account is exist!' : "Tài khoản đã tồn tại!"
                        // });
                    }
                },
                (error) => {
                    if (error) {
                        this.setState({
                            error: this.props.language === 'en' ? 'Can not sign up. Please contact to administrator!' : "Đã có lỗi xảy ra. Vui lòng liên hệ admin!"
                        });
                    }
                }
            );
    }

    handleSubmit(event) {
        event.preventDefault(event);
        this.setState({error: '', pendingRequest: true});
        if (this.state.loginForm && !this.state.forgetForm) {
            fetch(configData.SERVER_URL + '/auth/signin', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
                .then((res) => res.json())
                .then((json) => {
                    // this.setState({root: root});
                    console.log(json);

                    if (json.status === 200) {
                        this.props.checkLoadData(0);
                        setTimeout(()=>{console.log("pending")},2000);
                        this.setState({pendingRequest: false});
                        toast.success(this.props.language === 'en' ? 'Login successfully!' : "Đăng nhập thành công!");
                        this.props.login(json.data);

                        localStorage.setItem('servicesToken', json.data.token);
                        setTimeout(window.location.href = '/', 2000)
                    } else {
                        this.setState({pendingRequest: false});
                        this.setState({error: 'Wrong username or Password'});
                    }
                });
        } else if (!this.state.forgetForm && !this.state.loginForm) {
            if (validator.isEmail(this.state.email)) {
                fetch(configData.SERVER_URL + '/auth/signup', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        username: this.state.email,
                        nickname: this.state.nickname,
                        email: this.state.email,
                        phoneNumber: this.state.phoneNumber,
                        fullName: this.state.fullName,
                        address: 'a',
                        role: ['ROLE_USER']
                    })
                })
                    .then((res) => res.json())
                    .then(
                        (json) => {
                            if (json.status === 200) {
                                // this.props.login(json.data);
                                toast.success(this.props.language === 'en' ? 'Register successfully! Please check your email for password!' : "Đăng ký thành công! Vui lòng check mail để lấy password");
                                this.setState({bgcolor: testData[2].bgcolor, completed: 50, pendingRequest: false});
                                setTimeout(()=>{console.log("pending")},2000);
                                this.changeForm();
                            } else {
                                this.setState({
                                    error: this.props.language === 'en' ? 'Information is exist!' : "Thông tin đã đã tồn tại!"
                                });
                            }
                        },
                        (error) => {
                            if (error) {
                                this.setState({
                                    error: this.props.language === 'en' ? 'Can not sign up. Please contact to administrator!' : "Đã có lỗi xảy ra. Vui lòng liên hệ admin!"
                                });
                            }
                        }
                    );
            } else {
                this.setState({error: 'Invalid email'});
            }
        } else if (this.state.forgetForm) {
            toast.success(this.props.language === 'en' ? 'Request send successful! Please wait for checking account!' : "Yêu cầu đã được gửi đi! Vui lòng đợi chúng tôi kiểm tra tài khoản!");
            fetch(configData.SERVER_URL + '/auth/forget-password', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
                .then((res) => res.json())
                .then((json) => {
                    // this.setState({root: root});
                    console.log(json);

                    if (json.status === 200) {
                        if (json.data === false) {
                            toast.error(this.props.language === 'en' ? 'Username not found!' : "Tài khoản đăng nhập không tồn tại!");
                            setTimeout(()=>{console.log("pending")},2000);
                            this.setState({pendingRequest: false});
                        } else {
                            toast.success(this.props.language === 'en' ? 'Your new password have sent successfully!' : "Mật khẩu mới gửi về email thành công!");
                            setTimeout(()=>{console.log("pending")},2000);
                            this.setState({pendingRequest: false, forgetForm: false, loginForm: true});
                        }
                    } else {
                        this.setState({pendingRequest: false});
                        this.setState({error: 'There is someproblem, please contact admin'});
                        toast.error(this.props.language === 'en' ? 'Username not found!' : "Tài khoản đăng nhập không tồn tại!");
                    }
                });
        }
    }

    isValidEmail(email) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    }

    changeForm() {
        this.setState({
            loginForm: !this.state.loginForm,
            forgetForm: false
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
            <div className="p-3">
                <div className="row m-0 justify-content-end">
                    <div className="border rounded pl-1 pr-1 color-dark bg-white" style={{borderColor: '#ced4da'}}>
                        <LocaleOptions/>
                    </div>
                </div>
                <div
                    style={{
                        justifyContent: 'center',
                        textAlign: 'center',
                        display: 'block',
                        width: '100%'
                    }}
                >
                    <div>
                        <div className="row w-100 m-0 align-items-center justify-content-center mb-4">
                            <div style={{width: '100px'}}>
                                <Link to="/">
                                    <img src={require('./service-image/first_logo-removebg-preview.png')}
                                         style={{width: '100%', height: 'auto'}} alt=""/>
                                </Link>
                            </div>
                        </div>
                        <div className="row m-0 align-items-center w-100">
                            <h1 className="m-0 font-weight-bold">
                                {this.state.forgetForm ? (
                                    <FormattedMessage id="forgot password"/>
                                ) : this.state.loginForm ? (
                                    <FormattedMessage id="login"/>
                                ) : (
                                    <FormattedMessage id="sign_up"/>
                                )}
                            </h1>
                        </div>
                    </div>

                    <form className="needs-validation mt-4" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <span className="error-text"> {this.state.error}</span>
                        </div>

                        {!this.state.loginForm ? (
                            <div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="nickname"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        required
                                        placeholder={this.props.language === 'en' ? "Enter Nickname" : "Nhập biệt danh"}
                                        value={this.state.nickname}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder={this.props.language === 'en' ? "Enter email" : "Nhập email"}
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        onBlur={this.handleOutFocus}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col pl-0">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="fullName"
                                                className="form-control"
                                                aria-describedby="emailHelp"
                                                placeholder={this.props.language === 'en' ? "Enter Fullname" : "Nhập họ tên"}
                                                value={this.state.fullName}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col pr-0">
                                        <div className="form-group">
                                            <input
                                                type="number"
                                                name="phoneNumber"
                                                className="form-control"
                                                id="exampleInputPhone1"
                                                aria-describedby="emailHelp"
                                                required
                                                placeholder={this.props.language === 'en' ? "Enter Phone" : "Nhập số điện thoại"}
                                                onBlur={this.handleOutFocus}
                                                value={this.state.phoneNumber}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                        {this.state.forgetForm ? (
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    id="exampleInputusername1"
                                    required
                                    placeholder={this.props.language === 'en' ? "Enter Registered Email" : "Nhập email đã đăng ký"}
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        ) : null}
                        {!this.state.forgetForm && this.state.loginForm ? (
                            <div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        id="exampleInputusername1"
                                        required
                                        placeholder={this.props.language === 'en' ? "Enter Email" : "Nhập email"}
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        required
                                        placeholder={this.props.language === 'en' ? "Enter Password" : "Nhập mật khẩu"}

                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        ) : null}
                        <button type="submit" className="btn btn-primary w-100" disabled={this.state.pendingRequest}>
                            <FormattedMessage id="submit"/>
                        </button>
                        <div className="mt-3">
                            <a
                                className="color-primary"
                                style={{
                                    fontSize: '15px',
                                    cursor: 'pointer',
                                    padding: ' 8px 20px',
                                    color: '#888888'
                                }}
                                onClick={this.changeFormForget}
                            >
                                {this.state.forgetForm ? '' : <FormattedMessage id="forgot_password"/>}
                            </a>
                            <p className="mt-2">
                                {this.state.loginForm ? <FormattedMessage id="do not have an account?"/> :
                                    <FormattedMessage id="already have account?"/>}
                            </p>
                            <a
                                className="color-primary"
                                style={{
                                    fontSize: '15px',
                                    cursor: 'pointer',
                                    padding: ' 8px 20px',
                                    color: '#888888'
                                }}
                                onClick={this.changeForm}
                            >
                                {this.state.loginForm ? <FormattedMessage id="sign_up"/> :
                                    <FormattedMessage id="sign_in"/>}
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container-fluid p-0 bg-white" style={{height: '100dvh'}}>
                <div className="container p-0 h-100">
                    <div className="row flex-column align-items-between h-100 m-0">
                        <div className="row m-0 align-items-center" style={{flexGrow: 1}}>
                            <div
                                className="authen-form h-auto rounded bg-transparent h-auto rounded overflow-hidden"
                                style={{
                                    boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.1)'
                                }}
                            >
                                <div className="row w-100 m-0 flex-wrap-reverse" style={{background: '#f2f0f3'}}>
                                    <div
                                        className="col-md-12 col-lg-7 form-authen m-0 w-100 d-lg-block d-md-none d-sm-none d-xs-none"/>
                                    <div className="col-md-12 col-lg-5">
                                        {this.renderForm()}
                                        {/* <Recaptcha /> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="row m-0 p-2">
              <h6>Copy right &#169; 2023 Trung Games</h6>
            </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.currency,
        language: state.language
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        checkLoadData: (id) => {
            dispatch(checkLoadData(id));
        },
        login: (user) => {
            dispatch(login(user));
        },
        logout: (id) => {
            dispatch(logout(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateForm);

