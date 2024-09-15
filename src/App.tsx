import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {SettingsBoard} from './components/SettingsBoard';

function App() {
    const [maxVal, setMaxVal] = useState('5');
    const [minVal, setMinVal] = useState('0');

    const maxValue = JSON.parse(maxVal);
    const minValue = JSON.parse(minVal);

    const [count, setCount] = useState(minValue)
    const [isClicked, setIsClicked] = useState(true)

    useEffect(() => {
        const localStorageMaxValue = localStorage.getItem('max value')
        const localStorageMinValue = localStorage.getItem('start value')
        if (localStorageMaxValue) {
            setMaxVal(localStorageMaxValue)
        }
        if (localStorageMinValue) {
            setMinVal(localStorageMinValue)
            setCount(JSON.parse(localStorageMinValue))
        }
    }, []);

    const setCountInc = () => {
        count < maxValue && setCount(count + 1)
    }

    const setCountReset = () => {
        setCount(minValue)
    }

    const setMaxValHandler = (value: string) => {
        setMaxVal(value)
        setIsClicked(false)
    }
    const setMinValHandler = (value: string) => {
        setMinVal(value)
        setIsClicked(false)
    }

    const setValues = () => {
        localStorage.setItem('start value', minValue)
        localStorage.setItem('max value', maxValue)
        setCountReset()
        setIsClicked(true)
    }


    return (
        <div className="App">
            <SettingsBoard
                maxVal={maxVal}
                minVal={minVal}
                isSet = {isClicked}
                setMaxVal={setMaxValHandler}
                setMinVal={setMinValHandler}
                setValues={setValues}
            />
            <Counter
                count={count}
                setCount={setCount}
                maxValue={maxValue}
                minValue={minValue}
                isSet = {isClicked}
                setCountInc={setCountInc}
                setCountReset={setCountReset}
            />
        </div>
    );
}

export default App;
