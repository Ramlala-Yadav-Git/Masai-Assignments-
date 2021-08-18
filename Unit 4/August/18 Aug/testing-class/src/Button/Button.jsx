
import styles from "./Button.module.css"

export function Button({ label, onClick }) {


    return (<>

        <div data-testid="button" onClick={onClick} className={styles.Button}>
            {label}
        </div>
    </>)
}