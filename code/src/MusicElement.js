import React from 'react'
import { ReactComponent as Heart } from "./icons/heart.svg"
import { ReactComponent as Play } from "./icons/play.svg"
import { ReactComponent as Dots } from "./icons/dots.svg"


//Component for each album-item
const MusicElement = (props) => {
  return (
    <div className="album">
      <div className="album-cover">
        <img src={props.image} alt="album cover" />
        <div className="overlay">
          <div className="heart-icon"><Heart /></div>
          <div className="play-icon"><Play /></div>
          <div className="dots-icon"><Dots /></div>
        </div>
      </div>

      <div className="album-name">
        <p> {props.album}</p>
      </div>

      <div className="artist-name">
      {props.item.artists.map(item => {
          return (
            <ArtistsLinks key={item.id} item={item} />
          )
        })}
    </div>
  )
}

export default MusicElement;