import { BookProperty } from "./BookProperty"


export const Home = () => {



    return <>
        <BookProperty url={"https://picsum.photos/201/300"} rate={290} review={80} rating={4.0} title={"Hotel Vilas"} add={"New, delhi, rajnagar"} />
        <BookProperty url={"https://picsum.photos/202/300"} rate={2900} review={5} rating={4.1} title={"Hotel Rohan"} add={"Ganjipur, Bihar, rajnagar"} />
        <BookProperty url={"https://picsum.photos/203/300"} rate={270} review={55} rating={4.5} title={"Hotel ShantiPriya"} add={"Bhopal, Mp, rajnagar"} />
        <BookProperty url={"https://picsum.photos/204/300"} rate={200} review={25} rating={4.8} title={"Hotel Bahar"} add={"New, delhi, rajnagar"} />

    </>
}