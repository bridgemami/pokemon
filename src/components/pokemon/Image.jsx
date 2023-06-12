import PropTypes from 'prop-types';
export default function Image({src, alt}) {
  return (
    <>
    <img src={src} alt={alt} />
    </>
  )
}

Image.props = {
  src: PropTypes.string,
  alt: PropTypes.string,
 
}
