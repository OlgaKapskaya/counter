import React from "react";
import s from './Tablo.module.css'

type BoardProps = {
    count: number
}
export const Board = (props: BoardProps) => {
    let titleStyle = props.count < 5 ? s.title : s.titleEnd
    let containerStyle = props.count < 5 ? s.container : s.containerEnd
    return (
        <div className={containerStyle}>
            <h1 className={titleStyle}>{props.count}</h1>
        </div>
    )
}