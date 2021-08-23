import { BookProperty } from "./BookProperty"


export const Home = () => {



    return <>
        <BookProperty url={"https://picsum.photos/201/300"} rate={290} review={85} rating={4.0} />
        <BookProperty url={"https://picsum.photos/202/300"} rate={2900} review={85} rating={4.1} />
        <BookProperty url={"https://picsum.photos/203/300"} rate={270} review={85} rating={4.5} />
        <BookProperty url={"https://picsum.photos/204/300"} rate={200} review={85} rating={4.8} />

    </>
}