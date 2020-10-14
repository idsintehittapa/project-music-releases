import React from 'react'

const AlbumLinks = props => {
  return (
    <a
      className="album-info"
      href={props.albumUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.albumName}
    </a>
  )
}
export default AlbumLinks