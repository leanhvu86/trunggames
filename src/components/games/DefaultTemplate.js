import React from 'react';
import './game.css';

export const eventTypes = {
    closeAll: 'closeAll',
    openAll: 'openAll',
    clickNode:'clickNode'
}


export default class DefaultTemplate extends React.Component {

    handleOpen(isOpen) {
        const { data = {}, updateData, } = this.props
        updateData({
            ...data,
            isOpen,
        })
    }

    handleOpenAll(isOpen) {
        //use treeEvent from props to fire an event | 使用props中的treeEvent来触发一个事件
        const { treeEvent } = this.props
        treeEvent(isOpen ? eventTypes.openAll : eventTypes.closeAll)
    }
    onClickNode(e){
        const { treeEvent } = this.props
        treeEvent(eventTypes.clickNode,e);
    }

    render() {
        const { data = {}, children = [], } = this.props
        const handleOpen = this.handleOpen.bind(this)
        const handleOpenAll = this.handleOpenAll.bind(this)
        const onClickNode = this.onClickNode.bind(this)
        const empty=children.length === 0;
        const getControls = (isOpen) => {
            if(empty){
                return (<em/>)
            }
            if (isOpen) {
                return (<em>
                        <span onClick={() => handleOpenAll(false)} className="close-collapse"><i className="fa fa-chevron-up" aria-hidden="true"/></span>
                    {/*<span onClick={() => handleOpenAll(false)}>close all</span>*/}
                </em>)
            }
            return (<em>
                        <span onClick={() => handleOpenAll(true)} className="open-collapse"><i className="fa fa-chevron-down" aria-hidden="true"/></span>
                        {/*<span onClick={() => handleOpenAll(true)}><i className="fa fa-bars" aria-hidden="true"/></span>*/}
                    </em>)
        }

        return (
            <div className="tree-content">
                {data.title==='Category'?'':<a className="category-item" style={{fontSize:'12px'}}>{data.title}{getControls(data.isOpen)}</a>}
                <span style={{ display:data.isOpen?'block':'none'}}>
                    {children.map((x, i) => (<span onClick={()=>onClickNode(x)} className="category-item" key={i}>{x}</span>))}
                </span>
            </div>
        )
    }
}
