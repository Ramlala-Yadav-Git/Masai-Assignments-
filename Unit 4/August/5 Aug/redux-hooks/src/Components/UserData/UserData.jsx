

import { LoadData } from "../../Utills/LocalStorage";



export const UserData = () => {


    let auth = JSON.parse(LoadData("auth"))
    let data;

    if (auth) {
        data = JSON.parse(LoadData("data"))
    }

    return <>

        {
            auth ? <div>
                <h4> Hey, {data.username} Welcome to Home</h4>

            </div> : <div>
                <h4>Please Login ...</h4>
            </div>
        }
    </>


}