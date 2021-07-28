import stlyes from "./user.module.css"


export function User({ pic, name, prog, level, point, add }) {

    return (
        <>
            <div className={stlyes.user}>
                <div className={stlyes.userInfo}>
                    <img src={pic} alt="userImage" />
                    <div >
                        <h4>{name}</h4>
                        <p>{add}</p>
                    </div>
                </div>
                <div className={stlyes.prog}>
                    <progress id="file" value={prog} max="100"></progress>

                </div>
                <div className={stlyes.points}>
                    <p>Professional Level {level}</p>
                    <h5>{point} Points</h5>
                </div>
            </div>
        </>
    )
}