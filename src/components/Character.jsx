
// eslint-disable-next-line react/prop-types
export default function Character({ name, status, species, gender, image, id, location, origin }) {

    return (

        <article key={id}
            className="flex gap-3 bg-card rounded-lg"
        >

            <div>
                <img
                    className="rounded-tl-lg rounded-bl-lg w-56 h-full mx-auto"
                    src={image} alt="Character" />
            </div>
            <div className="flex flex-col space-y-4">
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
                    <p className="ml-2"> - {species}</p>
                    <p className="ml-2">- {gender}</p>
                </div>

                <div className="text-white">
                    <h3>Last known location:</h3>
                    <p className="font-semibold">{location}</p>
                </div>
                <div className="mt-2 text-white">
                    <h3>First seen in:</h3>
                    <p className="font-semibold">{origin}</p>
                </div>

            </div>


        </article>
    )
}
