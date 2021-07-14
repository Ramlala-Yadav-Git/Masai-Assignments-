import { v4 as uuid } from "uuid"
import styles from "./BlogPost.module.css";

export function ShowData({ data }) {

    // console.log(data);
    return (
        data.map((e) => {
            return (
                <div key={uuid} className={styles.blog}>

                    <h1>Title :{e.title}</h1>
                    <h2> Author : {e.author}</h2>
                    <p>IsPrivate :{`${e.isPrivate}`}</p>
                    <p>Category : {e.category}</p>
                    <p> File Path: {e.file}</p>
                    <p> Blog :{e.body}</p>
                </div>
            )
        })


    )
}