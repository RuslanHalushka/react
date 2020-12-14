import React, {Component} from 'react';
import User from "../user/User";
import {UserService} from "../../services/user-service/UserService";

class AllUsers extends Component {

    userService = new UserService();

    state = {users: [], someone: null};

    chooseUser = (id) =>
        this.userService.getSomeUser(id)
            .then(value => this.setState({someone: value}));

    componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users: value}));
    }

    render() {
        let {users, someone} = this.state;

        return (
            <div>
                {
                    users.map(value => <User item = {value} key = {value.id} chooseUser = {this.chooseUser}
                                             isBtn = {true}/>)
                }
                {
                    someone && <User item = {someone} isBtn = {false}/>
                }
            </div>
        );
    }
}

export default AllUsers;