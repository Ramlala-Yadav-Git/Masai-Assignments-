
import { createContext, useContext } from 'react'
import { DashBoard } from './DashBoard'

import { Dash } from './DashBoard'


export function ShowDashBoard() {

    const c = useContext(Dash)


    return (
        <>
            <div>
                <DashBoard />
            </div>

        </>
    )
}