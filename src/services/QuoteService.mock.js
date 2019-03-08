import quotes from '../data/quotes.json'

global.fetch = jest.fn()
    .mockImplementation((url, config) => {
        if(!config) {
            if(url.indexOf('api/quotes/0') != -1) {
                return quotes[0]
            } else if(url.indexOf('api/quotes/1') != -1) {
                return quotes[1]
            } else if(url.indexOf('api/quotes') != -1) {
                return new Promise((resolve, reject) => {
                    resolve({ json: function() {
                        return quotes
                    }})})
            }
        } else if(config.method === 'post') {
            let quote = JSON.parse(config.body)
            quote.id = (new Date()).getTime()
            quotes.push(quote)
            return new Promise((resolve, reject) => {
                resolve({ json: function() {
                    return quotes
                }})})
        } else if(config.method === 'put') {
        } else if(config.method === 'delete') {
        }
    });
