import React from 'react'
import data from './data.json'
import MusicHeader from './MusicHeader'
import MusicElement from './MusicElement'


console.log(data)

//This is the file where we import all our components!
export const App = () => {
  return (
    <section>
      <MusicHeader />
      <div className="album-wrapper">
        {data.albums.items.map((item) => (
          <MusicElement
            key={item.id}
            image={item.images[1].url}
            album={item.name}
            albumUrl={item.external_urls.spotify}
            item={item}
          />
        ))}
      </div>
    </section>
  )
}

