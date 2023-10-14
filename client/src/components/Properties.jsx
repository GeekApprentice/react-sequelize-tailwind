import PropTypes from 'prop-types'
import Property from './Property'

const Properties = ({properties}) => {
    console.log(properties)
  return (
    <div>
        {properties.map((p, index) => {
            <div key={index}>
                <Property property={p}/>
            </div>
        })}
    </div>
  )
}

Properties.propTypes = {
    properties: PropTypes.array
}

export default Properties