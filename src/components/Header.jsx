
import logo from '../assets/logo.svg'
export default function Header() {
    return (
        <header className='flex justify-center flex-col items-center py-7 gap-5 bg-slate-700'>
            <img src={logo} height={88} width={88} alt="mortyPendejo" />
            <h1 className='capitalize font-black text-center text-white text-7xl'>rick and morty</h1>
        </header>
    )
}

