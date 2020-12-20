import React, {Component} from 'react';
import PostService from "../../service/postService";
import Post from "../post/post";

class AllPosts extends Component {
    postService = new PostService();

    state = {posts: []};

    async componentDidMount() {
        let posts = await this.postService.posts();
        this.setState({posts})
    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                {
                    posts.map(value => <Post item = {value} key = {value.id}/>)
                }
            </div>
        );
    }
}

export default AllPosts;