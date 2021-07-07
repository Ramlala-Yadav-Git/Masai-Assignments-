function Navbar() {
    return (<>
        <div className="Navbar">
            <div className="Left">
                <img src="https://brandmark.io/logo-rank/random/bp.png" alt="img" />
                <h3>TipWallets</h3>
            </div>
            <div className="Right">
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    </>
    )
}
export { Navbar }