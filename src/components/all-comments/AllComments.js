import React, {Component} from 'react';
import CommentService from "../../service/commentService";
import Comment from "../comment/comment";

class AllComments extends Component {
    commentService = new CommentService();

    state = {comments: []};

    async componentDidMount() {
        let comments = await this.commentService.comments();
        this.setState({comments})
    }

    render() {
        let {comments} = this.state;
        return (
            <div>
                {
                    comments.map(value => <Comment item = {value} key = {value.id}/>)
                }
            </div>
        );
    }
}

export default AllComments;