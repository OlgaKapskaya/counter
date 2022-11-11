import React, {ChangeEvent, useEffect, useState} from "react";
import s from './SettingsCounter.module.css'
import {Button} from "../Button";
import {StorageType} from "./Counter";

type SettingsCounterProps = {
    storage: StorageType
    changeSettings: (newStorage: StorageType) => void
    setSettings: (status: 'on' | 'off') => void
    setError: (text: string) => void
    error: string

}
export const SettingsCounter = (props: SettingsCounterProps) => {
    const [newStorage, setNewStorage] = useState(props.storage)
    useEffect(() => {
        setNewStorage(props.storage)
    }, [props.storage])
    useEffect(() => {
        if (newStorage.START_VALUE >= newStorage.MAX_VALUE
            || newStorage.STEP < 1
            || newStorage.STEP > (newStorage.MAX_VALUE - newStorage.START_VALUE)
            || (newStorage.MAX_VALUE - newStorage.START_VALUE) % newStorage.STEP !== 0
        ) {
            props.setError('Incorrect value!')
        } else {
            props.setError("")
        }
    }, [newStorage, props.error, props])

    const onChangeStartHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewStorage({...newStorage, START_VALUE: Number(event.currentTarget.value)})
    }
    const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewStorage({...newStorage, MAX_VALUE: Number(event.currentTarget.value)})
    }
    const onChangeStepHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewStorage({...newStorage, STEP: Number(event.currentTarget.value)})

    }
    const onClickSaveButton = () => {
        props.changeSettings(newStorage)
    }
    const onClickDefaultButton = () => {
        let newStorageValue = {
            MAX_VALUE: 5,
            START_VALUE: 0,
            STEP: 1
        }
        props.changeSettings(newStorageValue)
    }

    const inputStartClass = newStorage.START_VALUE >= newStorage.MAX_VALUE ? s.errorInput : s.input
    const inputMaxClass = newStorage.MAX_VALUE <= newStorage.START_VALUE ? s.errorInput : s.input
    const inputStepClass = (newStorage.STEP < 1) || (newStorage.MAX_VALUE - newStorage.START_VALUE) % newStorage.STEP !== 0 ? s.errorInput : s.input

    return (
        <div className={s.container}>
            <label>Enter start value:</label>
            <input
                type={'number'}
                className={inputStartClass}
                value={newStorage.START_VALUE}
                onChange={onChangeStartHandler}/>
            <label>Enter max value:</label>
            <input
                type={'number'}
                className={inputMaxClass}
                value={newStorage.MAX_VALUE}
                onChange={onChangeMaxHandler}/>
            <label>Enter step:</label>
            <input
                type={'number'}
                className={inputStepClass}
                value={newStorage.STEP}
                onChange={onChangeStepHandler}/>

            <div className={s.panel}>
                <Button name={'SAVE'} callback={onClickSaveButton} disabled={props.error !== ""}/>
                <Button name={'SET DEFAULT'} callback={onClickDefaultButton} disabled={false}/>

            </div>
        </div>
    )
}
