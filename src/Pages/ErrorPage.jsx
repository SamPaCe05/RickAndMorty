import PropTypes from 'prop-types'



export default function ErrorPage({ error }) {
  return (
    <div className=' font-black text-red-700 absolute right-[400px] top-80'>
      <h1 className='text-7xl'> Error {error}</h1>

    </div>
  )
}
ErrorPage.propTypes = {
  error: PropTypes.string.isRequired,
}