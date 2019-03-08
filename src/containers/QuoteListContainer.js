import React from 'react'

import Quotes from "../components/Quotes";
class QuoteListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.quoteService = this.props.service
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
            .then(quotes => {
                this.setState({
                    quotes: quotes
                })
            }
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
        return (
            <div>
                <Quotes
                    updateQuote={this.updateQuote}
                    selectQuote={this.selectQuote}
                    deleteQuote={this.deleteQuote}
                    createQuote={this.createQuote}
                    updateForm={this.updateForm}
                    quote={this.state.quote}
                    quotes={this.state.quotes}/>
            </div>
        )
    }
}
export default QuoteListContainer