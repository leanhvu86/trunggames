import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {logout} from "../../constants/userActions";
import {connect} from "react-redux";

class TopMenu extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogOut= this.handleLogOut.bind(this);
        this.state={
            click:false,
            lang:this.props.language
        }
    }

    langChange = e => {
        console.log('lang change' + e.target.name)
    };

    handleLogOut() {
        console.log('logout')
        this.props.logout(1);
        window.location.href = '/login';
    }

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
                            <Link to="/cart" className="cart-icon float-right" style={{width:'30px',height:'30px',position:'relative'}}>
                                <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"/>
                                <span className="total-count">{this.props.packageCount}</span>
                            </Link>
                            <button onClick={this.handleLogOut}>Logout</button>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.currency,
        language: state.language,
        packageCount: state.packageCount,
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        logout: (id) => {
            dispatch(logout(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu)