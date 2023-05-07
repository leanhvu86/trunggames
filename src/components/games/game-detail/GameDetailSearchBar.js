import React from 'react';
import './game-detail.css';
import * as CurrencyFormat from "react-currency-format";
import StarsRating from "react-star-rate";
import GameContent from "./GameContent";
import connect from "react-redux/lib/connect/connect";
import {addToCart} from "../../../constants/cartActions";


const list = ['Hot',]

class GameDetailSearchBar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            namePackage: '',
            server: '',
            attribute: '',
            type: '',
            viewType: true,
            packages: this.props.game.gamePackages,
            packageView: window.innerWidth > 1000,
            isViewPackage:false,
            package:{}
        }
    }

    componentDidMount() {

    }

    onChangeServer(e) {
        console.log(e.target.value)
    }

    onChangeCardType(e) {
        // console.log(e)

    }

    removeActive() {
        document.getElementById("new-search").classList.remove('active');
        document.getElementById("price-search").classList.remove('active');
        document.getElementById("rating-search").classList.remove('active');
        document.getElementById("hot-search").classList.remove('active');
    }

    handleClick(type) {
        console.log(type)
        this.removeActive();
        let tempPackage;
        if (type === 1) {
            if (this.state.type === type) {
                this.setState({type: 0})
                this.setState({packages: this.props.game.gamePackages})
            } else {
                document.getElementById("hot-search").classList.add('active');
                this.setState({type: type})
                tempPackage = this.props.game.gamePackages;
                tempPackage.sort((a, b) => a.tradeCount - b.tradeCount);
                tempPackage.reverse();
                this.setState({packages: tempPackage})
            }
        } else if (type === 2) {
            if (this.state.type === type) {
                this.setState({type: 0})
            } else {
                document.getElementById("new-search").classList.add('active');
                this.setState({type: type})
                tempPackage = this.props.game.gamePackages;
                tempPackage.sort((a, b) => a.rating - b.rating);
                tempPackage.reverse();
                this.setState({packages: tempPackage});
            }

        } else if (type === 3) {
            if (this.state.type === type) {
                this.setState({type: 0})
            } else {
                document.getElementById("price-search").classList.add('active');
                this.setState({type: type})
                tempPackage = this.props.game.gamePackages;
                tempPackage.sort((a, b) => {
                    if (a.price > b.price) {
                        return 1;
                    }

                    if (a.price < b.price) {
                        return -1;
                    }

                    return 0;
                });

                this.setState({packages: tempPackage});
            }
        } else {
            if (this.state.type === type) {
                this.setState({type: 0})

            } else {
                document.getElementById("rating-search").classList.add('active');
                this.setState({type: type})
                tempPackage = this.props.game.gamePackages;
                tempPackage.sort((a, b) => a.rating - b.rating);
                tempPackage.reverse();
                this.setState({packages: tempPackage});
            }
        }
    };

    handleChangeViewType() {
        this.setState({viewType: !this.state.viewType});
    }

    handleChangePackageViewType() {
        this.setState({packageView: !this.state.packageView});
    }



    onClickChangeContent(e) {
        this.setState({viewType: !this.state.viewType});
    }

    onViewPackage(event) {
        this.props.onViewPackage(event);
        console.log(event);
    }


    renderSearchWebsite() {
        return (
            <div className="row">
                <div className="col">
                            <span className="search-bar-icon-filter" id="hot-search"
                                  onClick={this.handleClick.bind(this, 1)}>
                                <i className="fa fa-fire" aria-hidden="true"/>&nbsp;Hot</span>
                    <span className="search-bar-icon-filter" id="new-search" onClick={this.handleClick.bind(this, 2)}>
                                <i className="fa fa-clock-o" aria-hidden="true"/>&nbsp;New</span>
                    <span className="search-bar-icon-filter" id="price-search" onClick={this.handleClick.bind(this, 3)}>
                                <i className="fa fa-usd" aria-hidden="true"/>&nbsp;Price</span>
                    <span className="search-bar-icon-filter" id="rating-search"
                          onClick={this.handleClick.bind(this, 4)}>
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"/>&nbsp;Rating</span>

                </div>
                <div className="col">
                </div>
                <div className="col">
                    <div style={{
                        float: 'right', display: 'flex',
                        justifyContent: 'center'
                    }}>
                                <span onClick={this.handleChangePackageViewType.bind(this)}>
                                    {this.state.packageView ?
                                        <i className="fa fa-list fa-lg icon-button" aria-hidden="true"/> :
                                        <i className="fa fa-table fa-lg icon-button" aria-hidden="true"/>}
                                    &nbsp;&nbsp;
                            </span>
                        <span>
                                <i className="fa fa-chevron-left icon-button " aria-hidden="true"/>
                            &nbsp;&nbsp;&nbsp;Page&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-chevron-right icon-button" aria-hidden="true"/>
                            </span>
                    </div>

                </div>
            </div>
        )
    }

    renderSearchMobile() {
        return (
            <div className="row">
                <div className="col-8">
                            <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this, 1)}>
                                <i className="fa fa-fire" aria-hidden="true"/>&nbsp;Hot</span>
                    <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this, 2)}>
                                <i className="fa fa-clock-o" aria-hidden="true"/>&nbsp;New</span>
                    <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this, 3)}>
                                <i className="fa fa-usd" aria-hidden="true"/>&nbsp;Price</span>
                    <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this, 4)}>
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"/>&nbsp;Rating</span>

                </div>
                <div className="col-4">
                    <div style={{float: 'right', display: 'flex', justifyContent: 'center'}}>
                        <span>
                                <i className="fa fa-chevron-left icon-button"
                                   aria-hidden="true"/>&nbsp;&nbsp;&nbsp;Page&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-chevron-right icon-button" aria-hidden="true"/>

                            </span>
                    </div>

                </div>
            </div>
        )
    }

    renderListPackage() {
        let itemList = this.state.packages.map(item => {
            return (
                <div className="pack-content" key={item.id}>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-3">
                                    <div className="crop">
                                        <img src={item.imageId} alt={item.name}/>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <span className="package-name service-title">
                                        <a onClick={this.onViewPackage.bind(this,item.id)}> {item.name}</a>
                                           </span>
                                    <br/>
                                    <br/>
                                    <span>Máy chủ:&nbsp;{item.server[0].name} </span>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col" style={{textAlign: 'center'}}>

                                    <p><b className="currency">
                                        <CurrencyFormat displayType={'text'} value={item.price} thousandSeparator={true}
                                                        prefix={this.props.currency}/>
                                        </b>&nbsp;/&nbsp;
                                        <span className="unit-package">{item.unit}</span>
                                    </p>
                                    <span>Kho: {item.warehouseQuantity}&nbsp;&nbsp; Số lượng đã bán:{item.tradeCount}</span>
                                </div>
                                <div className="col">
                                    <div className="float-right">
                                        <StarsRating
                                            value={item.rating}
                                            disabled={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="seach-content search-detail-bar">
                    <div className="row">
                        <div className="col">
                            <div className="child-search-content">
                                <a>Find product</a>
                                <br/>
                                <input type="text" className="search-input " id="addEventstart" required
                                       name="startDate" placeholder="Type a package"/>
                            </div>

                        </div>
                        <div className="col">
                            <div className="child-search-content">
                                <a>Server</a>
                                <br/>
                                <select onChange={this.onChangeServer.bind(this)}>
                                    <option value="">Tất cả máy chủ</option>
                                    <option value="Korea">Korea</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Asia">Asia</option>
                                    <option value="North America">North America</option>
                                    <option value="Europe">Europe</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="child-search-content">
                                <a>Category</a>
                                <br/>
                                <select onSelect={this.onChangeCardType.bind(this)}>
                                    <option value="">Tất cả các thuộc tính</option>
                                    <option value="Korea">Token</option>
                                    <option value="Japan">Package</option>
                                    <option value="Asia">Pass</option>
                                    <option value="North America">Others</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="seach-content search-detail-bar">
                    {window.innerWidth < 1000 ? this.renderSearchMobile() : this.renderSearchWebsite()}
                    <hr/>
                </div>
                <br/>
                {this.state.packageView ? <div className="box">
                        {itemList}
                    </div> :
                    <div className="row box">
                        {this.state.packages.map(item => {
                            return (
                                <div className="col-lg-4 " key={item.id}>
                                    <div className=" pack-content-mobile">
                                        <div className="row ">
                                            <div className="col-3">
                                                <div className="crop">
                                                    <img src={item.imageId} alt={item.name}/>
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <span className="package-name service-title">
                                                    <a onClick={this.onViewPackage.bind(this,item.id)}>
                                                        {item.name}
                                                    </a>
                                                    </span>
                                                <br/>
                                                <br/>
                                                <div className="float-right ">
                                                    <p><b className="currency">
                                                        <CurrencyFormat displayType={'text'} value={item.price}
                                                                        thousandSeparator={true}
                                                                        prefix={this.props.currency}/>
                                                        </b>&nbsp;/&nbsp;
                                                        <span className="unit-package">{item.unit}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="underline-footer"/>
                                        <div className="row">
                                            <div className="col-4">
                                                <span>Máy chủ:&nbsp;{item.server[0].name} </span>
                                            </div>
                                            <div className="col-8">
                                                <div className="float-right">
                                                    <StarsRating
                                                        value={item.rating}
                                                        disabled={true}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>}
            </div>
        )
    }

    setIsModalVisible(){
        this.setState({setIsModalVisible:!this.state.isModalVisible})
    }
    render() {
        return (
            <div className="container ">
                <div className="row ">
                    <div className="col-4">

                    </div>
                    <div className="col-8">
                        <div style={{
                            width: 'auto', float: 'right', height: 'auto',
                            padding: '5px 5px', color: 'white'
                        }}>
                            {this.state.viewType ?
                                <span onClick={this.onClickChangeContent.bind(this)} className="view-type-button">User Guide</span>
                                : <span onClick={this.onClickChangeContent.bind(this)} className="view-type-button">Buy Package</span>}
                        </div>
                    </div>

                </div>
                <br/>
                {this.state.viewType ? this.renderListPackage() : <GameContent game={this.props.game}/>}
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
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetailSearchBar)
