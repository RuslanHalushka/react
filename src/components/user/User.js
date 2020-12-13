import React, {Component} from 'react';

class User extends Component {

    render() {
        let {item, chosenBtn} = this.props
        return (
            <div>
                {item.id}, {item.name}
                <button onClick={() => chosenBtn(item.id)}>Choose me</button>
            </div>
        );
    }
}

export default User;