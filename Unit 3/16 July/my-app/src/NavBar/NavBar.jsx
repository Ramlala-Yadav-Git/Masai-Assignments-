import styled from "styled-components"

export function NavBar({ children }) {
    const Nav = styled.div`
    display:flex;
    border:1px solid black;
    justify-content:space-between;
    background-color:black;

    & img{
        width:50px;
        border:2px solid gray;
        border-radius:50%;
       @media all and (max-width:700px){
         display:none;
  }
       
    }
    & div{
        display:flex;
       cursor:pointer;
       

    }
      & div p{

          margin-right:10px;
          font-weight:bold;
          curser:pointer;
          color:white;
          font-size:20px;
           margin:10px;
            @media all and (max-width:700px){
             font-size:12px

        }
           
      }
     
    `

    return (
        <Nav>
            <img src="https://d27028dliefpk3.cloudfront.net/static/favicon/favicon.ico" alt="not-found" />
            <div>
                {children}
            </div>

        </Nav>


    )
}