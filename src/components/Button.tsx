import React from "react";
import s from './Button.module.css'

type ButtonProps = {
    name: string
    callback: () => void
    disabled: boolean
}
export const Button = (props: ButtonProps) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <button disabled={props.disabled} className={s.button} onClick={onClickHandler}> { props.name } </button>
    )
}