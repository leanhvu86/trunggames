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
import {addToCart} from '../../../constants/cartActions';
import {connect} from 'react-redux';
import PackageDetail from '../package/PackageDetail';

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
    }

    componentDidMount() {
        if (this.props.package !== 0) {
            this.onViewPackage(this.props.package);
        }
    }

    onChange(value) {
        // parent class change handler is always called with field name and value
        this.setState({loaded: value});
        // console.log('App load success',value)
    }

    onReturn() {
        // parent class change handler is always called with field name and value
        this.setState({package: 0});
        this.setState({packageView: undefined});
        console.log('return');
        // console.log('App load success',value)
    }

    onViewPackage(value) {
        this.setState({package: value});

        let packageView = this.props.game.gamePackages.filter((pack) => pack.id === value);
        packageView.gameName = this.props.game.name;
        packageView.categoryName = this.props.game.categoryName;
        packageView.gameId = this.props.game.id;
        this.setState({packageView: packageView});
        console.log('View packages', packageView);
    }

    render() {
        return (
            <div>
                {this.state.loaded ? null : <LoadingSpinner/>}
                <Translation>{(t) => <TopMenu t={t}/>}</Translation>
                <NavBar/>
                <SubNavGame game={this.props.game} onChange={this.onChange.bind(this)}/>
                {this.state.package === 0 ? (
                    <div className="item-content-card">
                        <GameDetailSearchBar packages={this.props.packages}
                                             topSale={false}
                                             server={this.props.server}
                                             onChange={this.onChange.bind(this)}
                                             onViewPackage={this.onViewPackage.bind(this)}/>
                    </div>
                ) : (
                    <PackageDetail package={this.state.packageView} onChange={this.onChange.bind(this)}
                                   onReturn={this.onReturn.bind(this)}/>
                )}

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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameDetail);

