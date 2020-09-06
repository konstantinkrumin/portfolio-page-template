import React, { useContext } from "react";
import Context from "../../context";

export default function ResumeButton() {
  const { FontAwesomeIcon, textContent } = useContext(Context);

  return (
    <span type="button" className="button button-download-resume">
      <FontAwesomeIcon icon={["fas", "cloud-download-alt"]} />{" "}
      {textContent.navigation.resume}
    </span>
  );
}
