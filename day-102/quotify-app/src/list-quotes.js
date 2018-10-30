import React from 'react';

function Heading(props) {
    return (
        <div className="card text-center">
            <div className="card-body">
                <h1 class="text-center"> {props.title} </h1>
            </div>
        </div>
    )
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
                <Heading title="Quotify" />
                <h2 class="text-center">Listing Quotes - {this.state.localArray.length} </h2>
                {this.state.localArray.map((item, index) => {
                    return <SingleQuote item={item} key={index} />
                })}
            </div>
        )
    }
}

class SingleQuote extends LocalQuote {
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
            <div className="card text-center">
                <div className="card-body">
                    <form>
                        <div className="form-group col-md-12">
                            <textarea className="form-control" value={this.props.item.quote}> </textarea>
                            <input className="form-control" type="text" value={this.props.item.author} />
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-success" onClick={this.handleUpdate}> Update </button>
                            <button type="button" className="btn btn-danger" onClick={this.handleCancel}> Cancel </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    displayQuote() {
        return (
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title alert alert-primary"> {this.props.item.quote} </h5>
                    <h6 className="card-text"> {this.props.item.author} </h6>
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary" onClick={this.handleEdit}> Edit From Local </button>
                        <button type="button" className="btn btn-danger" onClick={this.handleDelete}> Delete From Local </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return this.state.editMode ? this.editQuote() : this.displayQuote();
    }
}

function ListQuotesApp() {
    return (
        <div>
            <LocalQuote />
        </div>
    )
}

export default ListQuotesApp;
