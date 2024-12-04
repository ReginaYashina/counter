import {Board} from './Board';
import s from './counter.module.css';
import {Button} from './Button';
import React from 'react';

type CounterPropsType = {
    count: number
    maxValue: number
    minValue: number
    isSet: boolean
    className?: string
    setCountInc: () => void
    setCountReset: () => void
};
export const Counter = (props: CounterPropsType) => {
    const {
        count,
        maxValue,
        minValue,
        isSet,
        className,
        setCountInc,
        setCountReset
    } = props

    const counterBoardClassName = count === maxValue ? `${s.board} ${s.counterBoard} ${s.red}` : `${s.board} ${s.counterBoard}`
    const countClassName = isSet ? s.counterResult : `${s.counterResult} ${s.hide}`
    const messagesWrapperClassName = isSet ? s.hide : ''
    const buttonWrapperClassName = `${s.btnWrapper} ${s.borders}`
    const isDisabled = count === maxValue || minValue >= maxValue ||minValue >= maxValue || maxValue < 0 || minValue < 0 || !isSet
    const resetIsDisabled = count === minValue ||minValue >= maxValue || maxValue < 0 || minValue < 0 || !isSet
    const messages = minValue >= maxValue || maxValue < 0 || minValue < 0 ?
        <span className={`${s.message} ${s.errorMessage}`}>{'Incorrect value!'}</span> :
        <span className={s.message}>{'enter values and press "set"'}</span>

    return (
        <div className={`${s.counter} ${s.borders}`}>
            <Board
                className={counterBoardClassName}>
                <div className={countClassName}>{count}</div>
                <div className={messagesWrapperClassName}>{messages}</div>
            </Board>
            <div className={buttonWrapperClassName}>
                <Button onClick={setCountInc} disabled={isDisabled}>inc</Button>
                <Button onClick={setCountReset} disabled={resetIsDisabled}>reset</Button>
            </div>
        </div>
    );
};