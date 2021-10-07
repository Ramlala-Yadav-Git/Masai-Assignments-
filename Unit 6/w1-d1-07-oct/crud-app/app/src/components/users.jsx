

import axios from "axios";
import { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import Styled from "styled-components"


export const User = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    const [gender, setGender] = useState("")
    const history = useHistory()

    const params = useParams()
    const id = params.id
    console.log(id)

    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        axios.get(`http://localhost:2345/users/${id}`).then((res) => {
            console.log(res.data.user)
            const user = res.data.user
            setName(user.name)
            setAge(user.age)
            setCity(user.city)
            setGender(user.gender)
        })

    }

    const handleSubmit = () => {
        const payload = {
            name,
            age,
            city,
            gender
        }
        axios.patch(`http://localhost:2345/users/${id}`, payload).then((res) => {
            if (res.data) {
                alert("data updated succefully")
            }
            else {
                alert("something went wrong")
            }
        })
    }

    const handleBack = () => {
        history.goBack()
    }


    return <>
        <PageWrapper>
            <h4>Update your data here..</h4>
            <div>

                <input type="text" name="name" placeholder="input your name" onChange={(e) => setName(e.target.value)} value={name} />
            </div>

            <div>

                <input type="number" name="age" placeholder="input your age" onChange={(e) => setAge(e.target.value)} value={age} />
            </div>

            <div>

                <input type="text" name="city" placeholder="input your city" onChange={(e) => setCity(e.target.value)} value={city} />
            </div>

            <div>

                <select onChange={(e) => setGender(e.target.value)} value={gender} >
                    <option value="all">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>

                </select>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleBack}>Back</button>
        </PageWrapper>
    </>
}
const PageWrapper = Styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border:1px solid blue;
width:300px;
margin:auto;
border-radius:5px;
padding:10px;
gap:10px;
& > button{
    border:1px solid gray;
    width:100px;
    margin:auto;
    color:blue;
    border-radius:5px;
    cursor:pointer;
}


`