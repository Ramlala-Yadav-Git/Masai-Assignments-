import { useEffect, useState } from "react";

export function Clock() {


    const [clock, setClock] = useState([0, 0, 0])
    const [show, setShow] = useState(false)



    const showClock = (a) => {
        if (a === true) {
            setInterval(() => {
                var date = new Date();
                var h = date.getHours();
                var m = date.getMinutes();
                var s = date.getSeconds();
                setClock([h, m, s])
            })
        }
        else {
            clearInterval(showClock)
            setClock([0, 0, 0])
            console.log(a);
        }



    }








    const handleShow = () => {

        setClock([0, 0, 0])
        showClock(false)
        clearInterval(showClock)
        setShow(!show)



    }


    return (
        <div>
            {show ? <div><h1>{clock[0]} :{clock[1]}: {clock[2]}</h1>
                <button onClick={() => showClock(true)}>Start</button>
                <button onClick={handleShow}>Hide</button></div> :
                <div>
                    <button onClick={handleShow}>Show</button></div>
            }
        </div>
    )

}