import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import s from './Timer.module.css'
import {Button} from "../Button";


export const Timer = () => {

    const [time, setTime] = useState('00 : 00')
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    //let newDate = new Date().toTimeString().slice(0, 5)

    //точка отсчета
    //setTime(new Date().setMinutes(minutes))


    const startTimer = () => {

    }
    const onChangeMinutesHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (Number(event.currentTarget.value) >= 0 && Number(event.currentTarget.value) <= 60) {
            setMinutes(Number(event.currentTarget.value))
            console.log(minutes)
        }
    }
    const onChangeSecondsHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (Number(event.currentTarget.value) >= 0 && Number(event.currentTarget.value) <= 60) {
            setSeconds(Number(event.currentTarget.value))
            console.log(seconds)
        }

    }
    const onSaveHandler = () => {
        setTime(minutes + ' : ' + seconds)

    }
    return (
        <div className={s.timer}>
            <div className={s.settings}>
                <label>MINUTES</label>
                <input className={s.input} type={'number'} value={minutes} onChange={onChangeMinutesHandler}/>
                <label>SECONDS </label>
                <input className={s.input} type={'number'} value={seconds} onChange={onChangeSecondsHandler}/>
                <Button name={'SAVE'} callback={onSaveHandler} disabled={false}/>

            </div>
            <div className={s.display}>
                <h1 className={s.time}> {time} </h1>

            </div>
            <div className={s.ControlPanel}>
                <Button name={'START'} callback={startTimer} disabled={false}/>
                <Button name={'STOP'} callback={() => {
                }} disabled={false}/>
            </div>
        </div>
    )
}