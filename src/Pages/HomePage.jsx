import PropTypes from 'prop-types'
import Character from "../components/Character";
import { v4 as uuidv4 } from 'uuid';
export default function HomePage({ data }) {
    return (
        <>
            <h1 className='font-black text-white uppercase text-center text-7xl'>welcome rick and morty fans! </h1>
            <div className="grid grid-cols-2 gap-2  mt-4 ">
                {

                    data.map((item) => (

                        <Character
                            key={uuidv4()}
                            name={item.name}
                            status={item.status}
                            species={item.species}
                            gender={item.gender}
                            image={item.image}
                            id={item.id}
                            location={item.location.name}
                            origin={item.origin.name}
                            flag={true}
                        ></Character>
                    ))

                }

            </div>
        </>

    )
}
HomePage.propTypes = {
    data: PropTypes.array.isRequired,
};