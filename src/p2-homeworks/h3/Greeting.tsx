import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    onClickEnterAndCtrl: (event: KeyboardEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean// need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onClickEnterAndCtrl} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input //
    const messageErrorText = error ? "Name is required" : ""// need to fix with (?:)

    return (
        <div className={s.greeting}>
            <div>
                <SuperInputText value={name} onChange={setNameCallback} onKeyDown={onClickEnterAndCtrl}
                                onBlur={setNameCallback}/>
                {/* <input value={name}
                        onChange={setNameCallback}
                        className={inputClass}
                        onKeyDown={onClickEnterAndCtrl}
                        onBlur={setNameCallback}/>*/}
                <div className={s.error}>{messageErrorText}</div>
            </div>
            <SuperButton onClick={addUser} disabled={!name}>add</SuperButton>
            {/* <button className={s.button} onClick={addUser} disabled={!name}>add</button>*/}
            <div className={s.totalCount}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
