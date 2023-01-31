import React from 'react'
import TagList from './TagList'
import VideoList from './VideoList'

const Body = () => {
  return (
    <div className='col-span-10 p-10 shadow-lg'>
        <div><TagList/></div>
        <div><VideoList/></div>
    </div>
  )
}

export default Body