import React from 'react'
import {AffairType} from "./HW2";
import classes from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const priorityClass = classes.name + ' ' + classes[props.affair.priority]

    return (
        <div className={classes.affair}>
            <div className={classes.name}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>
            <button className={classes.name + ' ' + classes.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
