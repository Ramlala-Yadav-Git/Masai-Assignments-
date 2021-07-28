import stlyes from "./user.module.css"
import React, { useState } from "react"

import { User } from "./User"
import { createContext } from "react"

export const Dash = createContext({
    handleDark: () => { },
    color: ""
})

export function DashBoard() {
    const [co, setColor] = useState(false)
    const handleDark = () => {
        setColor(!co)
    }


    return (

        <>
            <div style={{ background: co ? "black" : "white", color: co ? "white" : "black", }} >
                <Dash.Provider value={{ handleDark, co }}>

                    <div className={stlyes.dashboard} >
                        <h3>
                            My Dashboard
                        </h3>
                        <button onClick={handleDark}>DARK MODE</button>
                    </div>
                    <div className={stlyes.active}>
                        <h4>Active users</h4>
                        <p>For August 2020 </p>
                    </div>
                    <div >
                        <User pic={"https://picsum.photos/200/300"}

                            name={"Nrupul Dev"} prog={50} level={10} point={1000} add={"Delhi, India"}
                        />
                        <User pic={"https://picsum.photos/200/400"}

                            name={"Somesh"} prog={80} level={7} point={100} add={"Valsad, India"}
                        />
                    </div>
                </Dash.Provider>
            </div>
        </>

    )
}