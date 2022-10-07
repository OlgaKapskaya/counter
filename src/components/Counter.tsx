import React, {useState} from "react";
import {Board} from "./Tablo";
import {ControlPanel} from "./ControlPanel";
import s from './Counter.module.css'
import {SettingsCounter} from "./SettingsCounter";
import {Button} from "./Button";


export const Counter = () => {

    const [START_VALUE, setStartValue] = useState(0)
    const [MAX_VALUE, setMaxValue] = useState(5)
    const [STEP, setStep] = useState(1)

    const [settings, setSettings] = useState<'on' | 'off'>('off')

    const changeSettings = (start: number, max: number, step: number) => {
        setStartValue(start)
        setMaxValue(max)
        setStep(step)
        setCount(start)
    }
    const [count, setCount] = useState<number>(START_VALUE);

    const incCounter = () => {
        if (count < MAX_VALUE) {
            setCount(count + STEP)
        }
    }
    const resetCounter = () => {
        setCount(START_VALUE)
    }
    const delCounter = () => {
        if (count > START_VALUE) {
            setCount(count - STEP)
        }

    }
    const onClickShowSettings = () => {
        setSettings('on')
    }
    const onClickHideSettings = () => {
        setSettings('off')
    }
    return (
        <div className={s.counter}>
            <Button name={'show settings'} callback={onClickShowSettings} disabled={false}/>
            <Button name={'hide settings'} callback={onClickHideSettings} disabled={false}/>
            {settings === 'on' &&
                <SettingsCounter
                    max={MAX_VALUE}
                    start={START_VALUE}
                    step={STEP}
                    changeSettings={changeSettings}
                    setSettings={setSettings}/>
            }
            <Board
                count={count}
                max={MAX_VALUE}
                min={START_VALUE}/>
            <ControlPanel
                incCounter={incCounter}
                resetCounter={resetCounter}
                deleteCounter={delCounter}
                count={count}
                max={MAX_VALUE}
                min={START_VALUE}/>

        </div>
    )
}