import { useState } from "react"
import { Button } from "../Button/Button"
export function Counter(params) {
    const [value, setValue] = useState(0)

    return (
        <>
            <h1 data-testid="counter_header" >
                Counter
            </h1>
            <h3 data-testid="counterValue">
                {value}
            </h3>
            <div style={{ display: "flex", gap: "1rem" }}>
                <Button label="ADD" onClick={() => setValue(value + 1)} />
                <Button label="REDUCE" onClick={() => setValue(value - 1)} />
            </div>
        </>
    )

}
