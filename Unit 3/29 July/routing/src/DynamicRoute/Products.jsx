import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"

export function Products() {

    const [product, setProduct] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = (id) => {
        try {
            axios.get(`http://localhost:3001/products/`).then(({ data }) => {
                setProduct(data)
                console.log(data);
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div>
                <h3>List of Products</h3>
            </div>
            <div >
                {
                    product.map((e, i) => {
                        return (
                            <li key={i} style={{ padding: 10, fontWeight: "bold" }}>
                                <Link to={`/products/${e.id}`}>{e.name}</Link>
                            </li>
                        )
                    })
                }
            </div>
        </>
    )
}