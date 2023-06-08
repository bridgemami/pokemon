import PropTypes from 'prop-types';

export default function Info(types) {
  return (
    <section>
         <p>Type(s):{types.map(type=> {<span key={type.slot}>{type.type.name}</span>})}</p>
        <p>Hello</p>
    </section>
  )

}

Info.props = {
    types: PropTypes.array.isRequired,
        }