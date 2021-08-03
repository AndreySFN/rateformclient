import React from "react";
import Rate from "rc-rate/es";
import './feedbackCard.scss'

interface Props {
    name: string;
    comment: string;
    rate: number;
    datetime: string;
}

const FeedbackCard = (props: Props) => {
    return <div className='feedback-card'>
        <div className='feedback-card_header'>
            <div className='feedback-card__name'>{props.name}</div>
            <div className='feedback-card__datetime'>{props.datetime}</div>
        </div>
        <div className='feedback-card__comment'>{props.comment}</div>
        <Rate
            value={props.rate}
            className={'feedback-card__rate'}
            disabled={true}
        />
    </div>
}

export default FeedbackCard;