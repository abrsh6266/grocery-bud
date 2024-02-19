import React from 'react'

const Items = ({ items }) => {
  return (
    <div className='items'>
        {
            items.map(item=>{
                return <SingleItem item = {item} />
            })
        }
    </div>
  )
}

export default Items