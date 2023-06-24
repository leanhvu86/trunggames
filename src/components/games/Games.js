import React from 'react';
import './game.css';
import { Translation } from 'react-i18next';
import TopMenu from '../ui-common/TopMenu';
import NavBar from '../ui-common/NavBar';
import ParallaxImage from '../parallax/ParallaxImage';
import Footer from '../Footer';
import ScrollButton from '../ui-common/ScrollButton';
import GameList from './GameList';
import TreeRenderer, { pathGet, pathMerge } from 'react-tree-renderer';
import { default as DefaultTemplate, eventTypes } from './DefaultTemplate';
import LoadingSpinner from '../ui-common/LoadingSpinner';
import Tippy from '@tippyjs/react';
import configData from '../../config.json';
import { connect } from 'react-redux';
import { filterGame, rawData, removePackageView } from '../../constants/cartActions';
import { FormattedMessage } from 'react-intl';

const mapStateToProps = (state) => {
  return {
    listGame: state.listGame,
    gameList: state.gameList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterGame: (data) => {
      dispatch(filterGame(data));
    },
    removePackageView: (id) => {
      dispatch(removePackageView(id));
    },
    rawData: (id) => {
      dispatch(rawData(id));
    }
  };
};

class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      isMobile: window.innerWidth < 1000,
      searchType: '',
      category: [],
      root: {}
    };
    this.filterList = this.filterList.bind(this);
  }

  componentDidMount() {
    this.filterList('HOT', 1);
    // document.addEventListener('contextmenu', (e) => {
    //     e.preventDefault();
    // });
    fetch(configData.SERVER_URL + '/category/list')
      .then((res) => res.json())
      .then((json) => {
        const tree = this.buildTree(json.data, 0);
        const root = { title: 'Category', children: tree };
        this.setState({ root: root });
        this.onUpdateData(this.state.root);
        this.onTreeEvent('openAll', undefined, undefined);
      });
    this.props.removePackageView(0);
  }

  buildTree(categories, parentId) {
    const nodes = [];
    this.setState({ category: categories });
    categories
      .filter((category) => category.parentId === parentId)
      .forEach((category) => {
        const node = { title: category.name };
        const children = this.buildTree(categories, category.id);
        if (children.length > 0) {
          node.children = children;
        }
        nodes.push(node);
      });
    return nodes;
  }

  // const response = { /* The response data here */ };
  // const categories: Category[] = response.data;
  // const tree = buildTree(categories, null);
  // const result = { root: { title: 'Category', children: tree } };

  onClickGame(e) {
    console.log(e);
    this.setState({ game: e });
  }

  filterList(type, value, category) {
    let listTemp = [];
    this.props.listGame.forEach((game) => {
      if (type === 'HOT') {
        if (game.gamePriority === '1') {
          listTemp.push(game);
        }
        this.setState({ searchType: type });
      } else if (type === 'Category') {
        if (game.categoryId === value) {
          listTemp.push(game);
        }
        this.setState({ searchType: category });
      } else if (type === 'Char') {
        if (game.name.toUpperCase().startsWith(value)) {
          listTemp.push(game);
        }
        this.setState({ searchType: value });
      } else {
        if (Number.isInteger(parseInt(game.name.charAt(0)))) {
          listTemp.push(game);
        }
        this.setState({ searchType: '#' });
      }
    });
    this.props.filterGame(listTemp);
    listTemp.length === 0 ? this.setState({ loaded: true }) : null;
  }

  onUpdateData(root) {
    this.setState({ root });
  }

  onTreeEvent(eventStr, eventData, path) {
    const { root = {} } = this.state;
    const obj = pathGet(root, path);

    const setOpenRecursive = (isOpen, obj) => {
      const { children = [] } = obj;
      return {
        ...obj,
        isOpen,
        children: children.map((x) => setOpenRecursive(isOpen, x))
      };
    };
    const updateState = (newObj) => {
      const newRoot = pathMerge(root, path, newObj);
      this.setState({
        root: newRoot
      });
    };
    const clickNode = (e) => {
      const cate = this.state.category.find((obj) => {
        return obj.name === e;
      });
      this.filterList('Category', cate.id, cate.name);
    };
    switch (eventStr) {
      case eventTypes.closeAll:
        updateState(setOpenRecursive(false, obj));
        break;
      case eventTypes.openAll:
        updateState(setOpenRecursive(true, obj));
        break;
      case eventTypes.clickNode:
        clickNode(eventData.props.data.title);
        break;
      default:
        break;
    }
  }

  onChange(value) {
    this.setState({ loaded: value });
  }

  handleOpenCategory() {
    this.setState({ isMobile: !this.state.isMobile });
  }

  renderCategory() {
    return (
      <div className="col-3">
        <TreeRenderer
          Template={DefaultTemplate}
          data={this.state.root}
          onUpdateData={this.onUpdateData.bind(this)}
          onTreeEvent={this.onTreeEvent.bind(this)}
        />
        <br />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.loaded ? null : <LoadingSpinner />}
        <Translation>{(t) => <TopMenu t={t} />}</Translation>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="search-item" onClick={() => this.filterList('HOT', 1)}>
              <span>
                <i className="fa fa-fire" aria-hidden="true" />
              </span>
            </div>
            <div className="search-item" onClick={() => this.filterList('', '#')}>
              <span>#</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'A')}>
              <span>A</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'B')}>
              <span>B</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'C')}>
              <span>C</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'D')}>
              <span>D</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'E')}>
              <span>E</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'F')}>
              <span>F</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'G')}>
              <span>G</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'H')}>
              <span>H</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'I')}>
              <span>I</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'J')}>
              <span>J</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'K')}>
              <span>K</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'L')}>
              <span>L</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'M')}>
              <span>M</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'N')}>
              <span>N</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'O')}>
              <span>O</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'P')}>
              <span>P</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'Q')}>
              <span>Q</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'R')}>
              <span>R</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'S')}>
              <span>S</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'T')}>
              <span>T</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'U')}>
              <span>U</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'V')}>
              <span>V</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'W')}>
              <span>W</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'X')}>
              <span>X</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'Y')}>
              <span>Y</span>
            </div>
            <div className="search-item" onClick={() => this.filterList('Char', 'Z')}>
              <span>Z</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Tippy placement="right" content={<span>Click to open or close category!</span>}>
              <h3 className="category-title" onClick={() => this.handleOpenCategory(this)}>
                <FormattedMessage id="category.list" />
              </h3>
            </Tippy>
          </div>
          <div className="col-8 category-title">
            <span>Game&nbsp;&gt;&nbsp;{this.state.searchType}</span>
          </div>
        </div>
        <div className="row">
          {this.state.isMobile ? '' : this.renderCategory()}
          <div className="col-8 auto-margin-game-list">
            <GameList slideImage={this.props.gameList} onChange={this.onChange.bind(this)} clickGame={this.onClickGame.bind(this)} />
          </div>
        </div>

        <ParallaxImage />
        <Footer />
        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);

