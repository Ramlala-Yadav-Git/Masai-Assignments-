import axios from "axios"
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
const ItemWrapper = styled.div`
box-shadow:2px 2px 2px 2px #cfcaca34;
padding: 20px;
border-radius: 20px;
margin: auto;
margin-top: 10px;
margin-bottom: 250px;



& > div > ul {
    list-style: none;
    display: flex;
    justify-content: center;
}
& > div > ul li{
    margin: 10px;
    margin-right: 20px;
  
}
 & div h4{
text-align: center;
font-size: 30px;
color: #353434e4;

}
 & div img{
     border-radius: 50%;
     font-weight: bold;
     font-size: 10px;
 }

`
const LinkWrapper = styled.div`
span{
    font-size: 30px;
    margin-left: 70px;
    margin-top: 10px;
}
`

export function Men() {
    const [data, setData] = useState([])
    const params = useParams();
    useEffect(() => {

        getData()
    }, [])
    const getData = () => {
        axios.get("http://localhost:3001/procucts").then(({ data }) => {
            setData(data)

        })
    }


    return (
        <ItemWrapper>
            <div>
                <h4>Available Items...</h4>
                <ul>

                    {
                        data.map((e, i) => {
                            return <li key={i}>
                                <img height="200px" width="200px" src={e.img} alt="img" />
                                <LinkWrapper>
                                    <Link to={`/men/${e.id}`}>

                                        <span>{e.name}</span>
                                    </Link>
                                </LinkWrapper>
                            </li>
                        })
                    }
                </ul>
            </div>
        </ItemWrapper>
    )
}