import { Card } from "./Card"
import { useState } from "react"

import styled from "styled-components"

const Style = styled.div`
padding: 10px;

margin-left: 200px;



& > div{
    display: flex;
    justify-content: space-around;
    width: 80%;    
}
& > div img{
    width: 100px;
}
& > div>:nth-child(1){
    font-family: cursive;
    background-color: #ff1c1cec;
    padding: 10px;
    color: white;
    width: 300px;
    border-radius: 10px;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 2px 2px 2px 2px red;
}
& > div>:nth-child(1)>div{
  padding: 1px;
}
& > div>:nth-child(1)>div>div{
    margin: 10px;
}
& > div>:nth-child(1)>div>:nth-child(3){
display: flex;

}
& > div>:nth-child(1)>div>:nth-child(3) div{
    font-size: 15px;
    margin: 10px;
}
& > div>:nth-child(1)>div>:nth-child(3) div >h2{
    font-size: 15px;
}
& form {
    width:500px;
    padding: 10px;
}
& form >div{
    margin: 10px;
    width: 100%;
}
& form >div label{
    display: block;
    margin-top: 5px;
    text-transform: uppercase;
    font-size: 12px;  
}
& form >div input{
border: none;
border-bottom: 1px solid red;
outline: none;
}
input[type="submit"]{
    background-color: red;
    text-align: center;
    width: 100px;
    margin-left: 50px;
    border: none;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    color: white;
    font-size: 15px;
    cursor: pointer;
}
span{
    color: #e70404;
    font-weight: bold;
    font-size: 17px;
}


`


export function Input() {

    const init = {
        "user": "",
        "number": "",
        "expiryMonth": "",
        "expiryYear": "",
        "cvv": ""
    }
    const [input, setInput] = useState(init)

    const [showData, setShowData] = useState(init)

    const HandleChange = (e) => {
        let name = e.target.name;
        let payLoad = {
            ...input,
            [name]: e.target.value,

        }
        setInput(payLoad)
        // console.log(input);
    }

    const HandleSubmit = (e) => {
        e.preventDefault()

        alert("Payment has been done")

        setInput(init)
    }

    return (
        <div>
            <Style>
                <div>
                    <div>
                        <Card user={input.user} number={input.number} month={input.expiryMonth} year={input.expiryYear} cvv={input.cvv} />
                    </div>
                    <div>
                        <form >
                            <div>
                                <label> Cardholder name</label>
                                <input type="text" name="user" onChange={(e) => { HandleChange(e) }} value={input.user} />
                            </div>
                            <div>
                                <label >Card Number</label>
                                <input type="number" name="number" onChange={(e) => { HandleChange(e) }} value={input.number} />
                            </div>
                            <div>
                                <div>
                                    <label >Expiry Month</label>
                                    <input type="number" name="expiryMonth" onChange={(e) => { HandleChange(e) }} value={input.expiryMonth} />
                                </div>
                                <div>
                                    <label >Expiry Number</label>
                                    <input type="number" name="expiryYear" onChange={(e) => { HandleChange(e) }} value={input.expiryYear} />
                                </div>
                                <div>
                                    <label >CVV</label>
                                    <input type="password" name="cvv" onChange={(e) => { HandleChange(e) }} value={input.cvv} />
                                </div>

                            </div>
                            <div>
                                <p>Payment amount: <span>12 300₽</span>  </p>
                            </div>
                            <input type="submit" value="PAY" onClick={(e) => { HandleSubmit(e) }} />
                        </form>
                    </div>
                </div>
            </Style>
        </div>
    )
}