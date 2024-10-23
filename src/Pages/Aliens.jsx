import Character from "../components/Character";
import PropTypes from "prop-types";
export default function Aliens({ data }) {


    return (
        <div className=" grid grid-cols-2 gap-2  mt-4 ">


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
                        location={item.location.name}
                        origin={item.origin.name}
                        flag={true}

                    ></Character>
                ))

            }

        </div>
    )
}
Aliens.propTypes = {
    data: PropTypes.array.isRequired,
};