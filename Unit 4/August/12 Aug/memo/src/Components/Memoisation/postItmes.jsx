import { memo, useMemo } from "react"
import styles from "./post.module.css"

//let color = rgb(127, 65, 193);

const delay = (time) => {
    const r = Math.floor(Math.random() * 500)
    const start = Date.now();
    while (Date.now() - start < time) {
        continue;
    }
    return `rgb(${Math.floor(Math.random() * r)},${Math.floor(Math.random() * r)},${Math.floor(Math.random() * r)})`
}


function PostItems({ id, title, verify, handleToggle, handleDelete, body }) {
    const m = useMemo(() => delay(200), [])
    //const s = delay(200)

    return <>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{body}</p>
        <div style={{ background: `${m}` }} className={styles.box}></div>
        <button className={styles.verify} onClick={() => handleToggle(id)}>{verify ? "Verified" : "Verify"}</button>
        <button className={styles.delete} onClick={() => handleDelete(id)}>Delete</button>



    </>
}

function areEqual(prevProps, nextProps) {
    if (prevProps.status !== nextProps.status) {
        return false

    }
    return true

}

export const MemorisedTodoItmem = memo(PostItems)