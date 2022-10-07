import React from "react";
import s from './Tablo.module.css'

type BoardProps = {
    count: number
    max: number
    min: number
}
export const Board = (props: BoardProps) => {
    let titleStyle = props.count < props.max ? s.title : s.titleEnd
    let containerStyle = props.count < props.max ? s.container : s.containerEnd

    return (
        <div className={containerStyle}>
            <h1 className={titleStyle}>{props.count}</h1>
        </div>
    )
}