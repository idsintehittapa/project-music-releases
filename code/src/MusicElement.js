import React from 'react'
import data from './data.json'
import MusicAlbumcover from './MusicAlbumcover'
import MusicText from './MusicText'

console.log(data)
//Component for each album-item
//Should we do a map-function here? 8:04 in video.
const MusicElement = (props) => {
  return (
    <>
      <div>
        {data.albums.items.map((item) => (
          <MusicAlbumcover
          key={item.id}  
          //Kolla upp key!
          image={item.images[1].url}
          /> 
        ))}
        
      </div>
      <div>
        {data.albums.items.map((item) => (
          <MusicText 
          key={item.id}
          album={item.name}
          artist={item.artists[0].name}
          />
        ))}
        
      </div>
    </>
  )
}

export default MusicElement;