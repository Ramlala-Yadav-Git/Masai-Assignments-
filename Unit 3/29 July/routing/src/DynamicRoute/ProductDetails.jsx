import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
export function ProductDetails() {
    const params = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        getData(params.id)
    }, [])

    const getData = (id) => {
        try {
            axios.get(`http://localhost:3001/products/${id}`).then(({ data }) => {
                setProduct(data)
                console.log(data);
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    // console.log(product);
    return (
        <div>
            {
                product.name ? <>
                    <img width="200" src={product.pic} alt="pic" />
                    <h3>Name : {product.name}</h3>
                    <p> Price : {product.price}</p>

                </>

                    : "Product not found"
            }

        </div>
    )
}