import React from 'react'
import QuoteService from '../services/QuoteService'
class Quotes extends React.Component {
    constructor(props) {
        super(props)
        this.quoteService = QuoteService.getInstance()
        this.state = {
            quotes: [],
            quote: {
                jobTitle: ''
            }
        }
    }
    componentDidMount() {
        this.findAllQuotes()
    }
    findAllQuotes = () =>
        this.quoteService
            .findAllQuotes()
            .then(quotes =>
                this.setState({
                    quotes: quotes
                })
            )
    updateForm = e =>
        this.setState({
            quote: {
                id: this.state.quote.id,
                jobTitle: e.target.value
            }
        })
    createQuote = () =>
        this.quoteService
            .createQuote(this.state.quote)
            .then(this.findAllQuotes)
    deleteQuote = id =>
        this.quoteService
            .deleteQuote(id)
            .then(this.findAllQuotes)
    selectQuote = id =>
        this.quoteService
            .findQuoteById(id)
            .then(quote => this.setState({
                quote: quote
            }))
    updateQuote = () =>
        this.quoteService
            .updateQuote(this.state.quote)
            .then(this.findAllQuotes)
    render() {
        return(
            <div>
                <h3>Quotes</h3>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>
                            <input
                                onChange={e => this.updateForm(e)}
                                value={this.state.quote.jobTitle}></input>
                            <button onClick={this.createQuote}>Add</button>
                            <button onClick={this.updateQuote}>Update</button>
                        </td>
                    </tr>
                    {
                        this.state.quotes
                            .map(quote =>
                                <tr key={quote.id}>
                                    <td>{quote.jobTitle}</td>
                                    <td><button onClick={() => this.deleteQuote(quote.id)}>
                                        Delete
                                    </button>
                                    <button onClick={() => this.selectQuote(quote.id)}>
                                        Select
                                    </button>
                                    </td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Quotes
