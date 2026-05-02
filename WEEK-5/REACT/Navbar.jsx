function Navbar(){
    return(
        <div className="flex justify-between items-center bg-gray-800 text-white p-4 ">
            <h1>LOGO</h1>
            <ul className="flex gap-10 text-lg font-medium">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default Navbar;