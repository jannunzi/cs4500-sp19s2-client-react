export default class UserService {
    static instance = null;
    static getInstance() {
        if(UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }
    findAllUsers = () =>
        fetch("http://localhost:8080/api/users")
            .then(response => response.json())
}
