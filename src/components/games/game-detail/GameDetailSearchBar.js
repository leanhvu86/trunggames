import React from 'react';
import './game-detail.css';
import * as CurrencyFormat from 'react-currency-format';
import StarsRating from 'react-star-rate';
import GameContent from './GameContent';
import {connect} from 'react-redux';
import {addToCart, filterPackage, setPackage, viewTopSale} from '../../../constants/cartActions';
import {FormattedMessage} from 'react-intl';

class GameDetailSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namePackage: '',
            attribute: [],
            gameId: 0,
            type: '',
            viewType: true,
            packages: [],
            packageView: window.innerWidth > 1000,
            isViewPackage: false,
            package: {},
            server: [],
            allServer: [],
            serverCheck: '',
            attCheck: '',
            textSearch: ''
        };
    }

    componentDidMount() {
        this.loadPackageChangeGame();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }

    componentDidUpdate(prevProps) {
        if (this.state.gameId !== this.props.game.id) {
            this.loadPackageChangeGame();
        }
    }

    loadPackageChangeGame() {
        if (this.props.packages) {
            this.setState({packages: this.props.packages, gameId: this.props.game.id});
            let attList = [];
            this.props.packages.forEach(pack => {
                attList.push(pack.attribute);
            });
            attList = [...new Set(attList)];
            this.setState({attribute: attList});
        }
        if (this.props.server) {
            this.setState({allServer: this.props.server});
            let temp = [];
            this.props.server.forEach(ser => {
                temp.push(ser.name);
            });
            temp = [...new Set(temp)];
            this.setState({server: temp});
        }
    }

    onChangeFilter(e) {
        let text = e.target.value;
        this.setState({textSearch: text});
        this.filterPackage(text, this.state.serverCheck, this.state.attCheck);
    }

    onChangeServer(e) {
        let server = e.target.value;
        this.setState({serverCheck: server});
        this.filterPackage(this.state.textSearch, server, this.state.attCheck);
    }

    filterPackage(text, server, att) {
        console.log(text)
        console.log(server)
        console.log(att)
        let temp1 = [];
        let temp2 = [];
        if (text !== '') {
            this.props.packages.forEach(pack => {
                if (this.convertStr(pack.name).toLowerCase().includes(this.convertStr(text.toLowerCase())))
                    temp1.push(pack)
            });
        } else temp1 = this.props.packages;

        if (server !== '') {
            let serTemp = [];
            serTemp = this.state.allServer.filter(ser => this.convertStr(ser.name) === server);
            temp1.forEach(pack => {
                serTemp.forEach(ser => {
                    if (pack.id === ser.packageId) {
                        temp2.push(pack);
                    }
                })
            });
        } else temp2 = temp1;

        if (att !== '')
            temp2 = temp2.filter(pack => pack.attribute === att);

        this.setState({packages: temp2});
    }

    convertStr(string) {
        return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    onChangeCardType(e) {
        let att = e.target.value;
        this.setState({attCheck: att});
        this.filterPackage(this.state.textSearch, this.state.serverCheck, att);
    }

    removeActive() {
        document.getElementById('new-search').classList.remove('active');
        document.getElementById('price-search').classList.remove('active');
        document.getElementById('rating-search').classList.remove('active');
        document.getElementById('hot-search').classList.remove('active');
    }

    handleClick(type) {
        console.log(type);
        this.removeActive();
        let tempPackage;
        if (type === 1) {
            if (this.state.type === type) {
                this.setState({type: 0});
                this.setState({packages: this.props.packages});
            } else {
                document.getElementById('hot-search').classList.add('active');
                this.setState({type: type});
                tempPackage = this.props.packages;
                tempPackage.sort((a, b) => a.tradeCount - b.tradeCount);
                tempPackage.reverse();
                this.setState({packages: tempPackage});
            }
        } else if (type === 2) {
            if (this.state.type === type) {
                this.setState({type: 0});
            } else {
                document.getElementById('new-search').classList.add('active');
                this.setState({type: type});
                tempPackage = this.props.game.gamePackages;
                tempPackage.sort((a, b) => a.rating - b.rating);
                tempPackage.reverse();
                this.setState({packages: tempPackage});
            }
        } else if (type === 3) {
            if (this.state.type === type) {
                this.setState({type: 0});
            } else {
                document.getElementById('price-search').classList.add('active');
                this.setState({type: type});
                tempPackage = this.props.packages;
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
                this.setState({type: 0});
            } else {
                document.getElementById('rating-search').classList.add('active');
                this.setState({type: type});
                tempPackage = this.props.packages;
                tempPackage.sort((a, b) => a.rating - b.rating);
                tempPackage.reverse();
                this.setState({packages: tempPackage});
                // this.props.filterPackages(tempPackage)
            }
        }
    }

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
        this.props.setPackage(event);
        window.location.href = '/package-detail';
    }

    renderSearchWebsite() {
        return (
            <div className="row">
                <div className="col">
                      <span className="search-bar-icon-filter" id="hot-search" onClick={this.handleClick.bind(this, 1)}>
                        <i className="fa fa-fire" aria-hidden="true"/>
                          &nbsp;
                          <FormattedMessage id="Hot"/>
                      </span>
                    <span className="search-bar-icon-filter" id="new-search" onClick={this.handleClick.bind(this, 2)}>
                        <i className="fa fa-clock-o" aria-hidden="true"/>
                                    &nbsp;
                                    <FormattedMessage id="New"/>
                      </span>
                    <span className="search-bar-icon-filter" id="price-search" onClick={this.handleClick.bind(this, 3)}>
                        <i className="fa fa-usd" aria-hidden="true"/>
                                    &nbsp;
                                    <FormattedMessage id="Price"/>
                      </span>
                    <span className="search-bar-icon-filter" id="rating-search"
                          onClick={this.handleClick.bind(this, 4)}>
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"/>
                                    &nbsp;
                                    <FormattedMessage id="Rating"/>
                      </span>
                </div>
                <div className="col"/>
                <div className="col">
                    <div
                        style={{
                            float: 'right',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
            <span onClick={this.handleChangePackageViewType.bind(this)}>
              {this.state.packageView ? (
                  <i className="fa fa-list fa-lg icon-button" aria-hidden="true"/>
              ) : (
                  <i className="fa fa-table fa-lg icon-button" aria-hidden="true"/>
              )}
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
        );
    }

    renderSearchMobile() {
        return (
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <div className="col">
                            <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this, 1)}>
                                <i className="fa fa-fire" aria-hidden="true"/>
                                &nbsp;
                                <FormattedMessage id="Hot"/>
                            </span>
                        </div>
                        <div className="col">
                            <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this, 2)}>
                                <i className="fa fa-clock-o" aria-hidden="true"/>
                                &nbsp;
                                <FormattedMessage id="New"/>
                              </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this, 3)}>
                                <i className="fa fa-usd" aria-hidden="true"/>
                                &nbsp;
                                <FormattedMessage id="Price"/>
                            </span>
                        </div>
                        <div className="col">
                            <span className="search-bar-icon-filter" onClick={this.handleClick.bind(this, 4)}>
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"/>
                                &nbsp;
                                <FormattedMessage id="Rating"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div style={{float: 'right', display: 'flex', justifyContent: 'center'}}>
                    <span>
                      <i className="fa fa-chevron-left icon-button" aria-hidden="true"/>
                        &nbsp;&nbsp;&nbsp;Page&nbsp;&nbsp;&nbsp;
                        <i className="fa fa-chevron-right icon-button" aria-hidden="true"/>
                    </span>
                    </div>
                </div>
            </div>
        );
    }

    renderListPackage() {
        let itemList = this.state.packages.map((item) => {
            return (
                <div className="pack-content" key={item.id}>
                    <div className="row service-title" onClick={this.onViewPackage.bind(this, item)}
                         style={{cursor: 'pointer'}}>
                        <div className="col">
                            <div className="row">
                                <div className="col-3">
                                    <div className="crop">
                                        <img src={item.previewUrl} alt={item.name}/>
                                    </div>
                                </div>
                                <div className="col-9">
                  <span className="package-name service-title">
                    <a onClick={this.onViewPackage.bind(this, item)}> {item.name}</a>
                  </span>
                                    <br/>
                                    <br/>
                                    <span>
                    <FormattedMessage id="Máy chủ"/>
                    :&nbsp;{item.server ? item.server[0].name : 'Global'}{' '}
                  </span>
                                </div>
                            </div>
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
                                        <span style={{textDecoration: 'line-through'}}><CurrencyFormat
                                            displayType={'text'} value={item.price + item.tradeCount}
                                            thousandSeparator={true} prefix={this.props.currency}/></span>
                                    </p>
                                    <span>
                    <FormattedMessage id="Kho"/>: {item.warehouseQuantity}&nbsp;&nbsp;
                  </span>
                                </div>
                                <div className="col">
                                    <div className="float-right">
                                        <StarsRating value={item.rating} disabled={true}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div>
                <div className="seach-content search-detail-bar">
                    <div className="row">
                        <div className="col">
                            <div className="child-search-content">
                                <a>
                                    <FormattedMessage id="Find product"/>
                                </a>
                                <br/>
                                <input type="text" className="search-input " id="addEventstart"
                                       onChange={this.onChangeFilter.bind(this)}
                                       name="packageName" placeholder="Type a package"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="child-search-content">
                                <a>
                                    <FormattedMessage id="Server"/>
                                </a>
                                <br/>
                                <select onChange={this.onChangeServer.bind(this)}>
                                    <option value="">Tất cả máy chủ</option>
                                    {this.state.server.map((ser) => {
                                        return (
                                            <option value={ser} key={ser}>{ser}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <div className="child-search-content">
                                <a>
                                    <FormattedMessage id="Category"/>
                                </a>
                                <br/>
                                <select onChange={this.onChangeCardType.bind(this)}>
                                    <option value="">Tất cả các thuộc tính</option>
                                    {this.state.attribute.map((att) => {
                                        return (
                                            <option value={att} key={att}>{att}</option>
                                        )
                                    })}
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
                {this.state.packageView ? (
                    <div className="box">{itemList}</div>
                ) : (
                    <div className="row box">
                        {this.state.packages.map((item) => {
                            return (
                                <div className="col-lg-4 " key={item.id}>
                                    <div className=" pack-content-mobile">
                                        <div className="row ">
                                            <div className="col-3">
                                                <div className="crop">
                                                    <img src={item.previewUrl} alt={item.name}/>
                                                </div>
                                            </div>
                                            <div className="col-8">
                        <span className="package-name service-title">
                          <a onClick={this.onViewPackage.bind(this, item)}>{item.name}</a>
                        </span>
                                                <br/>
                                                <br/>
                                                <div className="float-right ">
                                                    <p>
                                                        <b className="currency">
                                                            <CurrencyFormat
                                                                displayType={'text'}
                                                                value={item.price}
                                                                thousandSeparator={true}
                                                                prefix={this.props.currency}
                                                            />
                                                        </b>
                                                        &nbsp;/&nbsp;
                                                        <span className="unit-package">{item.unit}</span>
                                                        <br/>
                                                        <span style={{textDecoration: 'line-through'}}><CurrencyFormat
                                                            displayType={'text'} value={item.price + item.tradeCount}
                                                            thousandSeparator={true}
                                                            prefix={this.props.currency}/></span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="underline-footer"/>
                                        <div className="row">
                                            <div className="col-4">
                        <span>
                          <FormattedMessage id="Máy chủ"/>
                          :&nbsp;{item.server ? item.server[0].name : 'Global'}{' '}
                        </span>
                                            </div>
                                            <div className="col-8">
                                                <div className="float-right">
                                                    <StarsRating value={item.rating} disabled={true}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }

    setIsModalVisible() {
        this.setState({setIsModalVisible: !this.state.isModalVisible});
    }

    renderDetail() {
        return (
            <div>
                {this.state.viewType ? (
                    <span onClick={this.onClickChangeContent.bind(this)} className="view-type-button">
                  <FormattedMessage id="User Guide"/>
                </span>
                ) : (
                    <span onClick={this.onClickChangeContent.bind(this)} className="view-type-button">
                  <FormattedMessage id="Buy Package"/>
                </span>
                )}
            </div>
        )
    }

    render() {
        return (
            <div className="container ">
                <div className="row ">
                    <div className="col-4"/>
                    <div className="col-8">
                        <div
                            style={{
                                width: 'auto',
                                float: 'right',
                                height: 'auto',
                                padding: '5px 5px',
                                color: 'white'
                            }}
                        >
                            {this.props.topSale ? null : this.renderDetail()}

                        </div>
                    </div>
                </div>
                <br/>
                {this.state.viewType ? this.renderListPackage() : <GameContent/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.currency,
        packages: state.packages,
        game: state.game
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch(addToCart(id));
        },
        viewTopSale: (id) => {
            dispatch(viewTopSale(id));
        },
        setPackage: (id) => {
            dispatch(setPackage(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameDetailSearchBar);

