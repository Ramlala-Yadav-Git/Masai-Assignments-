import styles from "./BookProperty.module.css"
import { SubmissionForm } from './SubmissionForm';
import { Redirect, Link } from 'react-router-dom';


export const BookProperty = () => {




    return <>
        <Link to="/submitForm" className={styles.link}>
            <div className={styles.book} >

                <div>
                    <img src="https://picsum.photos/200/300" alt="pic" />

                </div>
                <div className={styles.midSection}>
                    <h2>Farm to stay in</h2>
                    <h3>Rusting Next</h3>
                    <div>
                        fake data
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <div>
                        <i class="fas fa-heart">hrjh</i>
                    </div>
                    <div>
                        des
                    </div>
                </div>

            </div>
        </Link>
    </>
}