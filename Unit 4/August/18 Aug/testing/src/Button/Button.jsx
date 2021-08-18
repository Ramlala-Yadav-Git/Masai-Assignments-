
import styles from "./Button.module.css"

export function Button({
    label,
    onClick
}) {


    return (<>

        <div data-testId="button" onClick={onClick} className={styles.Button}>
            {label}
        </div>
    </>)
}