import { useContext } from "react";
import { Auth } from "./AuthContext"
import { AuthProvider } from "./AuthContext"


export function AuthData() {
    const value = useContext(Auth);
    console.log(value.a);
    return (
        <AuthProvider>

            <div>
                <div>
                    <button onClick={() => value.HandleSubmit()}>Login</button>
                    <p >Login</p>
                    <p >Logout</p>
                </div>
            </div>
        </AuthProvider>

    )
}