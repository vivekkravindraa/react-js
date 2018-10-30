import React from 'react';

function Heading(props) {
    return <h1> { props.title } </h1>
}

class LocalQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            localArray: JSON.parse(localStorage.getItem('quotes')) ? JSON.parse(localStorage.getItem('quotes')) : []
        }
    }

    render() {
        return (
            <div>
                <h2> Listing Quotes - {this.state.localArray.length} </h2>
                <ul>
                    {this.state.localArray.map((item, index) => {
                        return <SingleQuote item={item} key={index} />
                    })}
                </ul>         
            </div>
        )
    }
}

class SingleQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.editQuote = this.editQuote.bind(this);
        this.displayQuote = this.displayQuote.bind(this);
    }

    handleEdit() {
        this.setState({
            editMode: true
        })
    }

    handleDelete(e) {
        console.log(e);
    }

    handleUpdate(e) {
        console.log(e);
    }
    
    handleCancel() {
        this.setState({
            editMode: false
        })
    }

    editQuote() {
        return (
            <div>
                <form>
                    <textarea value={ this.props.item.quote }> </textarea><br />
                    <input type="text" value={ this.props.item.author } /><br />
                </form>
                <button onClick={this.handleUpdate}> Update </button>
                <button onClick={this.handleCancel}> Cancel </button>
            </div>
        )
    }

    displayQuote() {
        return (
            <li>
                <h3> { this.props.item.quote } </h3>
                <h5> { this.props.item.author } </h5>
                <button onClick={this.handleEdit}> Edit From Local </button>
                <button onClick={this.handleDelete}> Delete From Local </button>
            </li>
        )
    }

    render() {
        return this.state.editMode ? this.editQuote() : this.displayQuote();
    }
}

function ListQuotesApp() {
    return (
        <div>
            <Heading title="Quotify" />
            <LocalQuote />
        </div>
    )
}

export default ListQuotesApp;
