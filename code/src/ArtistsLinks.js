import React from 'react'

const ArtistsLinks = props => {
    return (
        <a 
          className="artistInfo" 
          href={props.item.external_urls.spotify} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {props.item.name}
        </a>

    )
}

export default ArtistsLinks;