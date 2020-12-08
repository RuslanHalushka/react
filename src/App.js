import React, {Component} from 'react';
import {usersWithAddress} from "./arrayOfUsers/usersList";
import UserComponent from "./components/user/UserComponent";

class App extends Component {
    render() {

        return (
            <div>
                {
                    usersWithAddress.map(user => (<UserComponent someone = {user} key = {user.id}/>))
                }
            </div>
        );
    }
}

export default App;