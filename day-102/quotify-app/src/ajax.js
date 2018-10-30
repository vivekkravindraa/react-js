import React from 'react';
import axios from "axios";
import loader from "./loader.gif";

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
            <div className="card text-center">
                <div className="card-body">
                    <h1>Quotify</h1>
                    <h2 className="card-title alert alert-primary"> {this.state.quotes.quote} </h2>
                    <h4 className="card-text"> {this.state.quotes.author} </h4>
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary" onClick={this.getQuote}> Get Another Quote </button>
                        <button type="button" className="btn btn-success" onClick={this.saveToLocal} disabled={this.state.disabled}> {this.state.localSave} </button>
                    </div>
                </div>
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
            <Quote />
        </div>
    )
}

export default AjaxApp;
