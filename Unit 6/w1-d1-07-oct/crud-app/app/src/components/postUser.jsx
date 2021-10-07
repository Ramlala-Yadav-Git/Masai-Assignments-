import Styled from "styled-components"


import { useState } from "react"

export const PostUser = ({ handlePost }) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    const [gender, setGender] = useState("")







    const handleSubmit = () => {
        const payload = {
            name,
            age,
            city,
            gender
        }
        handlePost(payload)

    }




    return <>
        <PageWrapper>
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

        </PageWrapper>
    </>
}
const PageWrapper = Styled.div`
display:flex;
flex-direction:column;
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