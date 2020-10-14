import React from 'react'
import { ReactComponent as Heart } from "./icons/heart.svg"
import { ReactComponent as Play } from "./icons/play.svg"
import { ReactComponent as Dots } from "./icons/dots.svg"
import ArtistsLinks from 'ArtistsLinks'


//Component for each album-item
const MusicElement = props => {
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
        {props.album}
      </div>

      <div className="artist-name">
<<<<<<< HEAD
      {props.item.artists.map(item => {
=======
        {props.item.artists.map(item => {
>>>>>>> ca2b6935802f3fbb5e593c37028339d6af1c81ed
          return (
            <ArtistsLinks key={item.id} item={item} />
          )
        })}
<<<<<<< HEAD
=======
      </div>
>>>>>>> ca2b6935802f3fbb5e593c37028339d6af1c81ed
    </div>
  )
}

export default MusicElement;