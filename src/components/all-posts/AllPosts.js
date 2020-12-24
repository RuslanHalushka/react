import React, {Component} from 'react';
import PostService from "../../service/postService";
import Post from "../post/post";
import {Route, Switch, withRouter} from "react-router-dom";
import OnePost from "../one-post/OnePost";

class AllPosts extends Component {
    postService = new PostService();

    state = {posts: []};

    async componentDidMount() {
        let posts = await this.postService.posts();
        this.setState({posts})
    }

    render() {
        let {posts} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <Post item = {value} key = {value.id}/>)
                }
                <div>
                    <Switch>
                        <Route path={url + '/:id'} render={(props) =>{
                            let {match: {params: {id}}} = props;
                            return <OnePost postId = {id} key = {id}/>;
                        }}/>
                    </Switch>
                </div>
            </div>

        );
    }
}

export default withRouter(AllPosts);