import React, {Component} from 'react';

class UserComponent extends Component {
    render() {
        let {someone} = this.props;
        return (
            <div>
                <div>{someone.id}, {someone.name}, {someone.age}, {someone.status.toString()}, {someone.address.city}, {someone.address.street}</div>
            </div>
        );
    }
}

export default UserComponent;