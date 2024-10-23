import { Link } from "react-router-dom"
import NavigationSelect from "./NavigationSelect"
export default function NavBar() {

    return (

        <nav className=" outline-none flex justify-center h-screen list-none relative bg-slate-500">
            <ul className="flex flex-col gap-6 mt-20 items-center 
            [&>*]:w-40 
            [&>*]:text-center 
            [&>*]:capitalize 
            [&>*]:p-2
            [&>*]:bg-blue-300
            [&>*]:rounded-md
            [&>*]:font-black
            [&>*]:text-white
            [&>*]:cursor-pointer
            [&>*]:text-2xl">
                <Link to={"/"} >Home</Link>
                <Link to={"/about"} >About</Link>
                <NavigationSelect></NavigationSelect>
                <Link to={"/findcharacter"} >Find</Link>
            </ul>

        </nav>

    )
}
