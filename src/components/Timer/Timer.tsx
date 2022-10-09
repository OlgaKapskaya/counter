import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import s from './Timer.module.css'
import {Button} from "../Button";


export const Timer = () => {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [time, setTime] = useState(0)

    const timerOut = () => {
        setTime(time - 1000)
        setSeconds(seconds - 1)
    }
    useEffect(() => {
        const interval = setInterval(
            () => setTime(time - 1000),
            1000,
        );

        return () => clearInterval(interval);
    }, []);


    const startTimer = () => {
        let timeout = minutes * 60 * 1000 + seconds * 1000;
        setTime(timeout);
    }

    const onChangeMinutesHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (Number(event.currentTarget.value) >= 0 && Number(event.currentTarget.value) <= 60) {
            setMinutes(Number(event.currentTarget.value))
        }
    }
    const onChangeSecondsHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (Number(event.currentTarget.value) >= 0 && Number(event.currentTarget.value) <= 60) {
            setSeconds(Number(event.currentTarget.value))
        }
    }

    const stopTimer = () => {
        setTime(0)
        setSeconds(0)
        setMinutes(0)
    }

    return (
        <div className={s.timer}>

            <div className={s.settings}>
                <label>SET MINUTES</label>
                <input className={s.input} type={'number'} value={minutes} onChange={onChangeMinutesHandler}/>
                <label>SET SECONDS </label>
                <input className={s.input} type={'number'} value={seconds} onChange={onChangeSecondsHandler}/>
            </div>

            <div className={s.display}>
                <h1 className={s.time}>
                    {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
                </h1>
                <div>{time}</div>

            </div>
            <div className={s.ControlPanel}>
                <Button name={'START'} callback={startTimer} disabled={false}/>
                <Button name={'STOP'} callback={stopTimer} disabled={false}/>
            </div>
        </div>
    )
}