import React, {ButtonHTMLAttributes} from 'react';
import s from './counter.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    disabled?: boolean

};

export const Button = (props:ButtonProps) => {
    const {children, onClick,className,disabled } = props
    const finalClassName = `
    ${s.button}
    ${disabled ? s.disabled:''}
    `
    return (
        <button onClick={onClick} className={finalClassName}>{children}</button>
    );
};

