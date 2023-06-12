import PropTypes from 'prop-types';

export default function Types({types}) {
  return (
    <section>
        <h3>Type of Pokemon:</h3>
              <ul>
                {/* used map method to get the pokemon's type */}
              {types.map((type)=> {
                return (
                  <div key={type.slot}>
                    <li>{type.type.name.substring(0,1).toUpperCase()}{type.type.name.substring(1)}</li>
                  </div>
                )
                })
              }
             </ul>
    </section>
  )
}
Types.props = {
    types: PropTypes.object,   
  }
