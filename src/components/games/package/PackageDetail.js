import React from 'react';
import LoadingSpinner from '../../ui-common/LoadingSpinner';
import {addToCart} from '../../../constants/cartActions';
import {connect} from 'react-redux';
import * as CurrencyFormat from 'react-currency-format';
import StarsRating from 'react-star-rate';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import {Hint} from 'react-autocomplete-hint';
import {toast} from 'react-toastify';
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";

class PackageDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            package: props.package[0],
            account: '',
            password: '',
            server: '',
            characterName: '',
            quantity: 0,
            amount: 0,
            loginType: '',
            loginCode: '',
            packageId: props.package[0].id,
            name: props.package[0].name,
            previewUrl: props.package[0].previewUrl,
            price: props.package[0].price,
            unit: props.package[0].unit,
            gameId: props.package.gameId,
            gameName: props.package.gameName,
            categoryName: props.package.categoryName,
            error: '',
            loginForm: true,
            forgetForm: false,
            disable: false,
            checkDuplicate: false,
            options: ['google', 'facebook', 'icloud', 'account'],
            serverOptions: ['Euro', 'Asia', 'Vietnam', 'Hanoi']
        };
        this.handleChange = this.handleChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        parent.scrollTo(0, 0);
    }

    componentDidMount() {
        // document.addEventListener('contextmenu', (e) => {
        //     e.preventDefault();
        // });
        const existItem = this.props.addedItems.find((item) => item.packageId === this.state.packageId);
        console.log(existItem);
        if (existItem) {
            this.setState({checkDuplicate: true});
        }
    }

    onChange(value) {
        this.setState({loaded: true});
    }

    onReturn() {
        this.props.onReturn('return', true);
    }

    onKeyDown(event) {
        const target = event.target;
        let value = target.value;
        if ((event.charCode || event.keyCode) === 13) {
            this.state.options.forEach((item) => {
                if (item.toUpperCase().startsWith(value)) {
                    this.setState({loginType: item});
                    console.log(item);
                }
            });
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === 'quantity') {
            this.setState({amount: parseInt(value) * this.state.package.price});
        }
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault(event);
        const item = {
            account: this.state.account,
            password: this.state.password,
            server: this.state.server,
            characterName: this.state.characterName,
            quantity: parseInt(this.state.quantity),
            amount: this.state.amount,
            loginType: this.state.loginType,
            loginCode: this.state.loginCode,
            packageId: this.state.packageId,
            name: this.state.name,
            previewUrl: this.state.previewUrl,
            price: this.state.price,
            unit: this.state.unit,
            gameId: this.state.gameId,
            gameName: this.state.gameName,
            categoryName: this.state.categoryName,
            checkout: false
        };
        this.setState({disable: true});
        this.props.addToCart(item);
        toast.success(this.props.language==='en'?'Product add to cart successfully!':"Thêm gói vào giỏ hàng thành công!");
    }

    renderWebsite() {
        return (
            <div className="row">
                <div className="col-4" style={{textAlign: 'center'}}>
                    <img
                        src={this.state.package.previewUrl}
                        alt={this.state.package.name}
                        style={{width: '300px', height: 'auto'}}
                        onLoad={() => setTimeout(() => this.onChange(true), 1000)}
                    />
                    <br/>

                    <br/>

                    <br/>

                    <StarsRating style={{color: '#ff8000'}} value={this.state.package.rating} disabled={true}/>
                </div>
                <div className="col-8" style={{textAlign: 'center'}}>
                    <div className="row">
                        <h5 className="package-title">{this.state.package.name}</h5>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <span className="package-title">
                               <FormattedMessage id="Price"/>
                            </span>
                            <br/>
                            <p>
                                <b className="currency">
                                    <CurrencyFormat
                                        displayType={'text'}
                                        value={this.state.package.price}
                                        thousandSeparator={true}
                                        prefix={this.props.currency}
                                    />{' '}
                                </b>
                                &nbsp;/&nbsp;
                                <span className="unit-package">{this.state.package.unit}</span>
                            </p>
                        </div>
                        <div className="col">
                            <span className="package-title"> <FormattedMessage id="Kho"/> </span>
                            <br/>
                            <a className="currency">{this.state.package.warehouseQuantity}</a>
                        </div>
                        <div className="col">
                            <span className="package-title"> <FormattedMessage id="Category"/></span>
                            <br/>
                            {this.state.package.attribute}
                        </div>
                    </div>

                    <div className="row">
                        <CKEditor
                            editor={ClassicEditor}
                            disabled
                            data={this.props.language==='en'?this.state.package.descriptionEn:this.state.package.descriptionVi}
                            onReady={(editor) => {
                                // You can store the "editor" and use when it is needed.
                                // console.log( 'Editor is ready to use!', editor );
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                // console.log( { event, editor, data } );
                            }}
                            onBlur={(event, editor) => {
                                // console.log( 'Blur.', editor );
                            }}
                            onFocus={(event, editor) => {
                                // console.log( 'Focus.', editor );
                            }}
                        />
                    </div>
                    <div className="underline-footer"/>

                    {this.renderForm()}
                </div>
            </div>
        );
    }

    renderMobile() {
        return (
            <div className="row">
                <div className="row">
                    <div className="col-3" style={{textAlign: 'center'}}>
                        <img
                            src={this.state.package.previewUrl}
                            alt={this.state.package.name}
                            style={{width: '100%', height: 'auto'}}
                            onLoad={() => setTimeout(() => this.onChange(true), 1000)}
                        />
                        <br/>

                        <br/>

                        <br/>
                    </div>
                    <div className="col-8" style={{textAlign: 'center'}}>
                        <div className="row">
                            <h5 className="package-title">{this.state.package.name}</h5>
                            <br/>
                            <div style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
                                <StarsRating value={this.state.package.rating} disabled={true}/>
                            </div>

                            <br/>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span className="package-title">Price</span>
                                <br/>
                                <p>
                                    <b className="currency">
                                        <CurrencyFormat
                                            displayType={'text'}
                                            value={this.state.package.price}
                                            thousandSeparator={true}
                                            prefix={this.props.currency}
                                        />{' '}
                                    </b>
                                    &nbsp;/&nbsp;
                                    <span className="unit-package">{this.state.package.unit}</span>
                                </p>
                            </div>
                            <div className="col">
                                <span className="package-title">Warehouse</span>
                                <br/>
                                <a className="currency">{this.state.package.warehouseQuantity}</a>
                            </div>
                            <div className="col">
                                <span className="package-title">Category</span>
                                <br/>
                                {this.state.package.attribute}
                            </div>
                        </div>

                        <div className="row">
                            <CKEditor
                                editor={ClassicEditor}
                                disabled
                                data={this.props.language==='en'?this.state.package.descriptionEn:this.state.package.descriptionVi}
                                onReady={(editor) => {
                                    // You can store the "editor" and use when it is needed.
                                    // console.log( 'Editor is ready to use!', editor );
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    // console.log( { event, editor, data } );
                                }}
                                onBlur={(event, editor) => {
                                    // console.log( 'Blur.', editor );
                                }}
                                onFocus={(event, editor) => {
                                    // console.log( 'Focus.', editor );
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="underline-footer"/>
                {this.renderForm()}
            </div>
        );
    }

    renderForm() {
        return (
            <div style={{width: '70%', marginLeft: 'auto', marginRight: 'auto'}}>
                <form className="needs-validation" onSubmit={this.handleSubmit}
                      onKeyDown={() => this.onReturn.bind(this)}>
                    <br/>
                    {this.state.checkDuplicate ?
                        <span style={{fontSize: '20px', color: 'red'}}>{this.props.language==='en'?" You have this package on cart now!":"Gói đã có trong giỏ hàng của bạn!"}</span> : ''}
                    <br/>
                    <br/>
                    <div className="form-group">
                        <Hint options={this.state.options}>
                            <input
                                type="text"
                                name="loginType"
                                required
                                disabled={this.state.disable}
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder={this.props.language==='en'?"Enter login type":"Nhập loại đăng nhập"}
                                value={this.state.loginType}
                                onChange={this.handleChange}
                                onKeyDown={this.onKeyDown}
                            />
                        </Hint>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input
                            type="text"
                            name="account"
                            required
                            disabled={this.state.disable}
                            className="form-control"
                            aria-describedby="accountHelp"
                            placeholder={this.props.language==='en'?"Enter ID, Email, Phone":"Nhập Id, email, số điện thoại"}
                            value={this.state.account}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            required
                            disabled={this.state.disable}
                            placeholder={this.props.language==='en'?"Enter Password":"Nhập mật khẩu"}
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input
                            type="text"
                            name="loginCode"
                            required
                            disabled={this.state.disable}
                            className="form-control"
                            aria-describedby="accountHelp 1"
                            placeholder={this.props.language==='en'?"Enter Login Code":"Nhập mã đăng nhập"}
                            value={this.state.loginCode}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br/>

                    <div className="form-group">
                        <Hint options={this.state.serverOptions}>
                            <input
                                type="text"
                                name="server"
                                className="form-control"
                                aria-describedby="server"
                                required
                                disabled={this.state.disable}
                                placeholder={this.props.language==='en'?"Enter server":"Nhập máy chủ"}
                                value={this.state.server}
                                onChange={this.handleChange}
                            />
                        </Hint>
                    </div>
                    <br/>
                    <div className="form-group">
                        <input
                            type="text"
                            name="characterName"
                            className="form-control"
                            aria-describedby="characterName"
                            required
                            disabled={this.state.disable}
                            placeholder= {this.props.language==='en'?"Enter character name":"Nhập tên nhân vật"}
                            value={this.state.characterName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input
                            type="number"
                            name="quantity"
                            min="0"
                            className="form-control"
                            aria-describedby="quantity"
                            required
                            disabled={this.state.disable}
                            placeholder= {this.props.language==='en'?"Enter quantity":"Nhập số lượng"}
                            value={this.state.quantity}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br/>
                    <div className="row" style={{fontSize: '18px'}}>
                        <div className="col"><FormattedMessage id="amount"/>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <b className="currency">
                                    <CurrencyFormat displayType={'text'} value={this.state.amount}
                                                    thousandSeparator={true} prefix={this.props.currency}/>
                                </b>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <span className="error-text"> {this.state.error}</span>
                    </div>

                    <button type="submit" className="btn btn-primary float-right" disabled={this.state.disable}>
                        <FormattedMessage id="add_to_cart"/>
                    </button>
                    <br/>
                    <br/>
                    <br/>
                </form>
                <button onClick={this.onReturn.bind(this)} className="btn btn-outline-warning float-right">
                    <FormattedMessage id="return"/>
                </button>
                <Link to="/cart">
                    <button className="btn btn-primary float-right">
                        <FormattedMessage id="cart"/>
                    </button>
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.loaded ? null : <LoadingSpinner/>}
                <br/>
                <br/>
                <div className="container pack-content" key={this.state.package.id}>
                    <br/>
                    <br/>
                    <h5 style={{paddingLeft: '50px'}}><FormattedMessage id="Package detail"/></h5>
                    <br/>
                    {window.innerWidth < 1000 ? this.renderMobile() : this.renderWebsite()}

                    <br/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.game,
        currency: state.currency,
        addedItems: state.addedItems,
        language: state.language
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch(addToCart(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PackageDetail);

