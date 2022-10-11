import React, {useEffect, useState} from "react";
import {Board} from "./Tablo";
import {ControlPanel} from "./ControlPanel";
import s from './Counter.module.css'
import {SettingsCounter} from "./SettingsCounter";
import {Button} from "../Button";

export type StorageType = {
    START_VALUE: number
    MAX_VALUE: number
    STEP: number
}
export const Counter = () => {

    const [storage, setStorage] = useState<StorageType>({
        START_VALUE: 0,
        MAX_VALUE: 5,
        STEP: 1
    })
    const [settings, setSettings] = useState('off')
    const [count, setCount] = useState<number>(storage.START_VALUE);
    const [error, setError] = useState('')

    useEffect(() => {
        let local_storage = localStorage.getItem('counter_settings')
        let local_settings = localStorage.getItem('settings')
        if (local_storage) {
            let storage_get = JSON.parse(local_storage)
            setStorage(storage_get)
            setCount(storage_get.START_VALUE)
        }
        if (local_settings) {
            setSettings(JSON.parse(local_settings))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(settings))
    }, [settings])
    useEffect(() => {
        let local_storage = {
            START_VALUE: storage.START_VALUE,
            MAX_VALUE: storage.MAX_VALUE,
            STEP: storage.STEP
        }
        localStorage.setItem('counter_settings', JSON.stringify(local_storage))
    }, [storage])


    const changeSettings = (newStorage: StorageType) => {
        setStorage(newStorage)
        setCount(newStorage.START_VALUE)
        setError('')
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



    return (
        <div className={s.counter}>
            <Button name={'show settings'} callback={() => setSettings('on')} disabled={settings === 'on'}/>
            <Button name={'hide settings'} callback={() => setSettings('off')} disabled={settings === 'off'}/>
            {settings === 'on' &&
                <SettingsCounter
                    storage={storage}
                    changeSettings={changeSettings}
                    setSettings={setSettings}
                    setError={setError}
                    error={error}/>
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