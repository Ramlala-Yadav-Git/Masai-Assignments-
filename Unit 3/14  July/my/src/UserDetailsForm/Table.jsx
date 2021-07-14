



export function Table({ name, age, department, isMarried, salary, address, file, id, HandleRemove }) {


    return (
        <div>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>Department : {department}</p>
            <p>Marital Status : {`${isMarried}`}</p>
            <p>Salary :{salary}</p>
            <p>Address : {address}</p>
            <p> Image :{file}</p>
            <button onClick={() => HandleRemove()}>Delete</button>

        </div>
    )
}
