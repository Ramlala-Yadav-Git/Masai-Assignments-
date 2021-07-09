import styles from "./RestorantDetails.module.css";
import { v4 as uuid } from "uuid"


export function RestorantDetails({ data }) {

    // console.log(data);
    // return data;



    if (data.length === 0) {
        return <p className={styles.parent}>No Matching Restorant ...</p>;
    }
    else {

        return (



            data.map((el) => {
                return (<div className={styles.parent} key={uuid()}>
                    <div className={styles.container}>
                        <div className={styles.img}>
                            <img src={el.image} alt="notfound" />
                        </div>
                        <div className={styles.middle}>
                            <h1>{el.title}</h1>
                            <p className={styles.type}>{el.type1} </p>
                            <p className={styles.cost}>Cost ₹{el.cost} for one</p>
                            <p className={styles.min}>Min ₹{el.minimum}<li>Up to {el.time} min</li></p>
                            <p>Accept Card :{el.card}   Cash: {el.cash}</p>
                        </div>
                        <div className={styles.right}>
                            <p className={styles.rating}><span>{el.rating}</span></p>
                            <p className={styles.votes}>{el.votes} votes</p>
                            <p className={styles.reviews}>{el.reviews} reviews</p>
                        </div>
                    </div>
                    <div className={styles.order}>
                        <button>Order Online </button>
                    </div>
                </div>

                )

            }
            )


        )

    }
}
// const { image, title, type1, type2, type3, type4, cost, minimum, time, paymentMethod, rating, votes, reviews } = formData;
