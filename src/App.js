import React, {Component} from 'react';
import {CardList} from "./compnents/card/card-list";
import './App.css';
import {SearchBox} from "./compnents/card/searchField";

class app extends Component {
    constructor() {
        super();
        this.state = {
            a: [],
            searchField: ''

        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({a: users}))
    }

    render() {
        const {a,searchField} = this.state;
        const filteredList= a.filter(a=>a.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div className="App">
                <SearchBox handleChange= { e => this.setState({searchField: e.target.value})} placeholder='Search Box' />
                <CardList a={filteredList}/>
            </div>
        );
    }
}

export default app;
