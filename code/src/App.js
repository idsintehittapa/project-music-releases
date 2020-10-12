import React from 'react'
//import data from './data.json'
import MusicHeader from './MusicHeader'
import MusicList from './MusicList'

//console.log(data)

//This is the file where we import all our components!

export const App = () => {
  return (
    //this is JSX (our output):
    <>
      <MusicHeader />
      <MusicList />
    </>
  )
}
