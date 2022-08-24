import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import preload from './common/preloading.svg'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading)


    const setLoading = () => {
        dispatch(loadingAC(!loading))
        setTimeout(() => dispatch(loadingAC(loading)), 2000)
    };

    return (
        <div>
            console.log(loading)
            <hr/>
            homeworks 10

            {loading
                ? (
                    <div><img src={preload}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
