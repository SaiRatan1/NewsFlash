import React from 'react'
import { Link } from 'react-router-dom'


const Newscard = ({ news }) => {

  return (
    <>
    {news && 
    <Link to={news.url}>
    <div className="object">
      <div className='object-image-box'>
        <img src={news.urlToImage} alt="" className='cardimage' />
      </div>
      <div className="text">
        <p className='title'>{news.title}</p><br />
        <p className='p2'>{news.description}</p>
      </div>
    </div>
    </Link>
    }
    </>
  )
}

export default Newscard
