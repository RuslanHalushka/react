import React, {Component} from 'react';
import {PostService} from "../../services/post-service/PostService";
import Post from "../post/Post";

class AllPosts extends Component {

    postService = new PostService();

    state = {posts: [], post: null};

    componentDidMount() {
        this.postService.getAllPosts()
            .then(value => this.setState({posts: value}));
    }

    onePost = (id) => this.postService.getSomePost(id).then(value => this.setState({post: value}));


    render() {

        let {posts, post} = this.state;

        return (
            <div>
                {
                    posts.map(value => <Post item ={value} key = {value.id} onePost = {this.onePost}
                                             isShowBtn = {true}/>)
                }
                {
                    post && <Post item = {post} isShowBtn = {false}/>
                }

            </div>
        );
    }
}

export default AllPosts;