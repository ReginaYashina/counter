import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {SettingsBoard} from './components/SettingsBoard';
import s from './components/counter.module.css';


function App() {
    const [maxVal, setMaxVal] = useState('5');
    const [minVal, setMinVal] = useState('0');

    const maxValue = JSON.parse(maxVal);
    const minValue = JSON.parse(minVal);

    const [count, setCount] = useState(minValue)

    const setCountInc = () => {
        count < maxValue && setCount(count + 1)
    }

    const setCountReset = () => {
        setCount(minValue)
    }

    const setMaxValHandler = (value: string) => {
        setMaxVal(value)

    }
    const setMinValHandler = (value: string) => {
        setMinVal(value)
    }

    const setValues = () => {
        localStorage.setItem('start value', minValue)
        localStorage.setItem('max value', maxValue)
        setCountReset()
    }

    useEffect(() => {
        const localStorageMaxValue = localStorage.getItem('max value')
        const localStorageMinValue = localStorage.getItem('start value')
        if (localStorageMaxValue) {
            setMaxVal(localStorageMaxValue)
        }
        if (localStorageMinValue) {
            setMinVal(localStorageMinValue)
        }
    }, []);


    useEffect(() => {
        setCount(minValue >= maxValue ? <span className={`${s.message} ${s.errorMessage}`}>{'Incorrect value!'}</span> :
            <span className={s.message}>{'enter values and press "set"'}</span>)
    }, [maxVal, minVal]);

    return (
        <div className="App">
            <SettingsBoard
                maxVal={maxVal}
                minVal={minVal}
                setMaxVal={setMaxValHandler}
                setMinVal={setMinValHandler}
                setValues={setValues}
            />
            <Counter
                count={count}
                setCount={setCount}
                maxValue={maxValue}
                minValue={minValue}
                setCountInc={setCountInc}
                setCountReset={setCountReset}
            />
        </div>
    );
}

export default App;
