import PropTypes from "prop-types"
import { forwardRef } from "react"
import styled from "styled-components"

const style = {
    width: "2rem",
    height: "1.25rem",
    padding: "0.25rem",
    margin: "0.25rem",
    outline: "none",
    outlineRadius: "10px",
    borderRadius: "10px",
    border: "1px solid green"

}
const Wrapper = styled.div`



background:${(props) => props.text.length === props.length ? "green" : "gray"} ;
text-align: center;
display: flex;
justify-content: center;
height: 100px;
&>input{
    color:${(props) => props.text.length === props.length ? "green" : "gray"};
    width: 50px;
    height: 50px;
    outline: none;
    padding: 5px;
    margin: 10px;
    border: 2px solid ${(props) => props.text.length === props.length ? "green" : "gray"} ;
    border-radius: 10px;
    font-weight: 500;
    font-size: 30px;
    text-align: center;
   
}
`

export const PinItem = forwardRef((props, ref) => {
    const handleKeyUp = (e) => {
        switch (e.code) {
            case "Backspace": {
                props.handleBackspace(e.target.value);
                break;
            }
            case "ShiftLeft":
            case "ArrowRight":
            case "ArrowLeft":
            case "ArrowUp":
            case "ArrowDown":
            case "Tab": {
                break;
            }
            default: {
                props.handleChange(e.target.value)
            }
        }
    }

    return <>

        <Wrapper text={props.text} length={props.length}>
            <input

                ref={ref}
                maxLength={props.maxLength}
                onKeyUp={handleKeyUp}
                onChange={(e) => props.handleChange(e.target.value)}

            />
        </Wrapper>



    </>
})
PinItem.propType = {
    maxLength: PropTypes.number,
    handleChange: PropTypes.func,
    handleBackspace: PropTypes.func
}

PinItem.defaultProps = {

    maxLength: 1

}