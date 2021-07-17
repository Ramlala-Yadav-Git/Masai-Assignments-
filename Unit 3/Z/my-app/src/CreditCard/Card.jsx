


export function Card({ number, user, month, year, cvv }) {



    return (
        <div>
            <div>
                < img src="https://image.flaticon.com/icons/png/512/179/179457.png" alt="not" />
            </div>
            <div>
                <h3>{number === "" ? "45567856784532" : number}</h3>
            </div>
            <div>

                <div>
                    <h2>Card Holder</h2>
                    <h4>{user === "" ? "John Smith" : user}</h4>
                </div>
                <div>
                    <h2>EXPiry</h2>
                    <h4>{month === "" ? "09" : month}/{year === "" ? "20" : year}</h4>
                </div>
                <div>
                    <h2>CVV</h2>
                    <h4>{cvv === "" ? "345" : cvv}</h4>
                </div>
            </div>
        </div>
    )
}