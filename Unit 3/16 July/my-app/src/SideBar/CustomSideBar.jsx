export function CustomSideBar({ label, icon }) {

    return (

        <>
            <div>
                <img src={icon} alt="Not-found" />
                <h3>{label}</h3>
            </div>
        </>
    )
}