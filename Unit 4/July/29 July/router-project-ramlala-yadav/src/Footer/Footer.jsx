import styles from "../Footer/Footer.module.css"
export function Footer(params) {


    return (
        <div className={styles.footer}>
            <ul>
                <li>Contact Us</li>
                <li> About Us</li>
                <li>Online Shopping</li>
            </ul>
        </div>
    )
}