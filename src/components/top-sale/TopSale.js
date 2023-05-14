import React from 'react';
import './top-sale.css';
import {Translation} from "react-i18next";
import TopMenu from "../ui-common/TopMenu";
import NavBar from "../ui-common/NavBar";
import ParallaxImage from "../parallax/ParallaxImage";
import Footer from "../Footer";
import ScrollButton from "../ui-common/ScrollButton";
import GameDetailSearchBar from "../games/game-detail/GameDetailSearchBar";
import PackageDetail from "../games/package/PackageDetail";
import {addToCart} from "../../constants/cartActions";
import {connect} from "react-redux";


class TopSale extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            package:0,
            packageView:undefined
        }
    }

    onChange(value) {
        // parent class change handler is always called with field name and value
        this.setState({'loaded': value});
        // console.log('App load success',value)
    }

    onReturn() {
        // parent class change handler is always called with field name and value
        this.setState({'package': 0});
        this.setState({'packageView': undefined});
        console.log('return')
        // console.log('App load success',value)
    }

    onViewPackageTop(value) {
        this.setState({'package': value});

        let packageView = this.props.game.gamePackages.filter(pack=>pack.id===value);
        packageView.gameName=this.props.game.name;
        packageView.categoryName=this.props.game.categoryName;
        packageView.gameId=this.props.game.id;
        this.setState({packageView:packageView});
        console.log('View packages', packageView)
    }
    render() {
        const imgStyle = {
            marginRight: 'auto',
            marginLeft: 'auto'
        }
        return (
            <div >
                {/*{this.state.loaded ? null :<LoadingSpinner/>}*/}
                <Translation>{t => <TopMenu t={t} />}</Translation>
                <NavBar/>
                <h3 style={{marginLeft:"15%",color:'white'}}>TOP SALE</h3>
                {this.state.package === 0 ?
                    <div className="item-content-card">
                        <GameDetailSearchBar game={this.props.game} onChange={this.onChange.bind(this)}
                                             onViewPackage={this.onViewPackageTop.bind(this)}/>
                    </div> :
                    <PackageDetail package={this.state.packageView} onChange={this.onChange.bind(this)}
                                   onReturn={this.onReturn.bind(this)}/>
                }
                <ParallaxImage/>
                <Footer/>
                <ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.game
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopSale)

