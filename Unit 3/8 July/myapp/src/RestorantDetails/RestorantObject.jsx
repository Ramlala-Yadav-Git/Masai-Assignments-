import { useState } from "react"
import { RestorantDetails } from "./RestorantDetails";
import styles from "./RestorantObject.module.css"
import data from "./data.json"
export function RestorantObject() {
    // const handleSubmit = (e) => {
    //     e.preventDefault()

    // }
    const [formData, setData] = useState({ image: "", title: "", type1: "", cost: "", minimum: "", time: "", card: "", cash: "", rating: "", votes: "", reviews: "" });

    const handleData = (e) => {
        //console.log(e.target.value);
        const obj = {
            ...formData,
            [e.target.name]: e.target.value,
        }
        setData(obj)

    };
    // console.log(formData);
    const [DataUse, setDataUse] = useState(data.data)

    const exportData = () => {
        setDataUse([formData, ...DataUse])
        setRenderData([formData, ...DataUse])

    }


    var [renderData, setRenderData] = useState(DataUse)
    const handle1 = () => {
        let HandleB1 = DataUse.filter((el) => {
            return ((Number(el.rating) > 1));
        })
        console.log(HandleB1);
        setRenderData(HandleB1.sort((a, b) => {
            return Number(b.rating) - Number(a.rating);
        }))
    }
    const handle2 = () => {
        let HandleB1 = DataUse.filter((el) => {
            return ((Number(el.rating) > 2));
        })
        setRenderData(HandleB1.sort((a, b) => {
            return Number(b.rating) - Number(a.rating);
        }))
    }
    const handle3 = () => {
        let HandleB1 = DataUse.filter((el) => {
            return ((Number(el.rating) > 3));
        })
        setRenderData(HandleB1.sort((a, b) => {
            return Number(b.rating) - Number(a.rating);
        }))
    }
    const handle4 = () => {
        let HandleB1 = DataUse.filter((el) => {
            return ((Number(el.rating) > 4));
        })
        setRenderData(HandleB1.sort((a, b) => {
            return Number(b.rating) - Number(a.rating);
        }))
    }
    console.log(DataUse[0].card);
    const cardOnly = () => {
        let HandleB1 = DataUse.filter((el) => {

            return (((el.card) === "Yes"));
        })
        setRenderData(HandleB1)

    }
    const cashOnly = () => {
        let HandleB1 = DataUse.filter((el) => {
            return (((el.cash) === "Yes"));
        })
        setRenderData(HandleB1)

    }
    const Rate1 = () => {
        let HandleB1 = DataUse.filter((el) => {
            return ((Number(el.rating) > 4));
        })
        setRenderData(HandleB1.sort((a, b) => {
            return Number(b.cost) - Number(a.cost);
        }))

    }
    const Rate2 = () => {
        let HandleB1 = DataUse.filter((el) => {
            return ((Number(el.rating) > 4));
        })
        setRenderData(HandleB1.sort((a, b) => {
            return Number(a.cost) - Number(b.cost);
        }))

    }

    const all = () => {
        setRenderData(DataUse)
    }


    return (<>
        <div className={styles.form}>

            <input onChange={handleData} type="text" name="image" placeholder="Restorant image url here.." />
            <input onChange={handleData} type="text" name="title" placeholder="Restorant name..." />
            <input onChange={handleData} type="text" name="type1" placeholder="Food Availble.." />
            <input onChange={handleData} type="number" name="cost" placeholder="Cost for one..." />
            <input onChange={handleData} type="number" name="minimum" placeholder="Minimum price..." />
            <input onChange={handleData} type="number" name="time" placeholder="Minimum time..." />
            <input onChange={handleData} type="text" name="card" placeholder="Payment method Card Yes or No" />
            <input onChange={handleData} type="text" name="cash" placeholder="Payment method Cash Yes or No" />
            <input onChange={handleData} type="text" name="rating" placeholder="Rating out of 5" />
            <input onChange={handleData} type="number" name="votes" placeholder="Total Votes..." />
            <input onChange={handleData} type="number" name="reviews" placeholder="Total Reviews.." />
            <button onClick={exportData} >Add Your Restorant</button>
        </div>
        <div>
            <p className={styles.sort}>Sort By Your Choice ! </p>
            <div className={styles.onclickButtons}>
                <button onClick={handle1}>Above 1 *</button>
                <button onClick={handle2}>Above 2 *</button>
                <button onClick={handle3}>Above 3 *</button>
                <button onClick={handle4}>Above 4 *</button>
                <button onClick={cashOnly}>Cash Only</button>
                <button onClick={cardOnly}>Card Only</button>
                <button onClick={Rate1}>Cost High To Low</button>
                <button onClick={Rate2}>Cost Low To High</button>
                <button onClick={all}>Show All</button>
            </div>
        </div>
        <RestorantDetails data={renderData} />

    </>
    )



}
// const SetFormData = (formData) => {
//     console.log(formData);
//     return (
//         <>
//             <RestorantDetails img={formData.image} title={formData.title} type1={formData.type1} type2={formData.type2} type3={formData.type3} type4={formData.type4} cost={formData.cost} minimum={formData.minimum} time={formData.time} paymentMethod={formData.paymentMethod} rating={formData.rating} votes={formData.votes} reviews={formData.reviews} />
//         </>

//     )

// }
// //export { SetFormData }