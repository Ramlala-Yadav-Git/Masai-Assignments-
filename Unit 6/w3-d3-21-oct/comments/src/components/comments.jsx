import styles from "./comments.module.css"
import Styled from "styled-components"

export const Comments = ({ author, replies, body, timestamp, points }) => {
    const hasChildren = replies && replies.length
    // console.log(replies)

    return (
        <CommentWrapper>
            <div className={styles.comment}>
                <div className={styles.author}>
                    <p>

                        {author}
                    </p>
                    <p>

                        {points} points
                    </p>
                    <p>

                        {timestamp.slice(19, 21)} minutes ago
                    </p>
                </div>
                <div className={styles.body}>
                    <h4>
                        {body}
                    </h4>
                </div>
                <div>
                    <ul>
                        <li>Reply</li>
                        <li>Give</li>
                        <li>Award</li>
                        <li>Share</li>
                        <li>Report</li>
                        <li>Save</li>
                    </ul>
                </div>

            </div>
            {hasChildren && replies.map((item, i) => (
                <Comments key={i} {...item} />
            ))}
        </CommentWrapper>
    )
}

const CommentWrapper = Styled.div`
margin-left:20px;
`