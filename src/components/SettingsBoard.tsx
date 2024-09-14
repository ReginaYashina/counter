import s from './counter.module.css';
import {Board} from './Board';
import {Button} from './Button';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {Input} from './Input';

type SettingsBoardPropsType = {
    maxVal: string
    minVal: string
    setMaxVal: (value: string) => void
    setMinVal: (value: string) => void
    setValues: () => void
};

export const SettingsBoard = (props: SettingsBoardPropsType) => {
    const {
        maxVal,
        minVal,
        setMaxVal,
        setMinVal,
        setValues
    } = props;


    return (
        <div className={`${s.counter} ${s.borders}`}>
            <Board className={`${s.board} ${s.settingsBoard}`}>
                <Input value={maxVal} type={'number'}
                       className={minVal >= maxVal ? `${s.errorInput} ${s.settingsInputLabel}` : s.settingsInputLabel}
                       label={'max value'}
                       onChange={setMaxVal}/>
                <Input value={minVal} type={'number'}
                       className={minVal >= maxVal ? `${s.errorInput} ${s.settingsInputLabel}` : s.settingsInputLabel}
                       label={'start value'}
                       onChange={setMinVal}/>
            </Board>
            <div className={`${s.btnWrapper} ${s.borders}`}>
                <Button disabled={minVal >= maxVal} onClick={setValues}>set</Button>
            </div>
        </div>
    );
};