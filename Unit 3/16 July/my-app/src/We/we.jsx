import styled from "styled-components"
const handle = () => {
    alert("hi")
}
const Wrapper = styled.div`
background-color:red;
border:1px solid black;

h1{
    background-color:green;
    border:8px solid black;
    padding:10px;
    margin:10px;
}
h1:hover{
    background-color:blue;
    text-align:center;
    color:white;
    font-size:35px;
    cursor:pointer;
   border-color: ${(props) => { return props.b === "blak" ? "blue" : "yellow" }};
}
h1:hover{

}
h1{
   color: ${(props) => { console.log(props); return props.theme === "bla" ? "red" : "yellow" }};
   border-color: ${(props) => { return props.b === "black" ? "blue" : "yellow" }};
   border-radius:70px;

}
`




export function Form({ children, toRender }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log();
    }


    return (
        <>
            <Wrapper theme="black" b="black">
                <h1 onClick={handle} >Hi</h1>
            </Wrapper>
            <form
                onSubmit={(e) => handleSubmit(e)}
                style={
                    {
                        border: "1px solid gray"
                    }
                }>
                <input type="number" />
                {children}
                {children}

                <input type="number" />
            </form>
        </>

    )
}