import React from 'react';
import * as i18n from "i18next";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

export default class TopMenu extends React.Component {

    state = {
        lang: "en"
    };
    langChange = e => {
        console.log('lang change' + e.target.name)
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
            <div className="row navbar" style={styleTop}>
                <div className="col-4">

                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-8">
                            {/*<select className="selectBox" onChange={this.langChange} name="lang" value={lang}>*/}
                            {/*    <option className="optionsMenu" value="en">*/}
                            {/*        English*/}
                            {/*    </option>*/}
                            {/*    <option className="optionsMenu" value="vi">*/}
                            {/*        Việt Nam*/}
                            {/*    </option>*/}
                            {/*</select>*/}

                        </div>
                        <div className="col-4">

                            {/*<input type="text" className="search-input " id="addEventstart" required*/}
                            {/*       name="startDate" placeholder="Type a Game"/>*/}
                            {/*<button >Search<i className="fa fa-search" aria-hidden="true"/>*/}
                            {/*</button>*/}
                            <Link to="/cart" className="nav-links float-right">
                                <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"/>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}
