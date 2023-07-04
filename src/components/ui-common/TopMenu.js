import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../../constants/userActions';
import LocaleOptions from './Locale';
import {FormattedMessage} from 'react-intl';
import configData from '../../config.json';
import {setPackage, viewGame} from "../../constants/cartActions";
import Autocomplete from "./Autocomplete";

class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleChangeMobileSearch = this.handleChangeMobileSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.state = {
            click: false,
            lang: this.props.language,
            value: '',
            searchType: 'A',
            openSearch: false,
            gameOptions: [],
            packageOptions: [],
            options: []
        };
    }

    componentDidMount() {
        let listTemp = [];
        let listPackTemp = [];
        this.props.listGame.forEach((game) => {
            listTemp.push(game.name);
        })
        this.props.allPackages.forEach((pack) => {
            listPackTemp.push(pack.name);
        })
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
        this.setState({gameOptions: listTemp, options: listTemp, packageOptions: listPackTemp});
    }

    langChange = (e) => {
        console.log('lang change' + e.target.name);
    };

    handleChangeSearch(e) {
        if (e.target.value === "A")
            this.setState({searchType: "A", options: this.state.gameOptions});
        else
            this.setState({searchType: "B", options: this.state.packageOptions});

        this.setState({value:''});
    }

    onKeyDown(event) {
        // const target = event.target;
        // let value = target.value;
        let value = event;
        // const name = target.name;
        if (this.state.searchType === "A") {
            let checkDup = 0;
            let gameChoose;
            for (let item in this.props.listGame) {
                if (this.props.listGame[item].name.toUpperCase() === value.toUpperCase()) {
                    gameChoose = this.props.listGame[item];
                }
            }
            this.setState({value:''});
            this.props.viewGame(gameChoose);
            this.props.setPackage({});
            if (window.location.pathname !== '/game-detail') {
                setTimeout(
                    window.location.href = "/game-detail", 2000
                )
            }

        } else {
            let checkDup = 0;
            let packChoose;
            for (let item in this.props.allPackages) {
                if (this.props.allPackages[item].name.toUpperCase() === value.toUpperCase()) {
                    packChoose = this.props.allPackages[item];
                }
            }
            for (let item in this.props.listGame) {
                if (this.props.listGame[item].id === packChoose.gameId) {
                    this.props.viewGame(this.props.listGame[item]);
                    this.props.setPackage(packChoose);
                    this.setState({value:''});
                    if (window.location.pathname !== '/package-detail') {
                        setTimeout(
                            window.location.href = "/package-detail", 2000
                        )
                    }
                }
            }
        }
        // if ((event.charCode || event.keyCode) === 13) {
        //     console.log(value)
        //     if (this.state.searchType === "A") {
        //         let checkDup = 0;
        //         let gameChoose;
        //         for (let item in this.props.listGame) {
        //             if (this.props.listGame[item].name.toUpperCase()===value.toUpperCase()) {
        //                 gameChoose = this.props.listGame[item];
        //                 checkDup += 1;
        //                 if (checkDup > 1) {
        //                     alert("Vui lòng lấy thêm thông tin!");
        //                     return;
        //                 }
        //             }
        //         }
        //         this.props.viewGame(gameChoose);
        //         setTimeout(
        //             window.location.href = "/game-detail", 2000
        //         )
        //     } else {
        //         let checkDup = 0;
        //         let packChoose;
        //         for (let item in this.props.allPackages) {
        //             if (this.props.allPackages[item].name.toUpperCase()===value.toUpperCase()) {
        //                 packChoose = this.props.allPackages[item];
        //                 checkDup += 1;
        //                 if (checkDup > 1) {
        //                     alert("Vui lòng lấy thêm thông tin!");
        //                     return;
        //                 }
        //             }
        //         }
        //         for (let item in this.props.listGame) {
        //             if (this.props.listGame[item].id === packChoose.gameId) {
        //                 this.props.viewGame(this.props.listGame[item]);
        //                 this.props.setPackageView(packChoose.id);
        //                 setTimeout(
        //                     window.location.href = "/game-detail", 2000
        //                 )
        //             }
        //         }
        //     }
        // }
    }

    handleLogOut() {
        console.log('logout');
        this.props.logout(1);
        window.location.href = '/login';
    }

    handleChange(event) {
        const target = event.target;
        let value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleChangeMobileSearch(event) {
        this.setState({
            openSearch: !this.state.openSearch,
            searchType: "A",
            value: '',
            options: this.state.gameOptions
        });
    }

    render() {
        const {t} = this.props;

        const {lang} = this.state;
        const styleTop = {
            width: '100%',
            borderBottom: '0.5px solid #a6a6a6'
        };

        return (
            <div className="row navbar" style={styleTop}>

                <div className="row w-100 justify-content-end text-white"
                     style={{gap: '1em', color: '#88888 !important'}}>
                    {window.innerWidth > 1000 ? <div className="row">
                            <div className="col">
                                <select value={this.state.searchType}
                                        className="choose-search formSelect text-white w-100 cursor-pointer"
                                        onChange={this.handleChangeSearch}>
                                    <option value="A">{this.props.language === 'en' ? "Game" : "Trò chơi"}</option>
                                    <option value="B">{this.props.language === 'en' ? "Package" : "Gói nạp"}</option>
                                </select>
                            </div>
                            <div className="col">
                                <Autocomplete style={{width: '500px'}} language={this.props.language}
                                              suggestions={this.state.options} onChange={this.onKeyDown}
                                />
                            </div>
                        </div>
                        : <span onClick={this.handleChangeMobileSearch}
                                style={{marginTop: '5px' , cursor:'pointer'}}>{!this.state.openSearch ?
                            <FormattedMessage id="open-search"/> : ""}</span>}
                    <LocaleOptions/>
                    <Link to="/cart" className="cart-icon"
                          style={{width: '30px', height: '30px', position: 'relative'}}>
                        <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"/>
                        <span className="total-count">{this.props.packageCount}</span>
                    </Link>
                    {this.props.token !== null && this.props.token !== '' ? (
                        <div className="dropdown ml-3" style={{cursor: 'pointer'}}>
                            <div
                                className="dropdown-toggle d-flex align-items-center justify-content-end"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <div style={{width: '30px', height: '30px', overflow: 'hidden'}}>
                                    <img src="https://i.pravatar.cc/100?img=3"
                                         style={{
                                             aspectRatio: 1 / 1,
                                             width: '100%',
                                             height: 'auto',
                                             borderRadius: '50%'
                                         }}/>
                                </div>
                            </div>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton"
                                 style={{zIndex: 99999}}>
                                <div className="px-4 py-1" style={{maxWidth: '220px'}}>
                                    <p
                                        className="m-0 p-0 font-weight-bold"
                                        style={{
                                            whiteSpace: 'nowrap',
                                            display: 'block',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                    >
                                        {this.props.user.fullName}
                                    </p>
                                    <p className="m-0 p-0 font-weight-lighter" style={{fontSize: '0.875rem'}}>
                                        Version: {configData.VERSION}
                                    </p>
                                </div>
                                <hr className="mx-1 my-1"/>
                                <ul className="m-0 p-0">
                                    <li
                                        className="dropdown-item"
                                        onClick={() => {
                                            window.location.href = '/profile';
                                        }}
                                    >
                                        <FormattedMessage id="profile"/>
                                    </li>
                                    <li
                                        className="dropdown-item"
                                        onClick={() => {
                                            window.location.href = '/my-order';
                                        }}
                                    >
                                        <FormattedMessage id="list orders"/>
                                    </li>
                                    <li onClick={this.handleLogOut} className="dropdown-item">
                                        <FormattedMessage id="logout"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className="cart-icon">
                            <FormattedMessage id="login"/>
                        </Link>
                    )}
                </div>
                <br/>
                <br/>
                {this.state.openSearch ?
                    <div className="row">
                        <div className="col">
                            <select value={this.state.searchType}
                                    className="choose-search formSelect text-white w-100 cursor-pointer"
                                    onChange={this.handleChangeSearch}>
                                <option value="A">{this.props.language === 'en' ? "Game" : "Trò chơi"}</option>
                                <option value="B">{this.props.language === 'en' ? "Package" : "Gói nạp"}</option>
                            </select>
                        </div>
                        <div className="col-8">
                            <Autocomplete language={this.props.language}
                                          suggestions={this.state.options} onChange={this.onKeyDown}
                            />
                        </div>
                        <div className="col">
                            <span style={{float: 'right', marginTop: '5px', color: '#ffffff', cursor: 'pointer'}}
                                  onClick={this.handleChangeMobileSearch}> <FormattedMessage id="close-search"/></span>
                        </div>

                    </div>
                    : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.currency,
        language: state.language,
        packageCount: state.packageCount,
        user: state.user,
        token: state.token,
        listGame: state.listGame,
        allPackages: state.allPackages
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        logout: (id) => {
            dispatch(logout(id));
        },
        viewGame: (data) => {
            dispatch(viewGame(data))
        },
        setPackage: (data) => {
            dispatch(setPackage(data))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);

