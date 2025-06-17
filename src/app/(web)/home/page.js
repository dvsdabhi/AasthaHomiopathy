import React from 'react'
import Firstcomponent from './firstcomponent'
import Secondcomponent from './secondcomponent'
import Thirdcomponent from './thirdcomponent'
import Blogcomponent from './blogcomponent'

const Page = () => {
  return (
    <>
      <div className=''>
        <Firstcomponent />
        <Secondcomponent />
        <Thirdcomponent />
        <Blogcomponent />
      </div>
    </>
  )
}

export default Page