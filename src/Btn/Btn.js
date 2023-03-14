import React from "react";
import './Btn.css'

export default function Btn(props) {
    const { className, ...restProps } = props
    const classNames = className ? `btn__add-student` : 'btn'

    return (
        <button className={classNames} {...restProps}></button>
    )
}