

export function List({ title, id, handleRemove, handleDone }) {

    const Remove = (id) => {
        handleRemove(id)
    }
    const Done = (id) => {
        handleDone(id)
    }
    return <>




        <div>
            <li id={id}>{title}</li>
            <button onClick={() => Remove(id)}>Remove</button>
            <button onClick={() => Done(id)}>Done</button>
        </div>




    </>
}