
import NavBar from './NavBar'
import Header from './Header'
export default function Aside() {
    return (
        <aside className='flex flex-col bg  fixed top-0 left-0 w-[450px] h-full  '>
            <Header></Header>
            <NavBar></NavBar>
        </aside>
    )
}
