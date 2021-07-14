import { useState } from "react";
import { v4 as uuid } from "uuid";

import styles from "./BlogPost.module.css";

import { ShowData } from "./ShowData";

export function BlogPost() {

    const fakeData = {
        title: "",
        author: "",
        category: "",
        file: "",
        body: "",
    }
    const [formData, setFormData] = useState(fakeData)
    const [showData, setShowData] = useState([])
    const [toggle, setToggle] = useState(false)
    const [renderData, setRenderData] = useState(showData)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowData([...showData, formData])
        setRenderData([...showData, formData])
        setFormData(fakeData)


    }

    const handlePrivate = () => {
        var data = showData.filter((e) => {
            return e.isPrivate === toggle;
        })
        setRenderData(data)
        setToggle(!toggle)

    }
    const handleAllBlogs = () => {
        setRenderData(showData)
    }


    return (
        <div className={styles.mainDiv}>
            <h1>Create Your BlogPost Here...</h1>
            <div className={styles.form}>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        Title :<input onChange={(e) => handleChange(e)} type="text" name="title" placeholde="Title..." value={formData.title} />
                    </div>
                    <div>
                        Author: <input onChange={(e) => handleChange(e)} type="text" name="author" value={formData.author} />

                    </div>
                    <div>
                        isPrivate : <input onChange={(e) => handleChange(e)} type="checkbox" name="isPrivate" />

                    </div>
                    <div>
                        Category : <select onChange={(e) => handleChange(e)} name="category" value={formData.category} >
                            <option value="technology">Technology</option>
                            <option value="nature">Nature</option>
                        </select>
                    </div>
                    <div>
                        File : <input onChange={(e) => handleChange(e)} type="file" name="file" value={formData.file} />

                    </div>
                    <div>
                        Text-Area: <textarea onChange={(e) => handleChange(e)} type="text-area" name="body" value={formData.body} />

                    </div>
                    <input type="submit" />

                </form>

            </div>
            <div className={styles.buttons}>
                <button onClick={() => handleAllBlogs()}>All Blogs</button>

                {
                    toggle ? <button onClick={() => handlePrivate()}>Show-Private</button> :
                        <button onClick={() => handlePrivate()}>Show-non-Private</button>

                }
            </div>

            <ShowData key={uuid()} data={renderData} />
        </div>
    )



}