import React, {useEffect, useState} from 'react';
import './commentsBrowser.scss'
import {getComments} from "../../actions/adminPanel";
import FeedbackCard from "../../components/feedbackCard";
import {CommentsDto} from "../../types/dto";
import {isEmptyArray} from "../../utils/commonUtils";


const CommentsBrowser = () => {
    const [comments, setComments] = useState([] as Array<CommentsDto>);
    useEffect(() => {
        getComments(setComments)
    }, []);
    return <div className={'comments-browse-form'}>
        {!isEmptyArray(comments) ? comments.map(comment => <FeedbackCard
            name={comment.name}
            comment={comment.feedback}
            rate={comment.rate}
            datetime={comment.serverDateTime}
        />) : <span>Комментарии не найдены</span>}
    </div>
}

export default CommentsBrowser;