import React from 'react';
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';

const options = [
    { value: 'vi', label: 'Tiếng Việt' },
    { value: 'en', label: 'English' },
];


export default function TopMenu() {

    const style ={
        width:'70%',
        float:'left',
        justifyContent:'center',
        color:'white',
        alignItems:'center'
    }
    const styleTop ={
        width:'100%',
        justifyContent:'center'
    }

    let handleGenreChange;
    const defaultOption= options[0];
    return (
        <div className="navbar">
            <div className="row" style={styleTop}>
                <div className="col">

                </div>
                <div className="col">
                    <Dropdown className="topDropdown" options={options} onChange={handleGenreChange} value={defaultOption} placeholder="Need help?" />
                </div>
            </div>
            <div className="row" style={styleTop}>
                <img className="logo" src={'./website-logo.png'} alt=""/>

                <div style={style}>
                    <a className="nav-menu">Home</a>
                    <a className="nav-menu">Shop</a>
                    <a className="nav-menu">Hot Sale</a>
                    <a className="nav-menu">User Guide</a>
                    <a className="nav-menu">About</a>
                </div>

            </div>
        </div>
    );
}
