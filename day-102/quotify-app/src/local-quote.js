import React from 'react';

class LocalQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: {},
            notice: ''
        }
        this.getQuote = this.getQuote.bind(this);
        this.makeRequest = this.makeRequest.bind(this);
    }

    componentDidMount() {
        this.makeRequest();
    }

    makeRequest() {
        let localData = JSON.parse(localStorage.getItem('quotes'));

        if (!localData) {
            this.setState({
                notice: 'Local storage is empty.'
            })
        } else {
            this.setState({
                quotes: localData[Math.floor(Math.random() * localData.length)]
            })
        }
    }

    getQuote() {
        this.makeRequest();
    }

    render() {
        return (
            <div className="card text-center">
                <div className="card-body">
                    <h1 className="card-title">Quotify</h1>
                    <h2 className="card-title alert alert-light"> {this.state.quotes.quote} </h2>
                    <h4 className="card-text"> {this.state.quotes.author} </h4>
                    <h5 className="card-text"> {this.state.notice} </h5>
                    <div>
                        <button type="button" className="btn btn-primary" onClick={this.getQuote}> Get Another Quote </button>
                    </div>
                </div>
            </div>
        )
    }
}

function LocalQuoteApp() {
    return (
        <div>
            <LocalQuote />
        </div>
    )
}

export default LocalQuoteApp;
