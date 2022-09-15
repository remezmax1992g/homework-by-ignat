type ActionLoadingType = ReturnType<typeof loadingAC>

const LOADING = "LOADING"

const initState = false

export const loadingReducer = (state:boolean = initState, action: ActionLoadingType): boolean => { // fix any
    switch (action.type) {
        case LOADING: {
            return action.payload.loading
        }
        default: return state
    }
}

export const loadingAC = (loading: boolean)  => {
    return {
        type: LOADING,
        payload: {loading}
    } as const
}