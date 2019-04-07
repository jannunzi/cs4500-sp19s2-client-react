export default class ReviewService {
    static instance = null;
    static getInstance() {
        if(ReviewService.instance === null) {
            ReviewService.instance = new ReviewService()
        }
        return this.instance
    }
    findReviewById = reviewId =>
        fetch(`http://localhost:8080/api/reviews/${reviewId}`)
            .then(response => response.json())
            .catch(err => console.log(err))
    findAllReviews = () =>
        fetch("http://localhost:8080/api/reviews")
            .then(response => response.json())
    createReview = review => {
        delete review.id;
        return fetch(`http://localhost:8080/api/reviews`, {
            method: 'post',
            body: JSON.stringify(review),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }
    updateReview = review =>
        fetch(`http://localhost:8080/api/reviews/${review.id}`, {
            method: 'put',
            body: JSON.stringify(review),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
    deleteReview = id =>
        fetch(`http://localhost:8080/api/reviews/${id}`, {
            method: 'delete'
        })

}
