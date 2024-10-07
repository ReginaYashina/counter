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
    setCount: (count: number) => void
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
        setCount,
        setCountInc,
        setCountReset
    } = props

    const counterBoardClassName = count === maxValue ? `${s.board} ${s.counterBoard} ${s.red}` : `${s.board} ${s.counterBoard}`
    const countClassName = isSet ? s.counterResult : `${s.counterResult} ${s.hide}`
    const messagesWrapperClassName = isSet ? s.hide : ''
    const buttonWrapperClassName = `${s.btnWrapper} ${s.borders}`
    const isDisabled = count === maxValue || minValue >= maxValue
    const isDisabledOnSet = isSet ? false : true
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
                <Button onClick={setCountInc} disabled={isDisabled || isDisabledOnSet}>inc</Button>
                <Button onClick={setCountReset} disabled={isDisabledOnSet}>reset</Button>
            </div>
        </div>
    );
};