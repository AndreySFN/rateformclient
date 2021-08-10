import React, {useState} from 'react';
import {EMPTY_STRING, ZERO_INT} from '../constants/common';
import {createHandleInput} from "../constants/filters";
import 'rc-rate/assets/index.css';

import './feedbackForm.scss'
import Rate from "rc-rate/es";
import {createComment} from "../actions/feedbackForm";

enum Step {
    GREETING,
    COMMENT,
    RATE,
    THANKS,
}

const renderGreeting = (setStep: (value: Step) => void) => {
    return <div className={'greeting-form'}>
        <h1>Для улучшения качества клиентского сервиса просим вас пройти опрос</h1>
        <button className={'solid-button'} onClick={() => setStep(Step.COMMENT)}>Пройти опрос</button>
    </div>
}

const renderCommentForm = (
    name: string,
    setName: (value: string) => void,
    employerName: string,
    setEmployerName: (value: string) => void,
    comment: string,
    setComment: (value: string) => void,
    setStep: (value: Step) => void
) => {
    return <div className='comment-form'>
        <h2>Отзыв</h2>
        <div className='white-container'>
            <input placeholder={'Ваше имя'} name='name' className={'feedback-form__name-input'}
                   onChange={createHandleInput(setName)} value={name}/>
            <input placeholder={'Имя сотрудника'} name='employerName' className={'feedback-form__employer-name-input'}
                   onChange={createHandleInput(setEmployerName)} value={employerName}/>
            <textarea placeholder='Отзыв о работе сотрудника' name='comment' className={'feedback-form__comment-input'}
                      onChange={createHandleInput(setComment)} value={comment}/>
        </div>
        <button className={'primary-button'} onClick={() => setStep(Step.RATE)}>Далее</button>
        ;
    </div>;
}

const renderRateForm = (
    rate: number,
    setRate: (value: number) => void,
    setStep: (value: Step) => void,
    handleSubmit: () => void) => {
    return <div className='rate-form'>
        <h2>Оценка работы сотрудника</h2>
        <div className='white-container'>
            <Rate
                value={rate}
                onChange={setRate}
                className={'feedback-form__rate'}
            />
        </div>
        <div className='buttons-container'>
            <button onClick={() => setStep(Step.COMMENT)} className={'secondary-button'}>Вернуться</button>
            <button onClick={() => {
                handleSubmit();
                setStep(Step.THANKS);
            }} className={'primary-button'}>Далее
            </button>
        </div>
    </div>
}

const renderThanks = (clearState: () => void) => {
    setTimeout(clearState, 5000)
    return <h1>
        Спасибо за отзыв. Мы становимся лучше благодаря вам.
    </h1>
}

const FeedbackForm = () => {

        const [name, setName] = useState(EMPTY_STRING);
        const [employerName, setEmployerName] = useState(EMPTY_STRING);
        const [comment, setComment] = useState(EMPTY_STRING);
        const [rate, setRate] = useState(ZERO_INT);
        const clearState = () => {
            setName(EMPTY_STRING);
            setComment(EMPTY_STRING);
            setRate(ZERO_INT);
            setEmployerName(EMPTY_STRING);
            setStep(Step.GREETING);
        }
        const [step, setStep] = useState(Step.GREETING);
        const handleSubmit = () => createComment(name, employerName, comment, rate);

        const renderStep = (step: Step) => {
            switch (step) {
                case Step.GREETING:
                    return renderGreeting(setStep);
                case Step.COMMENT:
                    return renderCommentForm(name, setName, employerName, setEmployerName, comment, setComment, setStep);
                case Step.RATE:
                    return renderRateForm(rate, setRate, setStep, handleSubmit);
                case Step.THANKS:
                    return renderThanks(clearState);
            }
        }
        return <div className='feedback-form'>
            {renderStep(step)}
        </div>
    }
;


export default FeedbackForm;