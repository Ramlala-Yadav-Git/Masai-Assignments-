import Box from '@material-ui/core/Box';
import styles from "./BookProperty.module.css"

export const BookProperty = () => {




    return <>
        <div className={styles.book}>
            <div>
                <img src="https://picsum.photos/200/300" alt="pic" />

            </div>
            <div className={styles.midSection}>
                <h1>Farm stay in</h1>
                <h3>Rusting Next</h3>
                <div>
                    fake data
                </div>
            </div>
            <div className={styles.rightSection}>
                <div>
                    Heartfdsnfkjdsnfkj
                </div>
                <div>
                    des
                </div>
            </div>
        </div>

    </>
}