import React, {Component} from 'react';
import User from "../user/User";
import './Users.css'

class AllUsers extends Component {
    state = {users: [], btn: null}

    chosenBtn = (id) =>{
        let {users} = this.state;
        let finderUser = users.find(value => value.id === id);
        this.setState({btn: finderUser});
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users =>{
                this.setState({users});
            });
    }

    render() {
        let {users, btn} = this.state
        return (
            <div className={'forUsers'}>
                {
                    users.map(user => <User item = {user} key = {user.id} chosenBtn = {this.chosenBtn}/>)
                }
                {
                    btn && <User item = {btn}/>
                }
            </div>
        );
    }
}

export default AllUsers;