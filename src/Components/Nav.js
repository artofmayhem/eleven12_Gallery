
 function Nav () {
    return (
        <div className="Nav-Wrapper bg-violet-800 py-4">
            <div className="Nav-Content flex justify-start align-start pl-10 text-4xl">ELEVN12</div>
            <div className="Nav-Content flex flex-row justify-end align-center pr-6">
                <ul className="flex flex-row justify-center align-center text-xl">
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