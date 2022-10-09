import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import s from './Timer.module.css'
import {Button} from "../Button";


export const Timer = () => {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [time, setTime] = useState(0)
    const [error, setError] = useState('')
    const [timerSettings, setTimerSettings] = useState(true)

    const timerOut = () => {
        if (time > 0) {
            if (minutes > 0) {
                setMinutes(Math.floor((time - 1000) / 60000))
                setTime(time - 1000)
                if (seconds === 0) {
                    setSeconds(59)
                } else {
                    setSeconds(seconds - 1)
                }
            } else {
                setSeconds(seconds - 1)
                setTime(time - 1000)
            }
        } else {
            setTimerSettings(true)
        }

    }
    useEffect(() => {
        const interval = setInterval(
            () => timerOut(),
            1000,
        );
        return () => clearInterval(interval);
    }, [time]);

    const startTimer = () => {
        if (minutes !== 0 || seconds!== 0){
            let timeout = minutes * 60 * 1000 + seconds * 1000;
            setTime(timeout);
            setTimerSettings(false)
            setError("")
        } else {
            setError('Incorrect value!')
        }

    }

    const onChangeMinutesHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMinutes(Number(event.currentTarget.value))
        setError("")
    }
    const onChangeSecondsHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSeconds(Number(event.currentTarget.value))
        setError("")
    }

    const stopTimer = () => {
        setTime(0)
        setSeconds(0)
        setMinutes(0)
        setTimerSettings(true)
    }

    return (
        <div className={s.timer}>
            {
                timerSettings &&
                <div className={s.settings}>
                    <label>SET MINUTES</label>
                    <input className={s.input}
                           type={'range'}
                           min={0} max={59} step={1}
                           value={minutes}
                           onChange={onChangeMinutesHandler}/>
                    <label>SET SECONDS </label>
                    <input className={s.input}
                           type={'range'}
                           min={0} max={59} step={1}
                           value={seconds}
                           onChange={onChangeSecondsHandler}/>
                </div>
            }

            <div className={s.display}>
                {error === "" ? <h1 className={s.time}>
                    {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
                </h1> : <h1 className={s.error}>{error}</h1>}

            </div>
            <div className={s.ControlPanel}>
                <Button name={'START'} callback={startTimer} disabled={false}/>
                <Button name={'STOP'} callback={stopTimer} disabled={false}/>
            </div>
        </div>
    )
}