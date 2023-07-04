import React from 'react';
import './game-detail.css';
import {Translation} from 'react-i18next';
import TopMenu from '../../ui-common/TopMenu';
import NavBar from '../../ui-common/NavBar';
import ParallaxImage from '../../parallax/ParallaxImage';
import Footer from '../../Footer';
import ScrollButton from '../../ui-common/ScrollButton';
import SubNavGame from './SubNavGame';
import GameDetailSearchBar from './GameDetailSearchBar';
import LoadingSpinner from '../../ui-common/LoadingSpinner';
import {addToCart, setPackage} from '../../../constants/cartActions';
import {connect} from 'react-redux';

class GameDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            package: 0,
            packageView: undefined
        };
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }


    onChange(value) {
        // parent class change handler is always called with field name and value
        this.setState({loaded: value});
        // console.log('App load success',value)
    }

    onViewPackage(value) {
        console.log(value);
        this.setState({package: value});
        let packageView = this.props.game.gamePackages.filter((pack) => pack.id === value);
        packageView.gameName = this.props.game.name;
        packageView.categoryName = this.props.game.categoryName;
        packageView.gameId = this.props.game.id;
        this.setState({packageView: packageView});
        this.props.setPackage(value);
        window.location.href = '/package.detail';
    }

    render() {
        return (
            <div>
                {this.state.loaded ? null : <LoadingSpinner/>}
                <Translation>{(t) => <TopMenu t={t}/>}</Translation>
                <NavBar/>
                <SubNavGame game={this.props.game} onChange={this.onChange.bind(this)}/>
                <div className="item-content-card">
                    <GameDetailSearchBar
                        topSale={false}
                        server={this.props.server}
                        onChange={this.onChange.bind(this)}/>
                </div>
                <ParallaxImage/>
                <Footer/>
                <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.game,
        package: state.package,
        server: state.server,
        packages: state.packages
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch(addToCart(id));
        },
        setPackage: (id) => {
            dispatch(setPackage(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameDetail);

