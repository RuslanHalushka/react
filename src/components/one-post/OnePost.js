import React, {Component} from 'react';
import PostService from "../../service/postService";

class OnePost extends Component {

    state = {onePost: null};

    postService = new PostService();

    async componentDidMount() {
        let {postId} = this.props
        let onePost = await this.postService.onePost(postId);
        this.setState({onePost});
    }

    render() {
        let {onePost} = this.state

        return (
            <div>
                {onePost && <div>{onePost.id}, {onePost.body}</div>}

            </div>
        );
    }
}

export default OnePost;