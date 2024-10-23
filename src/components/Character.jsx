import { useEffect, useState } from 'react'
import female from '../assets/female.svg'
import male from '../assets/male.svg'
import plumbus from '../assets/plumbus.svg'
import pin from '../assets/pin.svg'

import { Link } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export default function Character({ name, status, species, gender, image, id, location, origin, flag, locationUrl, originUrl, episode }) {
    const [or, setOr] = useState(null)
    const [loc, setLoc] = useState(null)


    useEffect(() => {

        if (locationUrl !== undefined && originUrl !== undefined) {

            async function parallel() {
                try {
                    const [response1, response2] = await Promise.all([fetch(locationUrl), fetch(originUrl)])
                    const [data1, data2] = await Promise.all([response1.json(), response2.json()])
                    setLoc(data1)
                    setOr(data2)

                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }

            parallel()

        }

    }, [originUrl, locationUrl])



    return (

        <article key={id}
            className="flex gap-6 bg-card rounded-lg pr-6"
        >

            <div>
                <img
                    className="rounded-tl-lg rounded-bl-lg w-56 h-full mx-auto"
                    src={image} alt="Character" />
            </div>
            <div className="flex flex-col mb-4 space-y-4">
                <header>
                    <h2 className="text-2xl font-black text-white">{name}</h2>
                </header>

                <div className="flex text-white font-semibold flex-row items-center">
                    {

                        status == 'Dead' ? (
                            <div className="bg-red-600 rounded-full w-3 h-3"></div>
                        )
                            : status == 'Alive' ? (
                                <div className="bg-green-600 rounded-full w-3 h-3"></div>
                            ) : (
                                <div className="bg-gray-600 rounded-full w-3 h-3"></div>
                            )
                    }
                    <p className="ml-2">  {status}</p>
                    <p className="ml-2"> - {species} </p>
                    {
                        gender == 'Male' ? (
                            <img className="ml-3" src={male} width={24} height={24} alt="Male" />

                        ) :
                            <img className="ml-3" src={female} width={24} height={24} alt="Female" />
                    }
                </div>

                <div className="text-white">
                    <h3>Last known location:</h3>
                    <p className="font-semibold">{location}</p>
                </div>
                <div className="mt-2 text-white">
                    <h3>First seen in:</h3>
                    <p className="font-semibold">{origin}</p>
                </div>
                {
                    flag ? (
                        <Link to={`/details/${id}`} className='p-3 w-44  bg-blue-300 text-white font-black text-center rounded-md'>More Content</Link>
                    )
                        :
                        null

                }

            </div>

            {

                or && (
                    <div className='text-base font-medium text-white flex justify-center flex-col'>
                        <header className='flex flex-row gap-3'>
                            <img src={plumbus} width={40} height={40} alt="icon" />
                            <h2 className='capitalize font-black'>From {or.name}</h2>
                        </header> 
                        <p>Is a {or.type}</p>
                        <p>Located in the<br></br> dimension {or.dimension}</p>
                    </div>
                )
            }


            {

                loc && (
                    <div className='text-base font-medium text-white flex justify-center flex-col'>
                        <header className='flex flex-row gap-3'>
                            <img src={pin} width={40} height={40} alt="icon" />
                            <h2 className='capitalize font-black'>location: {loc.name}</h2>
                        </header>
                        <p>Is a {loc.type}</p>
                        {
                            loc.dimension == 'unknown' ? (
                                <p> {loc.dimension} dimension</p>
                            ) : (
                                <p>From the dimension {loc.dimension}</p>
                            )
                        }
                        <p>With {episode} episodes</p>
                    </div>
                )

            }
        </article>
    )
}
