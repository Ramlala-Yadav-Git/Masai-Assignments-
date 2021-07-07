function Lover({ img, title, para, address }) {
    return (
        <><div className="Lover">
            <div className="Title">
                <div> <img src={img} alt="not found" /></div>
                <div>
                    <h3>{title}</h3>
                    <p>{para}</p>
                </div>
            </div>
            <div className="Parent">
                <p className="Add">{address}</p>
            </div>

        </div>
        </>
    )
}
export { Lover }