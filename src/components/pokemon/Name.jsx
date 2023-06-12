import React from "react";
import PropTypes from 'prop-types';

export default function Name({id, name}) {
  return (
    <>
      <h2>
        {/* sliced the string to get the first letter as capitalized */}
        {id}. {name.substring(0, 1).toUpperCase()}
        {name.substring(1)}
      </h2>
    </>
  );
}
//prop types
Name.props = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  
}

  