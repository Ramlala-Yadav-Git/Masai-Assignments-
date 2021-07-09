export function TodosItem({ items, ToggleTodos }) {
    return <div >
        <h3>{items.title}</h3>
        <p>Status : {`${items.status}`}</p>
    </div>
}