import React from 'react'
const Quotes = ({quotes, quote,
  selectQuote, updateForm, createQuote,
  updateQuote, deleteQuote}) =>
<div>
    <h3>Quotes {quotes.length}</h3>
    <table className="table">
        <tbody>
        <tr>
            <td>
                <input
                    className="job-title-fld"
                    onChange={e => updateForm(e)}
                    value={quote.jobTitle}></input>
                <button
                    className="create-quote-btn"
                    onClick={createQuote}>Add</button>
                <button
                    className="update-quote-btn"
                    onClick={updateQuote}>Update</button>
            </td>
        </tr>
        {
            quotes
                .map(quote =>
                    <tr className="quote-row"
                        key={quote.id}>
                        <td className="job-title">
                            {quote.jobTitle}
                        </td>
                        <td>
                            <button
                                className="delete-quote-btn"
                                onClick={() => deleteQuote(quote.id)}>
                            Delete
                        </button>
                        <button
                            className="select-quote-btn"
                            onClick={() => selectQuote(quote.id)}>
                            Select
                        </button>
                        </td>
                    </tr>
                )
        }
        </tbody>
    </table>
</div>

export default Quotes
