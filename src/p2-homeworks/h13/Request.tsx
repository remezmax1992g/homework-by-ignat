import React, {useState} from 'react';
import {requestAPI} from "./api/requestAPI";

export const Request = () => {
    const[serverStatus, setServerStatus] = useState("")
    const[isSuccess, setIsSuccess] = useState(false)
    const changeCheckbox = () => {
        setIsSuccess(!isSuccess)
    }
    const clickRequest = () => {
        requestAPI.createRequest(isSuccess)
            .then((res) => {
                setIsSuccess(res.data.yourBody.success)
                setServerStatus(res.data.errorText)
            })
            .catch((err) => {
                setIsSuccess(err.response.data.yourBody.success)
                setServerStatus(err.response.data.errorText)
            })
    }
    return (
        <div>
            <input type="checkbox" checked={isSuccess} onChange={changeCheckbox}/>
            <button onClick={clickRequest}>Create request</button>
            <div>{serverStatus}</div>
        </div>
    );
};
