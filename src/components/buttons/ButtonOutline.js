import React, { useContext } from 'react';
import Context from '../../context';

export default function ButtonOutline(props) {
  const { FontAwesomeIcon } = useContext(Context);

  return (
    <button className="button-outline">
      <FontAwesomeIcon icon={props.icon} /> {props.title}
    </button>
  );
}
