import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid"
import axios from "axios"
import { Table } from "./Table";
import styles from "./UserData.module.css"
export function UserInput() {


    const [formData, setFormData] = useState({})

    const [showData, setShowData] = useState([])

    const [renderData, setRenderData] = useState([])

    const Ref = useRef()

    useEffect(() => {
        getData()
    }, [])


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value })
    }


    const getData = () => {
        axios.get("http://localhost:3004/formData").then(({ data }) => {
            setShowData(data)
            setRenderData(data)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3004/formData", formData)
        // console.log(formData);
        getData()

    }
    const HandleRemove = (id) => {

        axios.delete("http://localhost:3004/formData/" + id)
        getData()
    }
    const handleShowAll = () => {
        setRenderData(showData)
    }
    const handleDepartment = (e) => {
        let v = e.target.value;

        const d = showData.filter((a) => {
            return a.department === v;
        })
        setRenderData([...d])


    }
    const handleAscending = () => {
        const as = showData.sort((a, b) => {
            return Number(a.salary) - Number(b.salary);
        })

        setRenderData([...as]);
        //  console.log(renderData);

    }
    const handleDescending = () => {
        const ds = showData.sort((a, b) => {
            return Number(b.salary) - Number(a.salary);
        })

        setRenderData([...ds])
        // console.log(renderData);
    }

    return (
        <div>
            <div className={styles.form}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input onChange={(e) => { handleChange(e) }} type="text" name="name" placeholder="Name..." />
                    </div>
                    <div>
                        <input onChange={(e) => { handleChange(e) }} type="number" name="age" placeholder="Age..." />
                    </div>
                    <div>
                        <input onChange={(e) => { handleChange(e) }} type="text" name="address" placeholder="Address..." />
                    </div>

                    <div>
                        <input onChange={(e) => { handleChange(e) }} type="number" name="salary" placeholder="Salary..." />
                    </div>

                    <div>
                        <select name="department" onChange={(e) => { handleChange(e) }} placeholder="Select...">
                            <option value="null">Select Department</option>
                            <option value="Mechanical">Mechanical</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Information Technology">IT</option>
                            <option value="Electronics">Electronics</option>
                        </select>
                    </div>
                    <div className={styles.status}>
                        <label>Marital Status</label>
                        <input onChange={(e) => { handleChange(e) }} type="checkbox" name="isMarried" />
                    </div>
                    <div>

                        <input onChange={(e) => { handleChange(e) }} type="file" name="name" />
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className={styles.data}>
                <div className={styles.filter}>
                    <p> Filter Data</p>
                    <button onClick={() => handleShowAll()}>Show All</button>
                    <p>Fiter By Department</p>
                    <select onChange={(e) => handleDepartment(e)} >
                        <option value="null">Select</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Information Technology">IT</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                </div>
                <div className={styles.sort}>
                    <p>Sort By Salary</p>
                    <button onClick={() => handleAscending()}>Ascending</button>
                    <button onClick={() => handleDescending()}>Descending </button>
                </div>

            </div>


            <div className={styles.table}>
                {
                    renderData.map((e) => {
                        return <div key={uuid()}>
                            < Table name={e.name} HandleRemove={() => HandleRemove(e.id)} age={e.age} id={e.id} department={e.department} isMarried={e.isMarried} salary={e.salary} address={e.address} file={e.file} />
                        </div>
                    })
                }
            </div>
        </div>
    )


}