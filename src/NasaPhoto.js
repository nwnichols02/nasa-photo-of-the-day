import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import styled from "styled-components";

const PhotoStyle = styled.div`

color: ${props => props.theme.secondColor};
`;



const NasaPhoto = (props) => {
  return (
    <PhotoStyle className="middlesection">
      <p>Today is {props.photo.date}</p>
      <h2>{props.photo.title}</h2>
      {/* <img src={props.photo.url}/> */}
      {props.media_type === 'video' ?
        <YoutubeEmbed embedId={props.photo.url}/> : <img src={props.photo.url} alt={'Vastness of Space'}/>}
        
      <p>{props.photo.explanation}</p>
    </PhotoStyle>
  );
};

export default NasaPhoto;
