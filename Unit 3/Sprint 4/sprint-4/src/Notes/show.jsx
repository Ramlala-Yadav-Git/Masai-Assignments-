
export function Show({ title, note, id, HandleRemove, date, time }) {


    return (
        <div>
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <p>{note}</p>
            </div>
            <div>
                <p>{date}</p>
                <p>{time.slice(0, 5)}</p>
            </div>
            <div>
                <button onClick={() => { HandleRemove(id) }}>Delete</button>
            </div>
        </div>
    )


}