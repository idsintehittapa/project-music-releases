import React from 'react'

//Component for each album-item
const MusicElement = (props) => {
  return (
    <section className="album-wrapper">
      <div className="album-cover">
        <img src={props.image} alt="album cover" />
      </div>

      <div className="album-name">
        <p> {props.album}</p>
      </div>

      <div className="artist-name">
        <p> {props.artist}</p>
      </div>
    </section>
  )
}

export default MusicElement;