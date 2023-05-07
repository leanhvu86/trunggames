import React from 'react';
import './login.css';
import {ReCAPTCHA} from "react-google-recaptcha";

const recaptchaRef = React.createRef();

class Recaptcha extends React.Component {

    onSubmit = () => {
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onSubmit(recaptchaValue);
    }

    onChange(value) {
        console.log("Captcha value:", value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{height: '200px'}}>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeM3KklAAAAAOPe1BJlqUCsonZnoGLzCf0rFakI"
                    onChange={this.onChange}
                />
            </form>
        )
    }
}

export default Recaptcha
