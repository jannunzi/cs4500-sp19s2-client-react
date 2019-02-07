import React from 'react'
import UserService from '../services/UserService'
class Users extends React.Component {
    constructor(props) {
        super(props)
        this.userService = UserService.getInstance()
        this.state = {
            users: []
        }
    }
    render() {
        return(
            <div>
                <h3>Users</h3>
            </div>
        )
    }
}

export default Users
