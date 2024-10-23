import { useParams } from "react-router-dom";
import Character from "../components/Character";
import { useEffect, useState } from "react";

export default function DetailsPage() {

  const { id } = useParams();

  const [data, setData] = useState(null)

  async function ftch(id) {
    const url = 'https://rickandmortyapi.com/api/character/'
    const response = await fetch(url + id)
    const data = await response.json()
    setData(data)
    
  }
  useEffect(() => {
    ftch(id)
  }, [id])

  return (
    <div className=" min-h-screen flex items-center justify-center ">
      {

        data && (

          <Character
            key={data.id}
            name={data.name}
            status={data.status}
            species={data.species}
            gender={data.gender}
            image={data.image}
            id={data.id}
            location={data.location.name}
            locationUrl={data.location.url}
            origin={data.origin.name}
            originUrl={data.origin.url}
            episode={data.episode.length}

            flag={false}
          />

        )


      }
    </div>
  )
}
