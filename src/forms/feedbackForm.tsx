import React, {useState} from 'react';
import {EMPTY_STRING, ZERO_INT} from '../constants/common';
import {createHandleInput} from "../constants/filters";
import 'rc-rate/assets/index.css';

import './feedbackForm.scss'
import Rate from "rc-rate/es";
import {createComment} from "../actions/feedbackForm";

const FeedbackForm = () => {
    const [name, setName] = useState(EMPTY_STRING);
    const [comment, setComment] = useState(EMPTY_STRING);
    const [rate, setRate] = useState(ZERO_INT);

    const clearState = () => {
        setName(EMPTY_STRING);
        setComment(EMPTY_STRING);
        setRate(ZERO_INT);
    }

    const handleSubmit = (e: any) => {
        createComment({name, comment, rate})
        e.stopPropagation()
        clearState();
    }

    return <div className='feedback-form'>
        <input placeholder={'Как вас зовут?'} name='name' className={'feedback-form__name-input'}
               onChange={createHandleInput(setName)} value={name}/>
        <textarea placeholder='Что вы можете сказать о нас?' name='comment' className={'feedback-form__comment-input'}
                  onChange={createHandleInput(setComment)} value={comment}/>
        <Rate
            value={rate}
            onChange={setRate}
            className={'feedback-form__rate'}
        />
        <button className='feedback-form__submit' onClick={handleSubmit}>отправить</button>
    </div>
};


export default FeedbackForm;