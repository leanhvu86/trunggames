// import React, {Component} from 'react';
// import {connect} from 'react-redux'
// import {addToCart} from '../../../constants/cartActions'
// import * as CurrencyFormat from 'react-currency-format';
// import './game-detail.css';
// import StarsRating from 'react-star-rate';
//
// class PackageList extends React.Component {
//
//     constructor(props) {
//         super();
//         this.state={
//             gamePackages:props.gamePackages
//         }
//     }
//
//     handleClick = (id) => {
//         this.props.addToCart(id);
//     }
//
//
//     render() {
//         let itemList = this.state.gamePackages.map(item => {
//             return (
//                 <div className="pack-content" key={item.id}>
//
//                     <div className="row">
//                         <div className="col">
//                             <div className="row">
//                                 <div className="col-3">
//                                     <img style={{width:'70px',height:'auto',borderRadius:'3px'}} src={item.imageId} alt={item.name}/>
//                                 </div>
//                                 <div className="col-9">
//                                     <span className="card-title">{item.name}</span>
//                                     <br/>
//                                     <br/>
//                                     <span>Máy chủ:&nbsp;{item.server[0].name} </span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col">
//                             <div className="row">
//                                 <div className="col" style={{textAlign:'center'}}>
//
//                                     <p><b>
//                                         <CurrencyFormat displayType={'text'} value={item.price} thousandSeparator={true}
//                                                         prefix={this.props.currency}/> /
//                                         <span className="unit-package">{item.unit}</span></b></p>
//                                     <span>Kho: {item.warehouseQuantity}&nbsp;&nbsp; Số lượng đã bán:{item.tradeCount}</span>
//                                 </div>
//                                 <div className="col">
//                                     <div className="float-right" >
//                                         <StarsRating
//                                             value={item.rating}
//                                             disabled={true}
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/*<div className="card-image">*/}
//                     {/*    <img src={item.img} alt={item.title}/>*/}
//                     {/*    <span className="card-title">{item.title}</span>*/}
//                     {/*    <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>*/}
//                     {/*</div>*/}
//
//                     {/*<div className="card-content">*/}
//                     {/*    <p>{item.desc}</p>*/}
//                     {/*    <p><b>Price: {item.price}$</b></p>*/}
//                     {/*</div>*/}
//                 </div>
//
//             )
//         })
//
//         return (
//             <div>
//                 {/*<h3 className="title-center">Our items</h3>*/}
//                 <div className="box">
//                     {itemList}
//                 </div>
//             </div>
//         )
//     }
// }
//
// const mapStateToProps = (state) => {
//     return {
//         currency: state.currency
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//
//     return {
//         addToCart: (id) => {
//             dispatch(addToCart(id))
//         }
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(PackageList)
