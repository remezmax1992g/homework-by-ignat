import axios from "axios";

export const requestAPI = {
    createRequest(success: boolean){
        return axios.post<ResponseType>("https://neko-cafe-back.herokuapp.com/auth/test", {success})
    }
}

type ResponseType = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    }
    yourQuery: any
}