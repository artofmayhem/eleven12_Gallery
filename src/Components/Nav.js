
 function Nav () {
    return (
        <div className="Nav-Wrapper bg-violet-800">
            <div className="Nav-Content flex justify-center align-center">ELEVN12</div>
            <div className="Nav-Content flex flex-row justify-center align-center">
                <ul className="flex flex-row justify-end">
                    <a href="https://www.yahoo.com" className="px-4">Home</a>
                    <a href="https://www.yahoo.com" className="px-4">About</a>
                    <a href="https://www.yahoo.com" className="px-4">Contact</a>
                    <a href="https://www.yahoo.com" className="px-4">Login</a>
                </ul>
            </div>
        </div>
    )
}

export default Nav;