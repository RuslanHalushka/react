import React, {Component} from 'react';

class User extends Component {


    render() {
        let {item, chooseUser, isBtn} = this.props;

        return (
            <div>
                {item.id}, {item.name}
                {isBtn && <button onClick={() => chooseUser(item.id)}>Click on me</button>}
            </div>
        );
    }
}

export default User;