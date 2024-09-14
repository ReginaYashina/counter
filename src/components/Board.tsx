import React from 'react';

type BoardProps = {
    children: React.ReactNode;
    className?: string;
}

export const Board = (props: BoardProps) => {
    const {children, className} = props
    return (
        <div className={className}>{children}</div>
    );
};

