import React, {Component} from 'react';
import CommentService from "../../service/commentService";
import Comment from "../comment/comment";

import {Route, Switch, withRouter} from "react-router-dom";
import OneComment from "../one-comment/OneComment";

class AllComments extends Component {
    commentService = new CommentService();

    state = {comments: []};

    async componentDidMount() {
        let comments = await this.commentService.comments();
        this.setState({comments})
    }

    render() {
        let {comments} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    comments.map(value => <Comment item = {value} key = {value.id}/>)
                }
                <div>
                    <Switch>
                        <Route path={url + '/:id'} render={(props) =>{
                            let {match: {params: {id}}} = props;
                            return <OneComment commentId = {id} key = {id}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllComments);