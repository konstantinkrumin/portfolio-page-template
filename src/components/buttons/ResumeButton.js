import React, { useContext } from 'react';
import Context from '../../context';

export default function ResumeButton() {
  const { FontAwesomeIcon, textContent } = useContext(Context);

  return (
    <a
      // type="button"
      // target="_blank"
      // download="Resume (Konstantin Krumin).pdf"
      // href="https://github.com/konstantinkrumin/portfolio-page-template/blob/master/src/static/resume_eng.pdf"
      href="../../static/resume_eng.pdf"
      download
      className="button button-download-resume"
    >
      <FontAwesomeIcon icon={['fas', 'cloud-download-alt']} />{' '}
      {textContent.navigation.resume}
    </a>
  );
}
