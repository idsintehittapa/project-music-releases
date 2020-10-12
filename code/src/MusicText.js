import React from 'react'


const MusicText = (props) => {
  return (
    <>
      <p> {props.album}</p>
      <p> {props.artist}</p>
    </>
  )
};

export default MusicText;