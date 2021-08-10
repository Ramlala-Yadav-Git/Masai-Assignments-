import { useTimeout } from "../Hooks/useTImeout"


export function Ready() {

    const [ready] = useTimeout(5000)


    return <>
        <div className="App">
            <h3 style={{ color: "green" }}>{
                ready && "Ready"
            }</h3>
            <h3 style={{ color: "red" }}>{
                !ready && "Not Ready"
            }</h3>
        </div>
    </>

}

