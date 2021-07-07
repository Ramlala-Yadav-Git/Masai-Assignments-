
import styles from "./DeginerCard.module.css"

function Deginer({ img, name, city, description }) {

    return (
        <>
            <div>
                <div className={styles.pro}><p>PRO</p></div>
                <div className={styles.imgDiv}><img src={img} alt="no_image" /></div>
                <div className={styles.information}>
                    <h2>{name}</h2>
                    <h3>{city}</h3>
                    <p>{description}</p>
                </div>
                <div className={styles.buttons}>
                    <button>Message</button>
                    <button>Following</button>
                </div>
            </div>

        </>)
}

function Skills({ data }) {
    // console.log(data)
    return (
        <div className={styles.skills}><p>SKILLS</p>
            <ul>
                {
                    data.map((el) => {
                        return <li>{el}</li>
                    })
                }
            </ul>
        </div>)

}
export { Deginer, Skills }