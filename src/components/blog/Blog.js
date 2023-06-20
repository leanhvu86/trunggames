import React from 'react';
import './blog.css';
import {Translation} from 'react-i18next';
import TopMenu from '../ui-common/TopMenu';
import NavBar from '../ui-common/NavBar';
import ParallaxImage from '../parallax/ParallaxImage';
import Footer from '../Footer';
import ScrollButton from '../ui-common/ScrollButton';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import {removePackageView} from "../../constants/cartActions";


class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            blogView: undefined,
            viewType: true
        };
        this.returnBlog = this.returnBlog.bind(this);
        this.viewContent = this.viewContent.bind(this);
        this.props.removePackageView(0);

    }

    viewContent(blog) {
        if (this.state.viewType) this.returnBlog();
        this.setState({blogView: blog});
        console.log(blog);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    returnBlog() {
        this.setState({viewType: !this.state.viewType});
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    renderList() {
        return (
            <div className="container">
                <br/>
                <br/>
                <div className="row">
                    {this.props.blogs.map((bl) => {
                        return (
                            <div className="col-lg-4 col-md-6 col-12 " key={bl.id} style={{cursor: 'pointer'}}>
                                <div className="content-blog" onClick={() => this.viewContent(bl)}>
                                    <img style={{width: '100%', height: '200px'}} className="art lazy" alt=""
                                         src={bl.imageUrl}/>
                                    <br/>
                                    <div className="blog-title hover-blog">{bl.title}</div>
                                    <br/>
                                    <span className="blog-info">
                    {bl.postDate} | {bl.author}
                  </span>
                                    <br/>
                                    <br/>

                                    {/*<div className="blog-content">{bl.contentVI}</div>*/}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    renderDetail() {
        return (
            <div className="container">
                <div className="row">
                    <div className="container col-lg-7 col-12">
                        <br/>
                        <br/>
                        <div className="blog-title-detail">{this.state.blogView.title}</div>
                        <span className="blog-info">
              {this.state.blogView.postDate} | {this.state.blogView.author}
            </span>
                        <br/>
                        <img style={{width: '100%', height: 'auto'}} className="art lazy" alt=""
                             src={this.state.blogView.imageUrl}/>
                        <div className="mt-4">
                            <CKEditor
                                editor={ClassicEditor}
                                data={this.state.blogView[this.props.language === 'vi' ? 'contentVI' : 'contentEN']}
                                disabled
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
                        {this.state.blogView.link !== '' ? <a href={this.state.blogView.link}>Link: {this.state.blogView.link}</a> : null}
                        <br/>
                        <span style={{float:'right',cursor:'pointer'}} onClick={()=>this.returnBlog()}><FormattedMessage id="return"/></span>
                    </div>
                    <div className="col-lg-5">
                        <div className="row">
                            {this.props.blogs.map((blog) => {
                                return (
                                    <div className="col-md-6 col-lg-12 col-12 p-2 " key={blog.id}
                                         style={{cursor: 'pointer'}}>
                                        <div className="content-blog" onClick={() => this.viewContent(blog)}>
                                            <img style={{width: '100%', height: '200px'}} className="art lazy" alt=""
                                                 src={blog.imageUrl}/>
                                            <br/>
                                            <div className="p-2 ">
                                                <div>
                                                    <div className="blog-title ellipsis-text hover-blog">{blog.title}</div>
                                                </div>
                                                <span className="blog-info">
                          {blog.postDate} | {blog.author}
                        </span>
                                                <br/>
                                                <div className="mt-2">
                                                    <div
                                                        className="blog-content ellipsis-text">{this.props.language === 'en' ? blog.contentEn : blog.contentVi}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {/*{this.state.loaded ? null :<LoadingSpinner/>}*/}
                <Translation>{(t) => <TopMenu t={t}/>}</Translation>
                <NavBar/>
                <h2 style={{textAlign: 'center', color: 'white'}}>
                    <FormattedMessage id="blog-game"/>
                </h2>
                <span style={{marginLeft: '10%', color: 'white'}}>
          <Link to="/" style={{color: 'white'}}>
            {' '}
              <FormattedMessage id="home"/>{' '}
          </Link>{' '}
                    &nbsp;>&nbsp;<a onClick={() => this.returnBlog()} style={{cursor: 'pointer'}}>Blog</a>
        </span>
                {this.state.viewType ? this.renderList() : this.renderDetail()}
                <br/>
                <br/>
                <ParallaxImage/>
                <Footer/>
                <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
        language: state.language
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        removePackageView: (id) => {
            dispatch(removePackageView(id));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);

