import {ChangeEvent} from 'react';

type InputPropsType = {
    type?: string
    className?: string
    label?: string
    value?: string
    onChange: (value:string) => void
};
export const Input = (props: InputPropsType) => {
    const {
        type,
        className,
        label,
        value,
        onChange
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <label className={className} >
            <span>{label}</span>
            <input value={value} type={type} onChange={onChangeHandler}/>
        </label>
    );
};