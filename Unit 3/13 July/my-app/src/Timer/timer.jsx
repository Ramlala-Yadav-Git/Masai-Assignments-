import React from "react"
export function TimerMain({ initial, final }) {
    const [counter, setCounter] = React.useState(initial);



    React.useEffect(() => {
        console.log("mounting");
        const clearValue = setInterval(() => {
            setCounter((preValue) => {
                console.log("updating");
                if (preValue === final) {
                    clearInterval(clearValue)
                    return final;
                }
                return preValue + 1;
            });
        }, 1000);
        return () => {
            console.log("cleaning")
            clearInterval(clearValue);
        }
    }, [])

    return (
        <div className="App">
            <h3>Time: {counter}</h3>

        </div>
    );
}