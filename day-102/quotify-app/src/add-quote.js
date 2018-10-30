import React from 'react';

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

        if (!((data.quote === '') && (data.author === ''))) {
            quotes.push(data);
            this.setState({
                localArray: quotes
            })
        }

        localStorage.setItem('quotes', JSON.stringify(quotes));

        this.setState({
            quoteValue: '',
            authorValue: ''
        })
    }

    render() {
        return (
            <div className="card text-center">
                <div className="card-body">
                    <h1>Quotify</h1>
                    <form onSubmit={this.saveToLocal}>
                        <div className="form-group">
                            <div className="form-group col-md-4">
                                <label><h5>Add Quote:</h5></label>
                                <textarea className="form-control" onChange={this.handleQuote} value={this.state.quoteValue}></textarea>
                            </div>
                            <div className="form-group col-md-4">
                                <label><h5>Add Author:</h5></label>
                                <input className="form-control" type="text" onChange={this.handleAuthor} value={this.state.authorValue} />
                            </div>
                            <div className="form-group col-md-4">
                                <input className="form-control btn btn-success" type="submit" value="Save To Local" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function AddQuoteApp() {
    return (
        <div>
            <AddQuote />
        </div>
    )
}

export default AddQuoteApp;
