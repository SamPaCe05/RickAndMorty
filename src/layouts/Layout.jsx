import { Outlet } from "react-router-dom"
import Aside from "../components/Aside"
export default function layout() {
    return (
        <div className="flex flex-row ">
            <Aside ></Aside>

            <div className="ml-[460px] w-full h-full">
                <Outlet />
            </div>

        </div>
    )
}
