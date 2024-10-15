import React from 'react'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import './Video.css'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {category} = useParams()
  return (
    <div className='play-container'>
      <PlayVideo />
      <Recommended categoryId={category}/>
    </div>
  )
}

export default Video
