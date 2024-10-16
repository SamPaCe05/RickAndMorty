
export default function NavBar() {
    return (

        <ul className="flex flex-row outline-none list-none justify-around items-start bg-slate-500  py-4">
            <li>
                <a className="text-2xl font-black text-white cursor-pointer">Details</a>
            </li>
            <li>
                <a className="text-2xl font-black text-white cursor-pointer">About</a>

            </li>
            <li>
                <a className="text-2xl font-black text-white cursor-pointer">Home</a>
            </li>
        </ul>
    )
}
