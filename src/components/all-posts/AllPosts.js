import React, {Component} from 'react';
import Post from "../post/Post";

class AllPosts extends Component {

    state = {posts: [], chosenBtn: null};

    onClickedBtn = (id) =>{
        let {posts} = this.state
        let finderPost = posts.find(value => value.id === id);
        this.setState({chosenBtn: finderPost})
    }

    render() {

        let {posts, chosenBtn} = this.state;
        return (
            <div>
                {
                    posts.map(post => <Post item = {post} key = {post.id} onClickedBtn ={this.onClickedBtn}/>)
                }
                {
                    chosenBtn && <Post item = {chosenBtn}/>
                }
            </div>
        );
    }

    componentDidMount() {

        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                this.setState({posts});
            });
    }
}

export default AllPosts;