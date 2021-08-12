import { memo, useMemo } from "react"


const delay = (time) => {
    const start = Date.now();
    while (Date.now() - start < time) {
        continue;
    }
    return start
}


function TodoItem({ id, title, status, handleToggle, handleDelete }) {
    const m = useMemo(() => delay(200), [])
    //const s = delay(200)

    return <>
        <h3>{title}</h3>
        <div>{status ? "True" : "false"}</div>
        <div>{m}</div>
        <button onClick={() => handleToggle(id)}>Toggle</button>
        <button onClick={() => handleDelete(id)}>Delete</button>



    </>
}

function areEqual(prevProps, nextProps) {
    if (prevProps.status !== nextProps.status) {
        return false

    }
    return true

}

export const MemorisedTodoItmem = memo(TodoItem)