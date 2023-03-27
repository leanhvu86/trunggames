import React from 'react';
import * as i18n from "i18next";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class TopMenu extends React.Component {

    state = {
        lang: "en"
    };
    langChange = e => {
        console.log('lang change'+e.target.name)
        // this.setState({[e.target.name]: e.target.value}, () => {
        //     localStorage.setItem("lang", this.state.lang);
        //     const lang = localStorage.getItem("lang");
        //     i18n.changeLanguage(lang).then();
        // });
    };

    render() {
        const {t} = this.props;

        const {lang} = this.state;
        const styleTop = {
            width: '100%',
            borderBottom: '0.5px solid #a6a6a6'
        }

        return (
            <div className="navbar" style={styleTop}>
                <select
                    className="selectBox"
                    onChange={this.langChange}
                    name="lang"
                    value={lang}
                >
                    <option className="optionsMenu" value="en">
                        English
                    </option>
                    <option className="optionsMenu" value="vi">
                        Việt Nam
                    </option>
                </select>

            </div>
        );
    }
}
