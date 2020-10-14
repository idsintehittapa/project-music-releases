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
<<<<<<< HEAD
=======
            //How to get more than one artis to show here?
>>>>>>> ca2b6935802f3fbb5e593c37028339d6af1c81ed
            item={item}
          />
        ))}
      </div>
    </section>
  )
}

