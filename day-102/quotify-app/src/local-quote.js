import React from 'react';

function Heading(props) {
    return <h1> { props.title } </h1>
}

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
        
        if(!localData) {
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
            <div>
                <h2> { this.state.quotes.quote } </h2>
                <h4> { this.state.quotes.author } </h4>
                <h5><mark> { this.state.notice } </mark></h5>
                <button onClick={this.getQuote}> Get Another Quote </button>
            </div>
        )
    } 
}

function LocalQuoteApp() {
    return (
        <div>
            <Heading title="Quotify" />
            <LocalQuote />
        </div>
    )
}

export default LocalQuoteApp;
