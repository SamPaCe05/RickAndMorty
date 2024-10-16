import { useEffect, useState } from "react"
import Character from "../components/Character";
export default function HomePage() {

    const [data, setData] = useState([]);
    const url = 'https://rickandmortyapi.com/api/character/'
    async function fetching(url) {
        const response = await fetch(url)
        const info = await response.json();

        setData(info.results)


    }

    useEffect(() => {
        fetching(url)
    }, [])


    return (

        <div className="grid grid-cols-3 gap-3 mt-4 ">
            {

                data.map(item => (

                    <Character
                        key={item.id}
                        name={item.name}
                        status={item.status}
                        species={item.species}
                        gender={item.gender}
                        image={item.image}
                        id={item.id}
                    ></Character>

                ))


            }

        </div>
    )
}
