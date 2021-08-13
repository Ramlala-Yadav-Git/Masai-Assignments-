import PropTypes, { element } from "prop-types"
import { useEffect, useRef } from "react"
import { PinItem } from "../PinItem/PinItem";
import styled from "styled-components"


export function Pin(props) {
    const { length, perBox, onChange, label, isValid, text } = props;
    const elements = useRef(new Array(length).fill(""));
    const values = useRef(new Array(length).fill(""));

    useEffect(() => {
        if (elements?.current && elements.current.length !== 0) {
            elements.current[0].focus()
        }
    }, [])
    const handleChange = (value, index) => {
        values.current[index] = value;
        if (value.length === perBox && index < length - 1) {
            elements.current[index + 1].focus()
        }
        onChange(values.current.join(""))

    }
    const handleRefCallback = (element, index) => {
        elements.current[index] = element
    }
    const handleBackspace = (value, index) => {
        values.current[index] = value;
        if (value.length === 0 && index > 0) {
            elements.current[index - 1].focus()
        }
        onChange(values.current.join(""))

        //  onChange(val.join(""))
    }
    const handlePaste = (e) => {
        e.preventDefault()
        values.current = values.current.map((a, i) => {
            elements.current[i].value = "";
            return "";
        })
        const val = e.clipboardData.getData("text").split("").filter((a, i) => i < length * perBox)
        val.forEach((value, i) => {
            values.current[i] = value;
            elements.current[i].value = value;
            if (i < length - 1) {
                elements.current[i + 1].focus()
            }
        })
    }
    return <>
        <div onPaste={handlePaste} style={{ display: "flex", margin: "auto", width: "340px", borderRadius: "10px", justifyContent: "center" }}>
            {
                values.current.map((item, index) => {
                    return <PinItem ref={(n) => handleRefCallback(n, index)}
                        maxLength={perBox}
                        key={index}
                        handleChange={(value) => handleChange(value, index)}
                        handleBackspace={(value) => handleBackspace(value, index)}
                        text={text}
                        length={length}
                    />

                })
            }
        </div>
    </>
}

Pin.propTypes = {
    length: PropTypes.number.isRequired,
    perBox: PropTypes.number,
    onChange: PropTypes.func,
    label: PropTypes.string,
    isValid: PropTypes.bool
}
Pin.defaultProps = {
    perBox: 1,
    label: null,
    isValid: null
}