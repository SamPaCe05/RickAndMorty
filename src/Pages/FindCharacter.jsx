import PropTypes from 'prop-types'
import SearchButtonLocal from "../components/SearchButtonLocal"
export default function FindCharacter({ data }) {
  return (
    <SearchButtonLocal data={data}></SearchButtonLocal>
  )
}
FindCharacter.propTypes = {
  data: PropTypes.array.isRequired,
}
