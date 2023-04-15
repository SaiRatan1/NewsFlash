import React, { useState, useEffect } from 'react'
import Image from './newscard'
import { Link } from 'react-router-dom';
const Finance = () => {

  const [images, setImages] = useState(null);
  let data;
  let finaldata;
  const fetchimg = async () => {

    const res = await fetch(
      "https://api.unsplash.com/search/photos?page=1&query=finance&client_id=fHtp17WQ5ZImZ3oZ_bf_V1NILIDGTUgakFeQJhz04fQ"
    );
    finaldata = await res.json();
    data = finaldata.results.slice(0, 4)
    setImages(data);
  };


  useEffect(() => {
    fetchimg();
  }, []);




  return (
    <>
      <div className="space" id="finance">
        <div className="spaceflex1">
          <div className="spacename">
            FINANCE</div>
          <div className="dots"> </div>
        </div>
        <Link to={'/news'} state={{ type: 'finance' }} >
          <div className="view">View more {'>'}</div>
        </Link>
      </div>


      {/* <div className="sub" id="finance">
        <h2>Finance</h2>
        <span></span>
      </div> */}

      
      <div className="cardcontainer cardcontainer-flex shift-card">
        {images && images.map((image) => {
          return <Image key={image.id} image={image} />
        })}
      </div>
    </>
  )
}

export default Finance
