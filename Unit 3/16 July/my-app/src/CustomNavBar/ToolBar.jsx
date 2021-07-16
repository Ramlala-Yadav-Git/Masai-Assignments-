import styled from "styled-components"
import { CustomNavBar } from "./CustomNavBar"
import { SiteName } from "./SiteName"


export function ToolBar() {
    const Tool = styled.div`
     border:1px solid black;
    display:flex;
      justify-content:space-between;
      background-color:rgb(63,81,181);
    & > div {
      display:flex;
      flex-direction:row;
      color:white;
      font-weight:bold;
      font-size:22px;
     
    }
    & > div >p{
        margin-right:10px;
        cursor:pointer;
    }
     & > div:nth-child(1) p{
         background-color:rgb(55,71,159);
         padding:3px;
         margin-left:10px;

     }
    `

    return (
        <>
            <Tool >
                <div>
                    <SiteName siteName="Masai" />
                </div>
                <div>
                    <CustomNavBar label={"About Us"} />
                    <CustomNavBar label={"Prices"} />
                    <CustomNavBar label={"Start Page"} />
                    <CustomNavBar label={"Offer"} />
                    <CustomNavBar label={"Contact"} />
                </div>
            </Tool >

        </>
    )
}