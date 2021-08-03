import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCount, redCount } from "../Store/action";
import styles from "../module/counter.module.css";

export function Counter() {
    const state = useSelector(state => state.count)
    const dispatch = useDispatch()
    const HandleAdd = () => {
        dispatch(addCount(0))
    }
    const HandleReduce = () => {
        dispatch(redCount(0))
    }

    return (
        <>
            <div className={styles.counter}>
                <h3>Counter</h3>
                <h1>{state}</h1>
                <button onClick={HandleAdd}>ADD</button>
                <button onClick={HandleReduce}>RED</button>
            </div>

        </>
    )
}

