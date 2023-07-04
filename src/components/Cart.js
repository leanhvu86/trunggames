import React from 'react';
import {connect} from 'react-redux';
import {
    addQuantity,
    deselect,
    deselectAll,
    removeItem,
    select,
    selectAll,
    subtractQuantity
} from '../constants/cartActions';
import {Translation} from 'react-i18next';
import TopMenu from './ui-common/TopMenu';
import NavBar from './ui-common/NavBar';
import Footer from './Footer';
import ScrollButton from './ui-common/ScrollButton';
import ParallaxImage from './parallax/ParallaxImage';
import * as CurrencyFormat from 'react-currency-format';
import configData from '../config.json';
import {toast} from 'react-toastify';
import {FormattedMessage} from "react-intl";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            selected: 0,
            processSending: false,
            listCheckout: []
        };
        this.props.deselectAll(1);
        parent.scrollTo(0, 0);
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
        this.scanCheckoutInfo();
        this.props.deselectAll(1);
    };
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
        this.scanCheckoutInfo();
    };
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
        this.scanCheckoutInfo();
        this.props.deselectAll(1);
    };

    handleCheckoutAll = (event) => {
        if (this.props.checkoutAll === true) {
            this.props.deselectAll(1);
        } else {

            this.props.selectAll(1);
        }
        this.scanCheckoutInfo();
    };

    scanCheckoutInfo() {
        let lstCheckout = [];
        let totalPrice = 0;
        if (this.props.items.length > 0)
            this.props.items.forEach((item) => {
                if (item.checkout) {
                    totalPrice += item.amount;
                    lstCheckout.push(item);
                }
            });

        this.setState({listCheckout: lstCheckout});
        this.setState({total: totalPrice});
        this.setState({selected: lstCheckout.length});
    }

    handleCheckout = (event, id) => {
        console.log(id);
        const checkAdd = this.state.listCheckout.find((item) => item.packageId === id);
        if (checkAdd) {
            this.props.deselect(id);
        } else {
            this.props.select(id);
        }
        this.scanCheckoutInfo();
    };

    onCheckout() {
        console.log(this.state.listCheckout);
        console.log(this.props.items);
        this.setState({processSending: true})
        fetch(configData.SERVER_URL + '/orders/create', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Authorization: 'Bearer ' + this.props.token
            },
            body: JSON.stringify({
                items: this.state.listCheckout
            })
        })
            .then((res) => res.json())
            .then(
                (json) => {
                    console.log(json.data);
                    if (json.status === 200) {
                        this.setState({selected: 0, processSending: false});
                        this.state.listCheckout.forEach((item) => {
                            this.props.removeItem(item.packageId);
                        });
                        toast.success(this.props.language === 'en' ? 'Ordered successfully!' : "Đặt hàng thành công!");
                    } else if (json.status === 401) {
                        toast.warn(this.props.language === 'en' ? 'End session. Please log in again!' : "Hết session. Vui lòng đăng nhập lại!");
                        return;
                    } else {
                        this.setState({processSending: false});
                        toast.warn(this.props.language === 'en' ? 'Create order fail, please contact with admin!' : "Đặt hàng thất bại, vui lòng liên hệ với admin!");
                    }
                    this.props.deselectAll(1);
                    this.scanCheckoutInfo();
                },
                (error) => {
                    if (error) {
                        toast.error(this.props.language === 'en' ? 'Create order fail, please contact with admin!' : "Đặt hàng thất bại, vui lòng liên hệ với admin!");
                    }
                }
            );
    }


    render() {
        let addedItems = this.props.items.length ? (
            this.props.items.map((item) => {
                return (
                    <div className="container pack-content" key={item.packageId}>
                        <div className="row">
                            <div className="col">
                                {window.innerWidth > 1000 ?
                                    <div className="row">
                                        <div className="col-3" style={{display: 'flex'}}>
                                            <input type="checkbox" checked={item.checkout}
                                                   onChange={() => this.handleCheckout(this, item.packageId)}/>
                                            <div className="crop" style={{paddingLeft: '5px'}}>
                                                <img src={item.previewUrl} alt={item.name}/>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <span className="package-name ">{item.name}</span>
                                            <br/>
                                            <br/>
                                            {/*<span>Order information </span>*/}
                                        </div>
                                    </div> :
                                    <div className="row">
                                        <div className="row" style={{width: '100%'}}>
                                            <div className="col">
                                                <br/>
                                                <br/>
                                                <input type="checkbox" checked={item.checkout}
                                                       onChange={() => this.handleCheckout(this, item.packageId)}/>
                                            </div>
                                            <div className="col">
                                                <div className="crop" style={{paddingLeft: '5px'}}>
                                                    <img src={item.previewUrl} alt={item.name}/>
                                                </div>
                                            </div>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <span className="package-name "
                                              style={{width: '100%',}}>{item.name}</span>
                                    </div>
                                }
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col" style={{textAlign: 'center'}}>
                                        <p>
                                            <b className="currency">
                                                <CurrencyFormat displayType={'text'} value={item.price}
                                                                thousandSeparator={true} prefix={this.props.currency}/>
                                            </b>
                                            &nbsp;/&nbsp;
                                            <span className="unit-package">{item.unit}</span>
                                            <br/>
                                            <br/>
                                            <span>
                                              <i
                                                  className="fa fa-minus cart-icon"
                                                  aria-hidden="true"
                                                  onClick={() => {
                                                      this.handleSubtractQuantity(item.packageId);
                                                  }}
                                              />
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <i
                                                    className="fa fa-plus cart-icon"
                                                    aria-hidden="true"
                                                    onClick={() => {
                                                        this.handleAddQuantity(item.packageId);
                                                    }}
                                                />
                                            </span>
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p style={{textAlign: 'center'}}>
                                            <b className="currency">
                                                <CurrencyFormat
                                                    displayType={'text'}
                                                    value={item.amount}
                                                    thousandSeparator={true}
                                                    prefix={this.props.currency}
                                                />
                                            </b>
                                        </p>
                                        <div className="float-right">
                                            <span>
                            <i className="fa fa-trash-o fa-2x cart-icon"
                               onClick={() => {
                                   this.handleRemove(item.packageId);
                               }} aria-hidden="true"/>
                                             </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    // <li className="collection-item avatar" key={item.packageId}>
                    //             {/*<div className="item-img"> */}
                    //             {/*    <img src={item.img} alt={item.img} className=""/>*/}
                    //             {/*</div>*/}
                    //
                    //             <div className="item-desc">
                    //                 <span className="title">{item.name}</span>
                    //                 {/*<p>{item.desc}</p>*/}
                    //                 <p><b>Price: {item.amount}$</b></p>
                    //                 <p>
                    //                     <b>Quantity: {item.quantity}</b>
                    //                 </p>
                    //                 <div className="add-remove">
                    //                     <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                    //                     <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                    //                 </div>
                    //                 <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                    //             </div>
                    //
                    //         </li>
                );
            })
        ) : (
            <p>Nothing.</p>
        );
        return (
            <div>
                {/*{this.state.loaded ? null :<LoadingSpinner/>}*/}
                <Translation>{(t) => <TopMenu t={t}/>}</Translation>
                <NavBar/>
                <h3 style={{color: 'white', paddingLeft: '10%'}}><FormattedMessage id="cart"/></h3>
                <div className="container pack-content">
                    <br/>
                    {window.innerWidth < 1000 ?
                        <div className="row " style={{fontWeight: 'bolder'}}>
                            <div className="col-8">
                                <input type="checkbox" onChange={() => this.handleCheckoutAll(this)}
                                       checked={this.props.checkoutAll}/> &nbsp;&nbsp;<FormattedMessage
                                id="select_all"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{this.state.selected}&nbsp;&nbsp;<FormattedMessage id="item_selected"/></span>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-outline-primary float-right"
                                        onClick={() => this.onCheckout(this)}
                                        disabled={this.state.selected <= 0 || this.state.processSending}>
                                    <FormattedMessage id="checkout"/>
                                </button>

                            </div>
                            <div className="float-right" style={{fontSize: '20px', paddingRight: '10px'}}>
                                <p>
                                    <a style={{color: 'white'}}> <FormattedMessage id="total_price"/>:</a>
                                    <b className="currency">
                                        <CurrencyFormat displayType={'text'} value={this.state.total}
                                                        thousandSeparator={true} prefix={this.props.currency}/>
                                    </b>
                                </p>
                            </div>
                        </div>
                        : <div className="row " style={{fontWeight: 'bolder'}}>
                            <div className="col">
                                <input type="checkbox" onChange={() => this.handleCheckoutAll(this)}
                                       checked={this.props.checkoutAll}/> &nbsp;&nbsp;<FormattedMessage
                                id="select_all"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{this.state.selected}&nbsp;&nbsp;<FormattedMessage id="item_selected"/></span>
                            </div>
                            <div className="col">
                                <button className="btn btn-outline-primary float-right"
                                        onClick={() => this.onCheckout(this)}
                                        disabled={this.state.selected <= 0 || this.state.processSending}>
                                    <FormattedMessage id="checkout"/>
                                </button>
                                <div className="float-right" style={{fontSize: '20px', paddingRight: '10px'}}>
                                    <p>
                                        <a style={{color: 'white'}}> <FormattedMessage id="total_price"/>:</a>
                                        <b className="currency">
                                            <CurrencyFormat displayType={'text'} value={this.state.total}
                                                            thousandSeparator={true} prefix={this.props.currency}/>
                                        </b>
                                    </p>
                                </div>
                            </div>
                        </div>}
                </div>
                <div className="container pack-content">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-3" style={{display: 'flex'}}>
                                    <FormattedMessage id="item"/>
                                </div>
                                <div className="col-9"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col" style={{textAlign: 'center'}}>

                                    <FormattedMessage id="price_package"/>

                                </div>
                                {window.innerWidth > 1000 ?
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-6">
                                                <FormattedMessage id="quantity"/>
                                            </div>
                                            <div className="col-6">
                                                <div className="float-right">
                                                    <FormattedMessage id="amount"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : null
                                }

                            </div>
                        </div>
                    </div>
                </div>
                {addedItems}
                {/*<Recipe />*/}
                <ParallaxImage/>
                <Footer/>
                <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        currency: state.currency,
        total: state.total,
        checkoutAll: state.checkoutAll,
        token: state.token
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {
            dispatch(removeItem(id));
        },
        addQuantity: (id) => {
            dispatch(addQuantity(id));
        },
        subtractQuantity: (id) => {
            dispatch(subtractQuantity(id));
        },
        selectAll: (id) => {
            dispatch(selectAll(id));
        },
        deselectAll: (id) => {
            dispatch(deselectAll(id));
        },
        select: (id) => {
            dispatch(select(id));
        },
        deselect: (id) => {
            dispatch(deselect(id));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
