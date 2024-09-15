import s from './counter.module.css';
import {Board} from './Board';
import {Button} from './Button';
import React from 'react';
import {Input} from './Input';

type SettingsBoardPropsType = {
    maxVal: string
    minVal: string
    isSet: boolean
    setMaxVal: (value: string) => void
    setMinVal: (value: string) => void
    setValues: () => void
};

export const SettingsBoard = (props: SettingsBoardPropsType) => {
    const {
        maxVal,
        minVal,
        isSet,
        setMaxVal,
        setMinVal,
        setValues
    } = props;

    const minValNumber = Number(minVal)
    const maxValNumber = Number(maxVal)

    const bordersClassName = `${s.counter} ${s.borders}`
    const settingsBoardClassName = `${s.board} ${s.settingsBoard}`
    const inputClassName = minValNumber >= maxValNumber || maxValNumber < 0 || minValNumber < 0 ? `${s.errorInput} ${s.settingsInputLabel}` : s.settingsInputLabel
    const isDisabled = minValNumber >= maxValNumber || maxValNumber < 0 || minValNumber < 0 || isSet
    const buttonWrapperClassName = `${s.btnWrapper} ${s.borders}`

    return (
        <div className={bordersClassName}>
            <Board className={settingsBoardClassName}>
                <Input value={maxVal} type={'number'}
                       className={inputClassName}
                       label={'max value'}
                       onChange={setMaxVal}/>
                <Input value={minVal} type={'number'}
                       className={inputClassName}
                       label={'start value'}
                       onChange={setMinVal}/>
            </Board>
            <div className={buttonWrapperClassName}>
                <Button disabled={isDisabled}
                        onClick={setValues}>set</Button>
            </div>

        </div>
    );
};