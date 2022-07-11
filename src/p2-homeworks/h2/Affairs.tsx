import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from "./Affairs.module.css";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={() =>props.deleteAffairCallback(a._id)}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    } // need to fix
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }
    const cnAll = classes.button + ' ' + (props.filter === "all" ? classes.active : '')
    const cnHigh = classes.button + ' ' + (props.filter === "high" ? classes.active : '')
    const cnMiddle = classes.button + ' ' + (props.filter === "middle" ? classes.active : '')
    const cnLow = classes.button + ' ' + (props.filter === "low" ? classes.active : '')
    return (
        <div>

            {mappedAffairs}

            <button className = {cnAll} onClick={setAll}>All</button>
            <button className = {cnHigh} onClick={setHigh}>High</button>
            <button className = {cnMiddle} onClick={setMiddle}>Middle</button>
            <button className = {cnLow} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
