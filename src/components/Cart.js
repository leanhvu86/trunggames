import React from 'react';
import {connect} from 'react-redux'
import {
    addQuantity,
    deselect,
    deselectAll,
    removeItem,
    select,
    selectAll,
    subtractQuantity
} from '../constants/cartActions'
import {Translation} from "react-i18next";
import TopMenu from "./ui-common/TopMenu";
import NavBar from "./ui-common/NavBar";
import Footer from "./Footer";
import ScrollButton from "./ui-common/ScrollButton";
import ParallaxImage from "./parallax/ParallaxImage";
import * as CurrencyFormat from "react-currency-format";

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            selected: 0,
            listCheckout: []
        }
        this.props.deselectAll(1);
    }

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
        this.scanCheckoutInfo();
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
        this.scanCheckoutInfo();
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
        this.scanCheckoutInfo();
    }

    handleCheckoutAll = (event) => {
        if (this.props.checkoutAll === true) {
            this.props.deselectAll(1);
        } else {
            this.props.selectAll(1);
        }
        this.scanCheckoutInfo();
    }

    scanCheckoutInfo() {
        let lstCheckout = [];
        let totalPrice = 0;
        this.props.items.forEach(item => {
            if (item.checkout) {
                totalPrice += item.amount;
                lstCheckout.push(item);
            }
        })
        console.log("h")
        this.setState({listCheckout: lstCheckout});
        this.setState({total: totalPrice});
        this.setState({selected:lstCheckout.length})
    }

    handleCheckout = (event, id) => {
        console.log(id);
        const checkAdd = this.state.listCheckout.find(item => item.packageId === id);
        if (checkAdd) {
            this.props.deselect(id)
        } else {
            this.props.select(id);
        }
        this.scanCheckoutInfo();
    }

    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <div className="container pack-content" key={item.packageId}>
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="col-3" style={{display: 'flex'}}>
                                            <input type="checkbox" checked={item.checkout}
                                                   onChange={() => this.handleCheckout(this, item.packageId)}/>
                                            <div className="crop" style={{paddingLeft: '5px'}}>
                                                <img src={item.previewUrl} alt={item.name}/>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                    <span className="package-name ">{item.name}
                                           </span>
                                            <br/>
                                            <br/>
                                            <span>Order information </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col" style={{textAlign: 'center'}}>

                                            <p><b className="currency">
                                                <CurrencyFormat displayType={'text'} value={item.price}
                                                                thousandSeparator={true}
                                                                prefix={this.props.currency}/>
                                            </b>&nbsp;/&nbsp;
                                                <span className="unit-package">{item.unit}</span>
                                            </p>
                                        </div>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col">
                                                    <span>
                                                        <i className="fa fa-minus cart-icon" aria-hidden="true"
                                                           onClick={() => {
                                                               this.handleSubtractQuantity(item.packageId)
                                                           }}/>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <i className="fa fa-plus cart-icon" aria-hidden="true"
                                                           onClick={() => {
                                                               this.handleAddQuantity(item.packageId)
                                                           }}/>

                                                    </span>
                                                </div>
                                                <div className="col">
                                                    <div className="float-right">
                                                        <p><b className="currency">
                                                            <CurrencyFormat displayType={'text'} value={item.amount}
                                                                            thousandSeparator={true}
                                                                            prefix={this.props.currency}/>
                                                        </b>
                                                        </p>
                                                        <span><i className="fa fa-trash-o fa-2x cart-icon"
                                                                 onClick={() => {
                                                                     this.handleRemove(item.packageId)
                                                                 }} aria-hidden="true"/></span>
                                                    </div>
                                                </div>
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

                    )
                })
            ) :

            (
                <p>Nothing.</p>
            )
        return (
            <div>
                {/*{this.state.loaded ? null :<LoadingSpinner/>}*/}
                <Translation>{t => <TopMenu t={t}/>}</Translation>
                <NavBar/>
                <h3 style={{color: 'white', paddingLeft: '10%'}}>Shopping cart</h3>
                <div className="container pack-content">
                    <br/>
                    <div className="row " style={{fontWeight: 'bolder'}}>
                        <div className="col">
                            <input type="checkbox" onChange={() => this.handleCheckoutAll(this)}
                                   checked={this.props.checkoutAll}/> &nbsp;&nbsp;Select
                            All&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>{this.state.selected}&nbsp;&nbsp;item(s)&nbsp;selected</span>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary float-right" disabled={this.state.selected <= 0}>
                                Checkout
                            </button>
                            <div className="float-right" style={{fontSize: '20px', paddingRight: '10px'}}>
                                <p><a style={{color: 'white'}}>Total Price:</a>
                                    <b className="currency">
                                        <CurrencyFormat displayType={'text'} value={this.state.total}
                                                        thousandSeparator={true}
                                                        prefix={this.props.currency}/>
                                    </b>
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="container pack-content">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col-3" style={{display: 'flex'}}>
                                    Item
                                </div>
                                <div className="col-9">

                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col" style={{textAlign: 'center'}}>
                                    Price/Package
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            Quantity
                                        </div>
                                        <div className="col">
                                            <div className="float-right">
                                                Amount
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {addedItems}
                {/*<Recipe />*/}
                <ParallaxImage/>
                <Footer/>
                <ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        currency: state.currency,
        total: state.total,
        checkoutAll: state.checkoutAll
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {
            dispatch(removeItem(id))
        },
        addQuantity: (id) => {
            dispatch(addQuantity(id))
        },
        subtractQuantity: (id) => {
            dispatch(subtractQuantity(id))
        },
        selectAll: (id) => {
            dispatch(selectAll(id))
        },
        deselectAll: (id) => {
            dispatch(deselectAll(id))
        },
        select: (id) => {
            dispatch(select(id))
        },
        deselect: (id) => {
            dispatch(deselect(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
