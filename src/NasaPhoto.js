import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const NasaPhoto = (props) => {
  return (
    <div className="middlesection">
      <p>Today is {props.photo.date}</p>
      <h2>{props.photo.title}</h2>
      {/* <img src={props.photo.url}/> */}
      <YoutubeEmbed embedId={props.photo.url} />
      <p>{props.photo.explanation}</p>
    </div>
  );
};

export default NasaPhoto;
