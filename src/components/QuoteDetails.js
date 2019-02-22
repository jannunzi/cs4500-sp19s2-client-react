import React from 'react'
import QuoteService from '../services/QuoteService'
class QuoteDetails extends React.Component {
    constructor(props) {
        super(props)
        this.quoteService = QuoteService.getInstance()
        this.state = {
            quotes: [],
            quote: {
                jobTitle: '',
                id: 1
            }
        }
    }
    componentDidMount() {
        this.findAllQuotes()
    }
    findAllQuotes = () =>
        this.quoteService
            .findAllQuotes()
            .then(quotes => {
                    this.props.history.push("/admin/quotes/" + quotes[0].id)
                    this.setState({
                        quotes: quotes,
                        quote: quotes[0]
                    })
                }
            )
    selectQuote = id =>
        this.quoteService
            .findQuoteById(id)
            .then(quote => {
                    this.props.history.push("/admin/quotes/" + id)
                    this.setState({
                        quote: quote
                    })
                }
            )
    updateForm = e =>
        this.setState({
            quote: {
                jobTitle: e.target.value,
                id: this.state.quote.id
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
    updateQuote = () =>
        this.quoteService
            .updateQuote(this.state.quote)
    render() {
        return(
            <div>
                <h3>Quote Details</h3>
                <select
                    value={this.state.quote.id}
                    onChange={(e) => this.selectQuote(e.target.value)}
                    className="form-control">
                    {
                        this.state.quotes
                            .map(quote =>
                                <option
                                    value={quote.id}
                                    key={quote.id}>
                                    {quote.id}
                                </option>
                            )
                    }
                </select>
                <label>Quote</label><br/>
                <input
                    onChange={e => this.updateForm(e)}
                    className="form-control"
                    value={this.state.quote.jobTitle}/>
                <button onClick={this.createQuote}>
                    Create
                </button>
                <button onClick={() => this.deleteQuote(this.state.quote.id)}>
                    Delete
                </button>
                <button onClick={this.updateQuote}>
                    Update
                </button>
            </div>
        )
    }
}

export default QuoteDetails
