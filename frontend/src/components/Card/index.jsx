import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'

function Card({ label, title, picture }) {
  return (
    <div>
        <div style={{ display: 'flex', alignItems: 'center', padding: 15 }}>
            <img src={picture} alt="profile" height={80} width={80} />
            <span>{label}</span>
        </div>
        <div style={{ display: 'flex', padding: 15 }}>
            <span>{title}</span>
        </div>  
    </div>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: 'Pseudo email',
  title: 'text de ouf',
  picture: DefaultPicture,
}
export default Card