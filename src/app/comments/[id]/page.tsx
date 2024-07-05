import React, {FC} from 'react';
import {commentServices} from "@/services/api.services";



const CommentPage = async ({params}:{params:{id:string}}) => {

    let comment = await commentServices.getCommentById(params.id);
    return (
        <div>
            <h3>Additional info about comment {comment.id}:</h3>
            <p>Name: {comment.name}</p>
            <p>Body: {comment.body}</p>
            <p>Email: {comment.email} </p>
            <p>Post id:{comment.postId}</p>
        </div>
    );
};

export default CommentPage;