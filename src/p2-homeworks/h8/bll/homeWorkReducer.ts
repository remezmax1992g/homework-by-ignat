import {UserType} from "../HW8";

type SortPeopleType = {
    type: "sort"
    payload: "up" | "down"
}
type Check18Type = {
    type: "check"
    payload: number
}

type ActionType = SortPeopleType | Check18Type
export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    debugger
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case "up":
                    return [...state].sort((a, b) => a.name>b.name ? 1:-1)
                case "down":
                    return [...state].sort((a, b) => a.name>b.name ? -1:1)
                default:
                    return state
            }
        }
        case 'check': {
            return state.filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
}
