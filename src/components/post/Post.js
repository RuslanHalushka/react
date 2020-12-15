import React, {Component} from 'react';

class Post extends Component {
    render() {

        let {item, onePost, isShowBtn} = this.props

        return (
            <div>
                {item.id}, {item.title}
                {isShowBtn && <button onClick={() => onePost(item.id)}>Choose</button>}
            </div>
        );
    }
}

export default Post;