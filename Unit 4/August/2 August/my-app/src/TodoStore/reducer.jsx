
import { store } from "../store/store";
import { ADDTODO, REMOVETODO, TOGGLETODO } from "./actionType";


const initialState = {
    list: [],

}
export const reducerFunction = (state = initialState, action) => {
    const { type, payLoad } = action


    switch (type) {
        case ADDTODO:
            const { id, status, data } = payLoad;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        data,
                        id: id,
                        status: status
                    }
                ]

            }
        case REMOVETODO:
            const removeId = payLoad.id;
            const list = payLoad.list
            const filterData = list.filter((e) => {
                return e.id !== removeId
            })

            return {
                ...state,
                list: [
                    ...filterData
                ]
            }
        case TOGGLETODO:
            const remove = payLoad.id;
            const li = payLoad.list

            const filterD = li.filter((e) => {
                return e.id === remove
            })
            const filterD2 = li.filter((e) => {
                return e.id !== remove
            })
            filterD[0].status = true;
            const final = [...filterD2, ...filterD]
            return {
                ...state,
                li: [
                    ...final,

                ]
            }


        default: return state
    }


}

