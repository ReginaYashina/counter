import {Board} from './Board';
import s from './counter.module.css';
import {Button} from './Button';
import React from 'react';

type CounterPropsType = {
    count: number
    maxValue: number
    minValue: number
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
        className,
        setCount,
        setCountInc,
        setCountReset
    } = props

    return (
        <div className={`${s.counter} ${s.borders}`}>
            <Board
                className={count === maxValue ? `${s.board} ${s.counterBoard} ${s.red}` : `${s.board} ${s.counterBoard}`}>{count}</Board>
            <div className={`${s.btnWrapper} ${s.borders}`}>
                <Button onClick={setCountInc} disabled={count === maxValue || minValue >= maxValue}>inc</Button>
                <Button onClick={setCountReset} disabled={count === minValue || minValue >= maxValue}>reset</Button>
            </div>
        </div>
    );
};