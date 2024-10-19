import PropTypes from 'prop-types'
import { useState } from 'react'
import Character from './Character'
import rick from '../assets/rick.svg'
import rickOp from '../assets/rickOp.svg'

export default function SearchButtonLocal({ data }) {
    const [, setValueSearch] = useState('');
    const [valueSearchAPI, setValueSearchAPI] = useState('');
    const [fil, setFil] = useState([])
    const [search, setSearch] = useState(null)
    const [api, setApi] = useState([])

    async function fetchChrt(url) {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(response.status)
            }
            const dataApi = await response.json()
            console.log(dataApi.results);

            setApi(dataApi.results)
        } catch (error) {
            console.log(error);

        }

    }

    const callCharacter = (itemValue) => {
        const select = fil.find(item => item.name === itemValue);
        setSearch(select)
    }

    const handleSubmitApi = (e) => {
        e.preventDefault();
        if (valueSearchAPI) {

            let url = 'https://rickandmortyapi.com/api/character/?name='
            let ref = valueSearchAPI
            url += ref.replaceAll(' ', '+')

            fetchChrt(url)
        }
    }
    const handleCHangeLocal = (e) => {
        const value = e.target.value
        setValueSearch(value)
        const dataFilter =
            data.filter(item => item.name.toLowerCase().startsWith(value.toLowerCase()))
        setFil(dataFilter)

    }
    const handleCHangeAPI = (e) => {
        const value = e.target.value
        setValueSearchAPI(value)
    }
    return (
        <div className='bg-white flex flex-col w-full min-h-screen pb-11'>
            <form className=' flex flex-col items-center py-3 w-full h-full'>
                <div className='flex flex-row gap-4 '>
                    <img src={rick} width={62} height={62} alt="rick" />
                    <h2 className='text-5xl font-black capitalize'> Search a Local Character Morty!</h2>
                </div>

                <div className='flex flex-row mb-3 gap-3'>
                    <label htmlFor='local' className='text-black'>Search</label>
                    <input onChange={handleCHangeLocal} placeholder='Find a Character' className='focus:outline-none' id='local' type="text" />
                </div>

                <select className='w-96' defaultValue=""
                    onChange={(e) => callCharacter(e.target.value)}
                >
                    <option value="" disabled key="" className='capitalize'>Select A Character</option>
                    {fil.length > 0 ? (
                        fil.map((item, index) => (
                            <option key={index} value={item.name}>{item.name}</option>
                        ))
                    ) : null
                    }
                </select>

                <div className=' w-1/2 h-fit mt-3'>
                    {search != null ? (

                        <Character
                            key={search.id}
                            name={search.name}
                            status={search.status}
                            species={search.species}
                            gender={search.gender}
                            image={search.image}
                            id={search.id}
                            location={search.location.name}
                            origin={search.origin.name}
                        />

                    ) : (
                        <div className='text-center text-xl py-5'>
                            <p className='uppercase'>select something , morty!</p>
                        </div>
                    )}
                </div>


            </form>


            <form className=' flex flex-col items-center mt-3 w-full h-full'
                onSubmit={handleSubmitApi}
            >

                <div className='bg-slate-700 w-full flex justify-center flex-row gap-3  items-center'>
                    <h2 className='text-4xl text-white font-black'>Search In the Fucking API, Morty!</h2>
                    <img width={72} height={72} src={rickOp} alt="rick" />
                </div>

                <div className='flex flex-row gap-5 mt-3 items-center'>

                    <div className='flex flex-row my-6 gap-3'>
                        <label htmlFor='API' className='text-black'>Search</label>
                        <input onChange={handleCHangeAPI} id='API' placeholder='Find a Character' className='w-48 h-7 focus:outline-none' type="text" />
                    </div>
                    <input type="submit" value="Consult" className=' w-32 h-10 cursor-pointer' />

                </div>

            </form>

            <div className='grid grid-cols-2 gap-3'>
                {
                    api.map(item => (
                        <Character
                            key={item.id}
                            name={item.name}
                            status={item.status}
                            species={item.species}
                            gender={item.gender}
                            image={item.image}
                            id={item.id}
                            location={item.location.name}
                            origin={item.origin.name}
                        ></Character>
                    ))
                }
            </div>



        </div>
    )

}


SearchButtonLocal.propTypes = {
    data: PropTypes.array.isRequired
}
