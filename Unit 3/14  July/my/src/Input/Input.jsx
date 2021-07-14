import { useRef } from "react"


export function Input() {
    const refer = useRef();




    const handleClick = () => {
        let curr = refer.current
        curr.focus()


    }

    return (
        <div>
            <input ref={refer} type="text" name="input" />
            <button onClick={() => handleClick()}>Submit</button>
        </div>
    )
}