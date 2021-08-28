import React from "react"
import styled from "styled-components"
import { useThrottle } from "use-throttle"

const SearchBarWrapper = styled.div`
    border:1px solid green;
    border-radius:10px;
    padding: 10px;
    display: flex;
    align-items: center;
    position: relative;
    width: 500px;
    height: 50px;
`
const IconImage = styled.img`
height:20px;
padding-right: 20px;
`
const Input = styled.input`
border:none;
outline: none;
flex:1;
`
const RightSide = styled.div`
display: flex;
flex: 0 0 auto;
padding-right: 10px;
`
const Spinner = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  animation: spin 2s linear infinite;
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`
const SuggestionBox = styled.div`
display: ${({ len }) => (len === 0 ? "none" : "flex")};
flex-direction: column;
flex:0 0 auto;
max-height: 150px;
overflow: auto;
border: 1px solid black;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
width: 500px;
& *{
    flex: 1;
    padding: 5px;
    text-align: left;
    padding-left: 30px;
}
&>div:nth-child(${({ active }) => active}){
    background: gray;
    color:white;
    font-weight: bold;
}
&>div{
       height: 30px;
}
`

export function Searchbar({ setLoading, loading, suggestions, onChange }) {
    const [q, setQ] = React.useState("");
    const [active, setActive] = React.useState(0);
    const scrollRef = React.useRef();
    const throttleText = useThrottle(q, 1000);
    React.useEffect(() => {
        onChange(throttleText);
    }, [throttleText, onChange])
    const handleInputChange = (e) => {
        setQ(e.target.value);
        onChange(e.target.value);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }
    const handleClear = () => {
        setQ("");
        onChange("")
        setLoading(false);
    }
    const handleChangeActiveSuggestions = (e) => {

        switch (e.keyCode) {
            case 38: {
                if (active > 4) {
                    scrollRef.current.scrollTop -= 30;
                }
                if (active === 1) {
                    setActive(0);
                } else if (active <= 0) {
                    setActive(suggestions.length);
                } else {
                    setActive((prev) => prev - 1);
                }

                break;
            }
            case 40: {
                if (active >= suggestions.length) {
                    setActive(0);
                }
                else {
                    setActive((prev) => prev + 1);
                }
                if (active > 4) {
                    scrollRef.current.scrollTop += 30;
                }
                break;
            }
            case 13: {
                alert(suggestions[active - 1])
                break;
            }
            default: {
                return;
            }

        }
    }
    return <>
        <SearchBarWrapper onKeyUp={handleChangeActiveSuggestions}>
            <IconImage src="https://image.flaticon.com/icons/png/512/49/49116.png" alt="icon" />
            <Input onChange={handleInputChange} value={q} />
            <RightSide>
                {q && <div onClick={handleClear}><h4>X</h4></div>}
                {loading && <Spinner />}
            </RightSide>

        </SearchBarWrapper>
        {!loading && (<SuggestionBox ref={scrollRef} active={active} limit={5} len={suggestions.length}>
            {suggestions.map((item, index) => (
                <div onMouseOver={() => setActive(index + 1)}>{item}</div>
            ))}
        </SuggestionBox>
        )}
    </>
}