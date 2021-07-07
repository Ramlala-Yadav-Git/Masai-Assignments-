import "../Components/payment.css"


function Date({ date }) {
    return (
        <h1>{date}</h1>
    )
}

function CaseStudy({ study }) {
    return (
        <h1 className="Css"> {study} </h1>
    )
}

function AmazonGift({ gift }) {
    return (
        <h1>{gift}</h1>
    )
}
function Pay({ pay }) {
    return (
        <h1>{pay}</h1>
    )
}

function Desktop({ desktop, mobile }) {
    return (
        <h3>{desktop} - {mobile}</h3>
    )
}
export { Date, CaseStudy, AmazonGift, Pay, Desktop }