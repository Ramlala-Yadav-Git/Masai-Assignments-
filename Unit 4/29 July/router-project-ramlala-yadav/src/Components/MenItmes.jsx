import { useParams } from "react-router"
import axios from "axios";
import Styled from "styled-components";
import { useEffect, useState } from "react";
const MenItemsWrapper = Styled.div`
width:50%;
margin:auto;
margin-top:10px;
box-shadow:2px 2px 2px 2px #cfcaca34;
border-radius:20px;
padding-bottom:10px;

& img {
    width:100%;
    height:400px;
    border-radius:20px;
}

& span {
    font-weight:500;
}
`
const MenItemsDiv = Styled.div`
box-shadow:2px 2px 2px 2px #cfcaca34;
margin:2px;
margin-top:10px;
background:#cfcaca34;
padding:20px;
border-radius:20px;


`
export function MenItmes() {
    const param = useParams()

    const [data, setData] = useState("")
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(`http://localhost:3001/procucts/${param.id}`).then(({ data }) => {
            setData(data)
        })
    }


    return (
        <MenItemsWrapper>
            <div>
                <div>
                    <img width="300px" src={data.img} alt="" />
                </div>
                <MenItemsDiv>
                    <div>
                        <p>Product Name: <span>{data.name}</span> </p>
                        <p>Price: <span>{data.price}</span></p>
                        <p>Company: <span> {data.company}</span></p>
                        <p>Country: <span>{data.country}</span></p>
                    </div>
                </MenItemsDiv>

            </div>
        </MenItemsWrapper>
    )
}