
export default function Character({ name, status, species, gender, image, id }) {
    return (

        <article key={id}
            className="flex gap-3 bg-slate-400 rounded-md"
        >

            <div>
                <img
                    className="rounded-full w-48 h-48 mx-auto"
                    src={image} alt="Character" />
            </div>
            <header>
                <h2>{name}</h2>
            </header>
            <div>
                <img src="" alt="" />
                <p>{status}</p>
            </div>
            <div>
                <p>{species}</p>
                <h3>{gender}</h3>
            </div>
            <div>
                <p></p>
                <h3></h3>
            </div>

        </article>
    )
}
