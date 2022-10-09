import React, {useEffect, useState} from "react";
import {Board} from "./Tablo";
import {ControlPanel} from "./ControlPanel";
import s from './Counter.module.css'
import {SettingsCounter} from "./SettingsCounter";
import {Button} from "../Button";


export const Counter = () => {

    const [storage, setStorage] = useState({
        START_VALUE: 0,
        MAX_VALUE: 5,
        STEP: 1
    })

    const [settings, setSettings] = useState<'on' | 'off'>('on')
    const [count, setCount] = useState<number>(storage.START_VALUE);
    const [error, setError] = useState('')

    useEffect(() => getFromLocalStorage ,[])
    useEffect( () => {
        setToLocalStorage()
    }, [storage])

    const changeSettings = (start: number, max: number, step: number) => {
        if (step > 0 && start < max) {
            setStorage({
                MAX_VALUE: max,
                START_VALUE: start,
                STEP: step
            })
            setCount(start)
            setError("")
        } else {
            setError('Incorrect value!')
        }

    }
    const incCounter = () => {
        if (count < storage.MAX_VALUE) {
            setCount(count + storage.STEP)
        }
    }
    const resetCounter = () => {
        setCount(storage.START_VALUE)
    }
    const delCounter = () => {
        if (count > storage.START_VALUE) {
            setCount(count - storage.STEP)
        }
    }
    const onClickShowSettings = () => {
        setSettings('on')
    }
    const onClickHideSettings = () => {
        setSettings('off')
    }

    const setToLocalStorage = () => {
        let local_storage = {
            START_VALUE: storage.START_VALUE,
            MAX_VALUE: storage.MAX_VALUE,
            STEP: storage.STEP
        }
        localStorage.setItem('counter_settings', JSON.stringify(local_storage))
    }
    const getFromLocalStorage = () => {
        let local_storage = localStorage.getItem('counter_settings')
        if (local_storage) {
            let storage_get = JSON.parse(local_storage)
            setStorage(storage_get)
            console.log(storage_get)
        }
    }

    return (
        <div className={s.counter}>
            <Button name={'show settings'} callback={onClickShowSettings} disabled={settings === 'on'}/>
            <Button name={'hide settings'} callback={onClickHideSettings} disabled={settings === 'off'}/>
            {settings === 'on' &&
                <SettingsCounter
                    max={storage.MAX_VALUE}
                    start={storage.START_VALUE}
                    step={storage.STEP}
                    changeSettings={changeSettings}
                    setSettings={setSettings}/>
            }
            <Board
                count={count}
                max={storage.MAX_VALUE}
                min={storage.START_VALUE}
                error={error}/>
            <ControlPanel
                incCounter={incCounter}
                resetCounter={resetCounter}
                deleteCounter={delCounter}
                count={count}
                max={storage.MAX_VALUE}
                min={storage.START_VALUE}/>
        </div>
    )
}