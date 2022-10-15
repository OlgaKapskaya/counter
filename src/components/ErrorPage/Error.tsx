import React from "react";
import s from './Error.module.css'

export const ErrorPage = () => {
    return (
        <div className={s.errorContainer}>

            <h2 className={s.text}>PAGE NOT FOUND</h2>
        </div>
    )
}