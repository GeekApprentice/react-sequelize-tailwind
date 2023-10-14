import PropTypes from 'prop-types'

const Property = ({property}) =>
   (
    <div>
        <h1 className="text-red-600">{property.name}</h1>
        <h5>{property.price}</h5>
        <h5>{property.location}</h5>
    </div>
  )


Property.propTypes = {
    property: PropTypes.object
}

export default Property