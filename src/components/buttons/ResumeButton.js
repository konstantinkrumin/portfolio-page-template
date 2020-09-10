import React, { useContext } from 'react';
import Context from '../../context';

export default function ResumeButton() {
  const { FontAwesomeIcon, textContent } = useContext(Context);

  return (
    <a
      type="button"
      download="Resume (Konstantin Krumin).pdf"
      href="/src/static/resume_eng.pdf"
      className="button button-download-resume"
    >
      <FontAwesomeIcon icon={['fas', 'cloud-download-alt']} />{' '}
      {textContent.navigation.resume}
    </a>
  );
}
