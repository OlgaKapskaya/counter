import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import s from './Timer.module.css'
import {Button} from "../Button";


export const Timer = () => {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    let countDownDate = new Date(`Jan 5, 2024 00:${minutes}:${seconds}`).getTime();
    //var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    // Update the count down every 1 second

        const startTimer = () => {
            let x = setInterval(function () {
                // Get today's date and time
                let now = new Date().getTime();
                let distance = countDownDate - now;

                // Time calculations for minutes and seconds
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                // Output the result in an element with id="demo"

                setMinutes(minutes)
                setSeconds(seconds)
                // If the count down is over, write some text
                if (distance < 0) {
                    clearInterval(x);
                    ;
                }
            }, 1000);
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
        const onSaveHandler = () => {

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
                    <h1 className={s.time}> {minutes} : {seconds} </h1>

                </div>
                <div className={s.ControlPanel}>
                    <Button name={'START'} callback={startTimer} disabled={false}/>
                    <Button name={'STOP'} callback={() => {
                    }} disabled={false}/>
                </div>
            </div>
        )
    }