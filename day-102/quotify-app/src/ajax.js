import React from 'react';
import axios from "axios";
import loader from "./loader.gif";

function Heading(props) {
    return <h1> {props.title} </h1>
}

class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: {},
            localArray: [],
            localSave: 'Save To Local',
            disabled: false,
            isLoaded: false
        }
        this.getQuote = this.getQuote.bind(this);
        this.displayQuote = this.displayQuote.bind(this);
        this.makeRequest = this.makeRequest.bind(this);
        this.saveToLocal = this.saveToLocal.bind(this);
    }

    componentDidMount() {
        this.makeRequest();
    }

    makeRequest() {
        setTimeout(() => {
            axios.get(`https://talaikis.com/api/quotes/random`)
            .then((response) => {
                // console.log(response.data);
                this.setState({
                    quotes: response.data,
                    isLoaded: true
                });
            })
            .catch((error) => {
                console.log(error);
            })
        }, 1000);
    }

    getQuote() {
        this.makeRequest();

        this.setState({
            localSave: 'Save To Local',
            disabled: false
        });
    }

    saveToLocal() {
        this.setState(prevState => {
            prevState.localArray.push(prevState.quotes);
            localStorage.setItem('quotes', JSON.stringify(prevState.localArray));
        });

        this.setState({
            localSave: 'Saved',
            disabled: true
        });
    }

    displayQuote() {
        return (
            <div>
                <h2> {this.state.quotes.quote} </h2>
                <h4> {this.state.quotes.author} </h4>
                <button onClick={this.getQuote}> Get Another Quote </button>
                <button onClick={this.saveToLocal} disabled={this.state.disabled}> {this.state.localSave} </button>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.isLoaded ? this.displayQuote() : <img alt="" src={loader} />}
            </div>
        )
    }
}

function AjaxApp() {
    return (
        <div>
            <Heading title="Quotify" />
            <Quote />
        </div>
    )
}

export default AjaxApp;
