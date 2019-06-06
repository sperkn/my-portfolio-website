import React from 'react';
import icons from '../images/sprite.svg';

const Icon = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`${props.class}`}
    >
      <use xlinkHref={`${icons}#${props.name}`} />
    </svg>
  )
}

export default Icon;