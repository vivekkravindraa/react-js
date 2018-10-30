import React from 'react';

function Heading(props) {
    return <h1> { props.title } </h1>
}

class AddQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteValue: '',
            authorValue: ''
        }
        this.handleQuote = this.handleQuote.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.saveToLocal = this.saveToLocal.bind(this);
    }

    handleQuote(e) {
        this.setState({
            quoteValue: e.target.value
        })
    }

    handleAuthor(e) {
        this.setState({
            authorValue: e.target.value
        })
    }

    saveToLocal(e) {
        e.preventDefault();

        let quotes = JSON.parse(localStorage.getItem('quotes')) ? JSON.parse(localStorage.getItem('quotes')) : [];
        
        let data = {
            quote: this.state.quoteValue,
            author: this.state.authorValue
        }

        if(!((data.quote === '') && (data.author === ''))) {
            quotes.push(data);
            this.setState({
                localArray: quotes
            })
        }
        
        localStorage.setItem('quotes', JSON.stringify(quotes)); 
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.saveToLocal}>
                    <label><h4> Add Quote: </h4></label>
                    <textarea onChange={this.handleQuote} value={this.state.quoteValue}></textarea>

                    <label><h4> Add Author: </h4></label>
                    <input type="text" onChange={this.handleAuthor} value={this.state.authorValue} />

                    <label><h4> Click To Save </h4></label>
                    <input type="submit" value="Save To Local" />
                </form>
            </div>
        )
    }
}

function AddQuoteApp() {
    return (
        <div>
            <Heading title="Quotify" />
            <AddQuote />
        </div>
    )
}

export default AddQuoteApp;
