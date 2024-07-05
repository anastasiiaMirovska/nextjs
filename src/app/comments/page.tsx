import React from 'react';
import {commentServices} from "@/services/api.services";
import CommentComponent from "@/components/CommentComponent";

const CommentsPage = async() => {
    let comments = await commentServices.getAllComments();

    return (
        <div>
            <ul>
                {comments.map((comment: IComment)=> (<li key={comment.id}><CommentComponent comment={comment}/></li>) )}
            </ul>

        </div>
    );
};

export default CommentsPage;