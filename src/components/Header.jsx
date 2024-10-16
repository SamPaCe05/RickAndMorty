
import morty from '../assets/morty.svg'
export default function Header() {
    return (
        <header className='flex justify-center items-center py-7 gap-5 bg-slate-700'>
            <img src={morty} height={48} width={48} alt="mortyPendejo" />
            <h1 className='capitalize font-black text-white text-3xl'>rick and morty</h1>
        </header>
    )
}

