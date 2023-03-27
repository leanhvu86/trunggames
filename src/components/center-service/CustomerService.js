import React from 'react';
import './CustomerService.css';
import Card from "../CardsMouseFollow/Card";


class CustomerService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loaded: false};
    }

    render() {

        return (
            <div className="service-container">
                <Card/>
                <Card/>
            </div>
        )
    }
}

export default (CustomerService);
