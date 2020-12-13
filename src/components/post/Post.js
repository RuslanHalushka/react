import React, {Component} from 'react';

class Post extends Component {

    render() {

        let {item, onClickedBtn} = this.props;
        return (
            <div>
                {item.id}, {item.title}

                <button onClick={()=> onClickedBtn(item.id)}>click</button>
            </div>
        );
    }
}

export default Post;