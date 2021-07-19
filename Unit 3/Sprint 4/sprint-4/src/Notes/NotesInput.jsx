import react from "react"
import styled from "styled-components";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { Show } from "./show"

const Main = styled.div`
padding: 10px;
background-color: #f3f3f3;
`
const Form = styled.div`
padding: 10px;
& * {
    display: block;
}
& > div{
    margin: auto;
    width: 40%;
    background-color: #e9f5d8;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #a6a7a694;
 
}
& > div input {
margin: auto;
width: 80%;
padding: 10px;
border-radius: 10px;
outline: none;
border: 1px solid gray;
font-size: 17px;
}
& > div textarea{
  margin: auto;
  margin-top: 10px;
  width: 80%;
  height: 100px;
  padding: 10px;
  border-radius: 10px;
  font-size: 17px;
  outline: none;
}
& > div button{
   margin: auto;
width: 40%;
padding: 10px;
 margin-top: 10px;
 cursor: pointer;
 border-radius: 10px;
 border: 1px solid gray;
 background-color: #d1cfcf;
 font-weight: bold;
 color: green;
 font-size: 17px;;
}
& > div button:hover{
     background-color:#8df18d55 ;
}
`
const Sort = styled.div`
border: 1px solid #a6a7a694;
   margin: auto;
    width: 40%;
    background-color: #e9f5d8;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
& button{
margin-left:10px;
width: 40%;
padding: 10px;
 margin-top: 10px;
 cursor: pointer;
 border-radius: 10px;
 border: 1px solid gray;
 background-color: #d1cfcf;
 font-weight: bold;
 color: #0d0080;
}
& button:hover{
     background-color: #5443e958;
}
`
const Notes = styled.div`
border: 1px solid #a6a7a694;
   margin: auto;
    width: 95%;
    background-color: #d3fc9b;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    margin-top: 10px;
   &>div >div{
        border: 1px solid #b1aeaeaf;
        background-color: #e9e5e57b;
        margin:10px;
        border-radius: 10px;
        position: relative;
    }
    &>div >div button{
      margin-left:10px;
padding: 10px;
 margin: 10px;
 cursor: pointer;
 border-radius: 10px;
 border: 1px solid#cc020258;
 background-color: #d1cfcf;
 font-weight: bold;
 color: #cc0202;
    }
    &>div >div button:hover{
        background-color: #cc020258;
    }
    & > div > div > :nth-child(3){
        position: absolute;
        right: 10px;
        top: 5px;;
    }
   
    & > div > div > :nth-child(1){
       text-transform: uppercase;
       font-size: 20px;
    }
    & > div > div > :nth-child(2){
       text-transform: capitalize;
       font-size: 14px;
      
    }
   
    
    
`
const Message = styled.div`
   margin: auto;
    width: 40%;
    background-color: #e9f5d8;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #a6a7a694;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    font-family: cursive;
`
const Your = styled.div`
   margin: auto;
    width: 95%;
    background-color: #d1ff90;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #a6a7a694;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    font-family: cursive;
    margin-top: 10px;
`


export function NotesInput() {

    const [input, setinput] = useState({});
    const [send, setSend] = useState([])

    const HandleChange = (e) => {
        let payLoad = {
            ...input,
            [e.target.name]: e.target.value,
            "date": new Date().toLocaleDateString(),
            "time": new Date().toLocaleTimeString()

        }
        setinput(payLoad)

    }
    useEffect(() => {
        GetData()

    }, [])

    const SendData = (data) => {
        console.log(data);
        axios.post("http://localhost:3004/posts/", data);
    }

    const GetData = () => {
        axios.get("http://localhost:3004/posts").then(({ data }) => {
            setSend([...data])
        })
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        SendData(input)
        GetData();
        // console.log(input);

    }
    const HandleRemove = (id) => {
        axios.delete("http://localhost:3004/posts/" + id)
        GetData()
    }
    const HandleSort = () => {
        const s = send.sort((a, b) => {
            console.log(b.time.slice(3, 5));
            if (a.time.slice(0, 2) === b.time.slice(0, 2)) {
                return (a.time.slice(3, 5) - b.time.slice(3, 5))
            }
            else {
                return (a.time.slice(0, 2) - b.time.slice(0, 2))
            }

        })
        setSend([...s])

    }
    const HandleSortDate = () => {
        const s = send.sort((a, b) => {
            if (Number(a.date.slice(6, 10)) === Number(b.date.slice(6, 10)) && Number(a.date.slice(3, 5)) === Number(b.date.slice(3, 5))) {
                return (a.date.slice(0, 2) - b.date.slice(0, 2))
            }
            else if (Number(a.date.slice(3, 5)) !== Number(b.date.slice(3, 5))) {
                return (a.date.slice(3, 5) - b.date.slice(3, 5))
            }
            else {
                return (a.date.slice(6, 10)) - (b.date.slice(6, 10));
            }
        })
        setSend([...s])

    }

    return (
        <Main>
            <div>
                <Message>
                    <div>Add Your Notes...</div>
                </Message>
                <Form>
                    <div>
                        <form onSubmit={(e) => { HandleSubmit(e) }} >
                            <input placeholder="Add Title.." type="text" name="title" onChange={(e) => { HandleChange(e) }} />
                            <textarea placeholder="Write Notes Here.." name="note" onChange={(e) => { HandleChange(e) }} ></textarea>
                            <button>Save</button>
                        </form>
                    </div>
                </Form>
                <Sort>
                    <div>
                        <button onClick={() => HandleSort()}>Short AC to Time</button>
                        <button onClick={() => HandleSortDate()}>Short AC to Date </button>
                    </div>
                </Sort>
                <Your>
                    <div>Your Notes...</div>
                </Your>
                <Notes>
                    <div>
                        {
                            send.map((e) => {
                                return <Show key={e.id} date={e.date} time={e.time} title={e.title} note={e.note} id={e.id} HandleRemove={HandleRemove} />
                            })
                        }
                    </div>
                </Notes>
            </div>
        </Main>
    )
}