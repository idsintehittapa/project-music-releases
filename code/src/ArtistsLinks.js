import React from 'react'

const ArtistsLinks = props => {
  return (
    <a
      className="artist-info"
      href={props.item.external_urls.spotify}
      rel="noopener noreferrer"
    >
      {props.item.name}
    </a>
  )
}
export default ArtistsLinks