import React, {Component} from 'react';
import CommentService from "../../service/commentService";


class OneComment extends Component {

    state = {oneComment: null};

    commentService = new CommentService();

    async componentDidMount() {
        let {commentId} = this.props;
        let oneComment = await this.commentService.oneComment(commentId);
        this.setState({oneComment});
    }

    render() {
        let {oneComment} = this.state;
        return (
            <div>
                {oneComment && <div>{oneComment.id}, {oneComment.email}</div>}
            </div>
        );
    }
}

export default OneComment;