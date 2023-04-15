import React , { useState, useEffect } from 'react'
import Image from './newscard'
import { Link } from 'react-router-dom';
import Footer from './footer';

const Entertainment = () => {

  const [images, setImages] = useState(null);
  let data;
  let finaldata;
  const fetchimg = async () => {

    const res = await fetch(
      "https://api.unsplash.com/search/photos?page=1&query=entertainment&client_id=fHtp17WQ5ZImZ3oZ_bf_V1NILIDGTUgakFeQJhz04fQ"
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
      {/* <div className="sub" id="entertainment">
        <h2>Entertainment</h2>
        <span></span>
      </div> */}
            <div className="space" id="entertainment">
        <div className="spaceflex1">
          <div className="spacename">
            ENTERTAINMENT</div>
          <div className="dots"> </div>
        </div>
        <Link to={'/news'} state={{type:'entertainment'}} >
          <div className="view">View more {'>'}</div>
        </Link>
      </div>


      <div className="cardcontainer cardcontainer-flex shift-card">
        {images && images.map((image) => {
          return <Image key={image.id} image={image} />
        })}
      </div>
      {/* <div className="footer"></div> */}
      <Footer/>
    </>
  )
}

export default Entertainment
